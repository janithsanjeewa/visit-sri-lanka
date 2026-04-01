
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const DestinationCard = ({ id, image, name, subtitle, description, index, className = "" }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => navigate(`/destination/${id}`)}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer soft-shadow-hover bg-card ${className}`}
    >
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/40 to-transparent transition-opacity duration-300" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
        {subtitle && (
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-1 block drop-shadow-md">
            {subtitle}
          </span>
        )}
        <h3 className="text-2xl font-semibold mb-2 font-serif drop-shadow-md">{name}</h3>
        <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2 flex items-start gap-2">
          <span className="mt-0.5 text-primary">👉</span>
          <span>{description}</span>
        </p>
      </div>
    </motion.div>
  );
};

export default DestinationCard;
