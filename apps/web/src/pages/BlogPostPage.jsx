// src/pages/BlogPostPage.jsx
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
import { getBlogPost, getRelatedPosts } from "../data/blogPosts";

const categoryColors = {
  Destinations: "bg-emerald-100 text-emerald-700",
  Itineraries: "bg-blue-100 text-blue-700",
  "Travel Tips": "bg-amber-100 text-amber-700",
  Hotels: "bg-purple-100 text-purple-700",
  Experiences: "bg-rose-100 text-rose-700",
  Adventures: "bg-orange-100 text-orange-700",
  "Food & Culture": "bg-yellow-100 text-yellow-700",
};

function ContentBlock({ block }) {
  switch (block.type) {
    case "intro":
      return (
        <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-emerald-400 pl-5 my-6">
          {block.text}
        </p>
      );
    case "paragraph":
      return <p className="text-gray-700 leading-relaxed my-5 text-lg">{block.text}</p>;
    case "heading":
      return (
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b border-gray-100 pb-2">
          {block.text}
        </h2>
      );
    case "tip":
      return (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-6 py-4 my-8">
          <p className="text-emerald-800 font-medium">{block.text}</p>
        </div>
      );
    case "numbered":
      return (
        <ol className="my-6 space-y-6">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-4">
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">
                {i + 1}
              </span>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      );
    case "days":
      return (
        <div className="my-6 space-y-5">
          {block.items.map((item, i) => (
            <div key={i} className="flex gap-4 bg-gray-50 rounded-xl p-5">
              <div className="flex-shrink-0 text-center">
                <span className="block font-bold text-emerald-600 text-sm">{item.day}</span>
                <span className="block font-semibold text-gray-700 text-xs mt-0.5 whitespace-nowrap">
                  {item.location}
                </span>
              </div>
              <div className="border-l border-gray-200 pl-4">
                <p className="text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      );
    case "months":
      return (
        <div className="my-6 space-y-4">
          {block.items.map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-5">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="font-bold text-gray-900">{item.month}</h3>
                <span className="text-base">{item.rating}</span>
              </div>
              <p className="text-gray-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
}

export default function BlogPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = getBlogPost(id);
  const related = getRelatedPosts(id, 3);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Article not found</h1>
        <Link to="/blog" className="text-emerald-600 font-semibold hover:underline">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Visit Sri Lanka Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <section className="relative h-[50vh] min-h-[340px] overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 max-w-4xl mx-auto left-0 right-0">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span
              className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${categoryColors[post.category] || "bg-white/20 text-white"
                }`}
            >
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
              <span className="flex items-center gap-1">
                <Clock size={14} /> {post.readTime}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={14} /> {post.date}
              </span>
              <span>By {post.author}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-6 py-12">
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-gray-600 font-semibold hover:text-emerald-600 transition-all"
          >
            <ArrowLeft size={16} /> Home
          </button>

          <button
            onClick={() => navigate("/blog")}
            className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:gap-3 transition-all"
          >
            <ArrowLeft size={16} /> Back to Blog
          </button>
        </div>

        {post.content.map((block, i) => (
          <ContentBlock key={i} block={block} />
        ))}

        <div className="mt-12 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-2">Ready to Visit Sri Lanka?</h3>
          <p className="text-emerald-100 mb-6">
            Find and book the best hotels for your trip — compare hundreds of options and get the best price.
          </p>
          <a
            href="https://www.booking.com/searchresults.html?ss=Sri+Lanka&aid=YOUR_AID_NUMBER"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-emerald-700 font-bold px-8 py-3 rounded-xl hover:bg-emerald-50 transition"
          >
            🏨 Search Hotels on Booking.com
          </a>
          <p className="text-emerald-200 text-xs mt-3">Powered by Booking.com</p>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-gray-50 py-14 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">More Articles</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.id}
                  to={`/blog/${p.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow hover:shadow-md transition-shadow"
                >
                  <div className="overflow-hidden h-44">
                    <img
                      src={p.coverImage}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[p.category] || "bg-gray-100 text-gray-600"
                        }`}
                    >
                      {p.category}
                    </span>
                    <h3 className="font-bold text-gray-900 mt-2 mb-1 group-hover:text-emerald-600 transition-colors leading-snug">
                      {p.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-emerald-600 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                      Read <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}