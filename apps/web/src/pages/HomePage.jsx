
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Calendar, Users, ArrowRight, BookOpen } from 'lucide-react';
import { toast } from 'sonner';
import Header from '@/components/Header.jsx';
import DestinationCard from '@/components/DestinationCard.jsx';
import ActivityCard from '@/components/ActivityCard.jsx';
import DishCard from '@/components/DishCard.jsx';
import { destinationsList } from '@/data/destinations.js';

const HomePage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    travelDate: '',
    guests: '',
    message: ''
  });

  const [hotelSearch, setHotelSearch] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: ''
  });

  const activities = [
    {
      image: 'https://images.unsplash.com/photo-1585380375124-541947be7ac9',
      title: 'Wildlife Safaris',
      description: 'Explore Yala and Udawalawe National Parks to see elephants, leopards, and exotic wildlife.'
    },
    {
      image: 'https://images.unsplash.com/photo-1677146334364-f15fb16baec1',
      title: 'Tea Plantation Tours',
      description: 'Visit Nuwara Eliya and learn how world-famous Ceylon tea is produced.'
    },
    {
      image: 'https://images.unsplash.com/photo-1578052982378-3611ba9b2ee6',
      title: 'Surfing & Diving',
      description: 'Ride the waves in Arugam Bay or explore coral reefs in Hikkaduwa.'
    },
    {
      image: 'https://images.unsplash.com/photo-1679244867850-5dcd25e4ab91',
      title: 'Ancient Temples',
      description: 'Discover sacred temples and spiritual heritage across the island.'
    }
  ];

  const dishes = [
    {
      image: 'https://images.unsplash.com/photo-1682265027662-e447b215f67e',
      name: 'Rice & Curry',
      description: 'A traditional Sri Lankan meal with rich spices and multiple side dishes.'
    },
    {
      image: 'https://images.unsplash.com/photo-1585572456084-7e4c9183c094',
      name: 'Hoppers (Appa)',
      description: 'Bowl-shaped pancakes served with egg or spicy sambols.'
    },
    {
      image: 'https://images.unsplash.com/photo-1650983053569-69c6990ee717',
      name: 'Seafood Curry',
      description: 'Fresh ocean flavors cooked with coconut milk and spices.'
    },
    {
      image: 'https://images.unsplash.com/photo-1576064935605-772cbac1e104',
      name: 'Ceylon Tea',
      description: 'World-famous tea grown in the highlands of Sri Lanka.'
    }
  ];

  const guides = [
    {
      title: '7-Day Sri Lanka Itinerary',
      description: 'Plan the perfect one-week trip covering beaches, hills, and culture.',
      icon: MapPin
    },
    {
      title: 'Best Time to Visit Sri Lanka',
      description: 'Learn when to travel based on weather and regions.',
      icon: Calendar
    },
    {
      title: 'Top 10 Places to Visit in Sri Lanka',
      description: 'A complete guide to must-see destinations.',
      icon: BookOpen
    }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.travelDate || !formData.guests) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (!formData.email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }

    const existingInquiries = JSON.parse(localStorage.getItem('tripInquiries') || '[]');
    localStorage.setItem('tripInquiries', JSON.stringify([...existingInquiries, { ...formData, submittedAt: new Date().toISOString() }]));

    toast.success('Thank you! Our team will contact you shortly to help plan your perfect trip.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      travelDate: '',
      guests: '',
      message: ''
    });
  };

  const handleHotelSearch = (e) => {
    e.preventDefault();
    
    if (!hotelSearch.destination || !hotelSearch.checkIn || !hotelSearch.checkOut || !hotelSearch.guests) {
      toast.error('Please fill in all search fields');
      return;
    }

    toast.success('Searching for available hotels in ' + hotelSearch.destination);
  };

  return (
    <>
      <Helmet>
        <title>Visit Sri Lanka - Discover Ancient Temples, Tea Hills & Golden Beaches</title>
        <meta name="description" content="Explore Sri Lanka's UNESCO heritage sites, pristine beaches, lush tea plantations, and vibrant culture. Plan your perfect island adventure today." />
      </Helmet>

      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0">
            <img 
              src="https://horizons-cdn.hostinger.com/3f324f6a-a0b1-471d-a91a-725e994c042b/38da79ef7d4384e7fc63e5e62762c858.jpg" 
              alt="Aerial view of pristine Sri Lankan beach with turquoise waters and white sand"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/50 to-secondary/90 mix-blend-multiply" />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mb-6 text-white drop-shadow-lg">Discover Sri Lanka Differently</h1>
              <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-white/95 drop-shadow-md">
                From ancient kingdoms and sacred temples to misty tea plantations and golden beaches, Sri Lanka offers a journey unlike anywhere else in the world. Explore culture, adventure, and relaxation in one unforgettable destination.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button 
                  size="lg"
                  onClick={() => document.querySelector('#destinations').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 rounded-full transition-all duration-200 active:scale-[0.98] shadow-lg shadow-primary/20"
                >
                  Explore Destinations
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => document.querySelector('#experiences').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white/10 hover:bg-white/20 text-white border-white/30 font-semibold text-lg px-8 py-6 rounded-full backdrop-blur-sm transition-all duration-200 active:scale-[0.98]"
                >
                  View Experiences
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto bg-secondary/40 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>🌍 8</div>
                  <div className="text-sm md:text-base text-white/90 font-medium">UNESCO World Heritage Sites</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>🏛️ 2000+</div>
                  <div className="text-sm md:text-base text-white/90 font-medium">Years of History</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>🌊 1340 km</div>
                  <div className="text-sm md:text-base text-white/90 font-medium">of Coastline</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* TOP DESTINATIONS */}
        <section id="destinations" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-secondary mb-4">Top Destinations in Sri Lanka</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore the most iconic and breathtaking locations across the island.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
              {destinationsList.map((destination, index) => (
                <DestinationCard 
                  key={destination.id}
                  {...destination} 
                  index={index} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* THINGS TO DO */}
        <section id="experiences" className="py-24 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-secondary mb-4">Unforgettable Experiences</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From adventure to culture, discover the best things to do in Sri Lanka.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {activities.map((activity, index) => (
                <ActivityCard key={activity.title} {...activity} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* TRAVEL GUIDES */}
        <section id="guides" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-secondary mb-4">Sri Lanka Travel Guides</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover comprehensive guides to help plan your perfect trip.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {guides.map((guide, index) => {
                const Icon = guide.icon;
                return (
                  <motion.div
                    key={guide.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-card p-8 rounded-3xl soft-shadow-hover border border-border/50 flex flex-col items-start"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-secondary font-serif">{guide.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-grow">{guide.description}</p>
                    <Button variant="link" className="p-0 h-auto text-primary font-semibold group-hover:text-secondary transition-colors">
                      Read Guide <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FOOD & CULTURE */}
        <section id="culture" className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="mb-4 text-primary-foreground">Taste Sri Lanka</h2>
              <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
                Experience a vibrant mix of flavors, traditions, and cultural heritage.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {dishes.map((dish, index) => (
                <DishCard key={dish.name} {...dish} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* BOOK HOTELS */}
        <section id="hotels" className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-secondary mb-4">Find Your Perfect Stay</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Search and compare the best hotels across Sri Lanka for every budget.
              </p>
            </motion.div>

            <Card className="max-w-5xl mx-auto soft-shadow border-border/50 rounded-3xl overflow-hidden">
              <CardContent className="p-8 md:p-10 bg-card">
                <form onSubmit={handleHotelSearch} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="destination" className="text-sm font-semibold text-secondary">Destination</Label>
                      <Select value={hotelSearch.destination} onValueChange={(value) => setHotelSearch({...hotelSearch, destination: value})}>
                        <SelectTrigger id="destination" className="text-foreground bg-background border-border h-12 rounded-xl">
                          <SelectValue placeholder="Where to?" />
                        </SelectTrigger>
                        <SelectContent>
                          {destinationsList.map(dest => (
                            <SelectItem key={dest.id} value={dest.id}>{dest.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="checkIn" className="text-sm font-semibold text-secondary">Check-in Date</Label>
                      <Input 
                        id="checkIn"
                        type="date" 
                        value={hotelSearch.checkIn}
                        onChange={(e) => setHotelSearch({...hotelSearch, checkIn: e.target.value})}
                        className="text-foreground bg-background border-border h-12 rounded-xl"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="checkOut" className="text-sm font-semibold text-secondary">Check-out Date</Label>
                      <Input 
                        id="checkOut"
                        type="date" 
                        value={hotelSearch.checkOut}
                        onChange={(e) => setHotelSearch({...hotelSearch, checkOut: e.target.value})}
                        className="text-foreground bg-background border-border h-12 rounded-xl"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="hotelGuests" className="text-sm font-semibold text-secondary">Guests</Label>
                      <Input 
                        id="hotelGuests"
                        type="number" 
                        min="1"
                        placeholder="Number of guests"
                        value={hotelSearch.guests}
                        onChange={(e) => setHotelSearch({...hotelSearch, guests: e.target.value})}
                        className="text-foreground bg-background border-border h-12 rounded-xl placeholder:text-muted-foreground"
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-14 rounded-xl text-lg transition-all duration-200 active:scale-[0.98] mt-4"
                  >
                    Search Hotels
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* PLAN YOUR TRIP */}
        <section id="plan" className="py-24 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-secondary mb-4">Plan Your Dream Trip</h2>
              <p className="text-lg text-muted-foreground">
                Tell us your travel plans and we'll help you create the perfect Sri Lanka experience.
              </p>
            </motion.div>

            <Card className="soft-shadow border-border/50 rounded-3xl overflow-hidden">
              <CardContent className="p-8 md:p-10 bg-card">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="firstName" className="text-sm font-semibold text-secondary">First Name *</Label>
                      <Input 
                        id="firstName"
                        type="text"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        required
                        className="text-foreground bg-background border-border h-12 rounded-xl placeholder:text-muted-foreground"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="lastName" className="text-sm font-semibold text-secondary">Last Name *</Label>
                      <Input 
                        id="lastName"
                        type="text"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        required
                        className="text-foreground bg-background border-border h-12 rounded-xl placeholder:text-muted-foreground"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-sm font-semibold text-secondary">Email *</Label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="text-foreground bg-background border-border h-12 rounded-xl placeholder:text-muted-foreground"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="travelDate" className="text-sm font-semibold text-secondary">Travel Date *</Label>
                      <Input 
                        id="travelDate"
                        type="date"
                        value={formData.travelDate}
                        onChange={(e) => setFormData({...formData, travelDate: e.target.value})}
                        required
                        className="text-foreground bg-background border-border h-12 rounded-xl"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="guests" className="text-sm font-semibold text-secondary">Number of Guests *</Label>
                      <Input 
                        id="guests"
                        type="number"
                        min="1"
                        placeholder="How many travelers?"
                        value={formData.guests}
                        onChange={(e) => setFormData({...formData, guests: e.target.value})}
                        required
                        className="text-foreground bg-background border-border h-12 rounded-xl placeholder:text-muted-foreground"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-sm font-semibold text-secondary">Message</Label>
                    <Textarea 
                      id="message"
                      placeholder="Tell us about your ideal trip, interests, or any special requirements"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="text-foreground bg-background border-border rounded-xl placeholder:text-muted-foreground resize-none p-4"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-14 rounded-xl text-lg transition-all duration-200 active:scale-[0.98]"
                  >
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-secondary text-secondary-foreground py-16 border-t-4 border-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">V</span>
                  </div>
                  <span className="text-2xl font-bold text-primary-foreground" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Visit Sri Lanka
                  </span>
                </div>
                <p className="text-secondary-foreground/80 max-w-sm leading-relaxed">
                  Your ultimate guide to discovering the beauty, culture, and adventure of Sri Lanka. Let us help you plan the journey of a lifetime.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-6 text-primary-foreground font-serif">Quick Links</h4>
                <ul className="space-y-4">
                  <li><a href="#destinations" className="text-secondary-foreground/80 hover:text-primary transition-colors">Destinations</a></li>
                  <li><a href="#experiences" className="text-secondary-foreground/80 hover:text-primary transition-colors">Experiences</a></li>
                  <li><a href="#guides" className="text-secondary-foreground/80 hover:text-primary transition-colors">Travel Guides</a></li>
                  <li><a href="#hotels" className="text-secondary-foreground/80 hover:text-primary transition-colors">Book Hotels</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-6 text-primary-foreground font-serif">Support</h4>
                <ul className="space-y-4">
                  <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Contact Us</a></li>
                  <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">FAQs</a></li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-secondary-foreground/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-secondary-foreground/60">© 2026 Visit Sri Lanka. All rights reserved.</p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary-foreground/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer text-secondary-foreground/80">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </div>
                <div className="w-10 h-10 rounded-full bg-secondary-foreground/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer text-secondary-foreground/80">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default HomePage;
