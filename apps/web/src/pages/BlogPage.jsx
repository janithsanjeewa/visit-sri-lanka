// src/pages/BlogPage.jsx
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Clock, Tag, ArrowRight } from "lucide-react";
import { blogPosts } from "../data/blogPosts";

const categories = ["All", "Destinations", "Itineraries", "Travel Tips", "Hotels", "Experiences", "Adventures", "Food & Culture"];

const categoryColors = {
  Destinations: "bg-emerald-100 text-emerald-700",
  Itineraries: "bg-blue-100 text-blue-700",
  "Travel Tips": "bg-amber-100 text-amber-700",
  Hotels: "bg-purple-100 text-purple-700",
  Experiences: "bg-rose-100 text-rose-700",
  Adventures: "bg-orange-100 text-orange-700",
  "Food & Culture": "bg-yellow-100 text-yellow-700",
};

import { useState } from "react";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  const [featured, ...rest] = filtered;

  return (
    <>
      <Helmet>
        <title>Sri Lanka Travel Blog — Tips, Guides & Inspiration | Visit Sri Lanka</title>
        <meta
          name="description"
          content="Discover travel guides, itineraries, hotel recommendations, and insider tips for visiting Sri Lanka. Your ultimate resource for planning the perfect Sri Lanka trip."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-800 to-teal-900 text-white py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1588598198321-9735fd6a2b37?w=1400&q=60')", backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-emerald-300 font-semibold tracking-widest text-sm uppercase mb-3"
          >
            Sri Lanka Travel Blog
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold leading-tight mb-4"
          >
            Stories, Guides & Tips for Your Sri Lanka Adventure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-emerald-100 text-lg"
          >
            Honest advice and inspiring guides from the island of serendipity
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b sticky top-0 z-30 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-14">
        {/* Featured Post */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-14"
          >
            <Link to={`/blog/${featured.slug}`} className="group grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative overflow-hidden h-64 md:h-auto">
                <img
                  src={featured.coverImage}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[featured.category] || "bg-gray-100 text-gray-700"}`}>
                  {featured.category}
                </span>
              </div>
              <div className="bg-white p-8 flex flex-col justify-center">
                <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-2">Featured Article</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors leading-snug">
                  {featured.title}
                </h2>
                <p className="text-gray-500 mb-5 leading-relaxed">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                  <span className="flex items-center gap-1"><Clock size={14} /> {featured.readTime}</span>
                  <span>{featured.date}</span>
                </div>
                <span className="inline-flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all">
                  Read Article <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
            >
              <Link to={`/blog/${post.slug}`} className="group block bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow h-full">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] || "bg-gray-100 text-gray-700"}`}>
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-emerald-700 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </>
  );
}
