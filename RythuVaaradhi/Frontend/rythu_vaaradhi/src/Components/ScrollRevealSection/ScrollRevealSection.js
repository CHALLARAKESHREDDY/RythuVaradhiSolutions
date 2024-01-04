import React, { useState, useEffect } from 'react';
import './ScrollRevealSection.css'; // You can create a CSS file for your styles

const ScrollRevealSection = ({ id, backgroundColor, children, url,height}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const section = document.getElementById(id);
    const halfwayPoint = section.offsetTop - window.innerHeight / 2;

    const handleScroll = () => {
      if (window.pageYOffset >= halfwayPoint && !visible) {
        setVisible(true);
      } else if (window.pageYOffset < halfwayPoint && visible) {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visible, id]);

  return (
    <section
      id={id}
      style={{
        height,
        width:"100%",
        backgroundColor,
        textAlign: 'center',
        opacity: visible ? 1 : 0,
        transition: 'opacity 1s',
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover', // Adjust to your needs
        backgroundPosition: 'center', // Adjust to your needs
        display:"flex",
        flexDirection:"column"
      }}
    >
      {children}
    </section>
  );
};

export default ScrollRevealSection;
;
