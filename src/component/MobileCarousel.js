import { useEffect, useState } from "react";

export default function MobileCarousel() {
  const images = [
    "restaurant.jpg",
    "restaurant chef B.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // set on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isMobile]);

  if (!isMobile) return null; // ❌ Don't render at all on desktop

  return (
    <div className="mobile-carousel">
      <img
        src={images[currentIndex]}
        alt="Slideshow"
        style={{ width: "100%", borderRadius: "12px" }}
      />
    </div>
  );
}