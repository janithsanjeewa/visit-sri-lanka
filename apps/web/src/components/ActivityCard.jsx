
import React from 'react';
import { motion } from 'framer-motion';

const ActivityCard = ({ image, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col h-full bg-card rounded-2xl overflow-hidden soft-shadow-hover border border-border/50"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-300" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-3 text-secondary font-serif">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{description}</p>
      </div>
    </motion.div>
  );
};

export default ActivityCard;
