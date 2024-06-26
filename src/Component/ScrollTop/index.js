import React, { useState, useEffect } from "react";

function ScrollTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Function to handle the scroll to top
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    // Show the button when the user scrolls down 100px from the top
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.scrollY > 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', toggleVisibility);
  
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }, []);
  
  return (
    <>
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="scroll-top-button"
          >
            <img className='user-flow-img' src={`${process.env.PUBLIC_URL}/images/scroll-top.svg`} alt='' />
          </button>
        )}
    </>
  );
}

export default ScrollTop;
