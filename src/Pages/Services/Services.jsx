import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiTrendingUp, FiDollarSign } from 'react-icons/fi';
import { Link } from 'react-router-dom'; // ✅ Changed from useNavigate
import './Services.css'; 

const Services = () => {
  const services = [
    {
      icon: <FiCode className="service-icon" />,
      title: "Web Development",
      description: "Custom, responsive websites built with modern technologies like React, Next.js, and Tailwind CSS. Focus on performance, accessibility, and SEO.",
      features: [
        "Responsive Design",
        "React/Next.js Development",
        "Performance Optimization",
        "CMS Integration" 
      ]
    },
    {
      icon: <FiLayers className="service-icon" />,
      title: "Graphic Design",
      description: "Eye-catching designs that communicate your brand's message effectively. Logos, branding, and marketing materials.",
      features: [
        "Logo Design",
        "Brand Identity",
        "Print Materials",
        "Social Media Graphics"
      ]
    },
    {
      icon: <FiTrendingUp className="service-icon" />,
      title: "SEO Optimization",
      description: "Improve your search rankings and organic traffic with comprehensive SEO strategies tailored to your business.",
      features: [
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO",
        "Content Strategy"
      ]
    },
    {
      icon: <FiDollarSign className="service-icon" />,
      title: "Ads Management",
      description: "Maximize your advertising ROI with data-driven ad campaigns on Google, Facebook, and other platforms.",
      features: [
        "PPC Campaigns",
        "Social Media Ads",
        "Conversion Tracking",
        "A/B Testing"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="services-container" id="services">
      {/* Hero Section */}
      <motion.section 
        className="services-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          My <span className="gradient-text">Services</span>
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="hero-subtitle"
        >
          Comprehensive digital solutions tailored to your business needs
        </motion.p>
        <motion.div
          className="hero-divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />
      </motion.section>

      {/* Services Grid */}
      <motion.div 
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {services.map((service, index) => (
          <motion.div 
            key={index}
            className="service-card glass-card"
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <div className="service-icon-container">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p className="service-description">{service.description}</p>
            
            <div className="service-features">
              <h4>Key Features:</h4>
              <ul>
                {service.features.map((feature, i) => (
                  <motion.li 
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.button
              className="service-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.section 
        className="services-cta"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Ready to elevate your digital presence?</h2>
        <p>Let's discuss how I can help grow your business</p>
        <motion.div
          whileHover={{ scale: 1.05, }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/Contact" className="cta-button">
            Get in Touch
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Services;
