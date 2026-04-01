
import React from 'react';
import { motion } from 'framer-motion';

const DishCard = ({ image, name, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer soft-shadow-hover"
    >
      <img 
        src={image} 
        alt={name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl font-semibold mb-2 font-serif text-primary-foreground">{name}</h3>
        <p className="text-sm text-white/80 line-clamp-2">{description}</p>
      </div>
    </motion.div>
  );
};

export default DishCard;
