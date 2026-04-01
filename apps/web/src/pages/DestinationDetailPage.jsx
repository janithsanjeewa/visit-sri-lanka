
import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Clock, Calendar, Star, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import Header from '@/components/Header.jsx';
import { destinationsData, destinationsList } from '@/data/destinations.js';

// Sub-components defined in the same file to ensure reliable Vite resolution and avoid file count limits
const HeroSection = ({ destination }) => (
  <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img 
        src={destination.image} 
        alt={destination.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-secondary/60 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </div>
    <div className="relative z-10 text-center px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <span className="text-primary font-semibold tracking-widest uppercase mb-4 block">{destination.subtitle}</span>
        <h1 className="text-white mb-6 drop-shadow-lg">{destination.name}</h1>
      </motion.div>
    </div>
  </section>
);

const OverviewSection = ({ destination }) => (
  <section className="py-16 bg-background">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-secondary mb-6">Welcome to {destination.name}</h2>
      <p className="text-lg text-muted-foreground leading-relaxed">{destination.overview}</p>
    </div>
  </section>
);

const BestTimeToVisit = ({ destination }) => (
  <section className="py-12 bg-muted/30">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h3 className="text-secondary mb-4">Best Time to Visit</h3>
      <div className="inline-flex items-center gap-3 bg-card px-6 py-4 rounded-2xl soft-shadow border border-border">
        <Calendar className="text-primary w-6 h-6" />
        <span className="text-lg font-medium">{destination.bestTime}</span>
      </div>
    </div>
  </section>
);

const ThingsToDo = ({ destination }) => (
  <section className="py-16 bg-background">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-secondary text-center mb-12">Things to Do in {destination.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {destination.activities.map((activity, idx) => (
          <Card key={idx} className="soft-shadow-hover border-border/50">
            <CardContent className="p-6 flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-secondary mb-2">{activity.title}</h4>
                <p className="text-muted-foreground">{activity.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const TopAttractionsNearby = ({ destination }) => (
  <section className="py-16 bg-muted/30">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-secondary text-center mb-12">Top Attractions Nearby</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {destination.attractions.map((attr, idx) => (
          <Card key={idx} className="soft-shadow-hover border-border/50">
            <CardContent className="p-6 flex justify-between items-center">
              <h4 className="text-lg font-semibold text-secondary">{attr.name}</h4>
              <div className="text-right">
                <div className="text-sm font-medium text-primary">{attr.distance}</div>
                <div className="text-sm text-muted-foreground">{attr.time}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const TravelInfo = ({ destination }) => (
  <section className="py-16 bg-secondary text-secondary-foreground">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-primary-foreground mb-12">Travel Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <MapPin className="w-8 h-8 text-primary mb-4" />
          <h4 className="font-semibold mb-2">From Colombo</h4>
          <p className="text-secondary-foreground/80">{destination.distance}</p>
        </div>
        <div className="flex flex-col items-center">
          <Clock className="w-8 h-8 text-primary mb-4" />
          <h4 className="font-semibold mb-2">Travel Time</h4>
          <p className="text-secondary-foreground/80">{destination.travelTime}</p>
        </div>
        <div className="flex flex-col items-center">
          <Car className="w-8 h-8 text-primary mb-4" />
          <h4 className="font-semibold mb-2">Transport</h4>
          <p className="text-secondary-foreground/80">Car, Bus, or Train</p>
        </div>
      </div>
    </div>
  </section>
);

const HotelsSection = ({ destination }) => (
  <section className="py-16 bg-background">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-secondary text-center mb-12">Best Hotels in {destination.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {destination.hotels.map((hotel, idx) => (
          <Card key={idx} className="soft-shadow-hover border-border/50 overflow-hidden">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-semibold text-secondary">{hotel.name}</h4>
                <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded text-primary font-medium text-sm">
                  <Star className="w-4 h-4 fill-current" /> {hotel.rating}
                </div>
              </div>
              <p className="text-muted-foreground mb-6">{hotel.description}</p>
              <div className="flex justify-between items-center pt-4 border-t border-border">
                <div className="text-lg font-semibold">{hotel.price} <span className="text-sm text-muted-foreground font-normal">/ night</span></div>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Check Availability</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const BookingForm = ({ destination }) => {
  const [search, setSearch] = useState({ checkIn: '', checkOut: '', guests: '2' });
  
  const handleSearch = (e) => {
    e.preventDefault();
    toast.success(`Searching hotels in ${destination.name}...`);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4">
        <Card className="soft-shadow border-border/50">
          <CardContent className="p-8">
            <h3 className="text-secondary mb-6 text-center">Book Your Stay</h3>
            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div className="space-y-2">
                <Label>Destination</Label>
                <Input value={destination.name} disabled className="bg-muted" />
              </div>
              <div className="space-y-2">
                <Label>Check-in</Label>
                <Input type="date" required value={search.checkIn} onChange={e => setSearch({...search, checkIn: e.target.value})} />
              </div>
              <div className="space-y-2">
                <Label>Check-out</Label>
                <Input type="date" required value={search.checkOut} onChange={e => setSearch({...search, checkOut: e.target.value})} />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-10">Search</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

const CTASection = ({ destination }) => (
  <section className="py-20 bg-background text-center">
    <div className="max-w-2xl mx-auto px-4">
      <h2 className="text-secondary mb-6">Plan Your Trip to {destination.name}</h2>
      <p className="text-lg text-muted-foreground mb-8">Let us help you organize the perfect itinerary including accommodation, transport, and guided tours.</p>
      <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 rounded-full">Start Planning</Button>
    </div>
  </section>
);

const ExploreMoreDestinations = ({ currentId }) => (
  <section className="py-16 bg-muted/30 border-t border-border">
    <div className="max-w-7xl mx-auto px-4">
      <h3 className="text-secondary text-center mb-8">Explore More Destinations</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {destinationsList.filter(d => d.id !== currentId).map(dest => (
          <Link key={dest.id} to={`/destination/${dest.id}`}>
            <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              {dest.name}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const DestinationDetailPage = () => {
  const { destinationSlug } = useParams();
  const navigate = useNavigate();
  const destination = destinationsData[destinationSlug];

  if (!destination) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background">
        <h1 className="text-secondary mb-4">Destination Not Found</h1>
        <Button onClick={() => navigate('/')} className="bg-primary text-primary-foreground">Back to Home</Button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${destination.name} - Visit Sri Lanka`}</title>
        <meta name="description" content={destination.description} />
      </Helmet>

      <Header />

      <main className="pt-16">
        <div className="absolute top-20 left-4 z-50">
          <Button variant="ghost" onClick={() => navigate('/')} className="bg-background/80 backdrop-blur hover:bg-background text-secondary">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Button>
        </div>

        <HeroSection destination={destination} />
        <OverviewSection destination={destination} />
        <BestTimeToVisit destination={destination} />
        <ThingsToDo destination={destination} />
        <TopAttractionsNearby destination={destination} />
        <TravelInfo destination={destination} />
        
        {/* Google Map Section */}
        <section className="py-16 bg-background">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-secondary text-center mb-8">Location & Route</h2>
            <div className="aspect-video w-full rounded-2xl overflow-hidden soft-shadow border border-border">
              <iframe 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy" 
                allowFullScreen 
                src={`https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY_PLACEHOLDER&origin=Bandaranaike+International+Airport,+Sri+Lanka&destination=${encodeURIComponent(destination.name + ', Sri Lanka')}`}
              ></iframe>
            </div>
          </div>
        </section>

        <HotelsSection destination={destination} />
        <BookingForm destination={destination} />
        <CTASection destination={destination} />
        <ExploreMoreDestinations currentId={destination.id} />
      </main>
    </>
  );
};

export default DestinationDetailPage;
