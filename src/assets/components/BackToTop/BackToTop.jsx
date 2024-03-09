import { useEffect, useState } from 'react'
import './backToTop.css'

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.scrollY > 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
      useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
          window.removeEventListener("scroll", toggleVisibility);
        };
      }, []);
    
      const handleScroll = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
  return (
    <>
    {isVisible && <button className='back-to-top-btn' onClick={() => handleScroll()}>
    &#8593;
        </button>}
    </>
  )
}

export default BackToTop