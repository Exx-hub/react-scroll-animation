import React, { useEffect, useRef } from "react";

const ScrollAnimate = () => {
  const cardObserver = useRef(null);

  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    cardObserver.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
        });
      },
      {
        threshold: 1,
        // rootMargin: "-100px",
      }
    );

    cards.forEach((card) => cardObserver.current.observe(card));

    // Clean up the observer when the component unmounts
    return () => {
      cards.forEach((card) => cardObserver.current.unobserve(card));
    };
  }, []);

  return (
    <div className="card-container">
      <div className="card">Card 1</div>
      <div className="card">Card 2</div>
      <div className="card">Card 3</div>
      <div className="card">Card 3</div>
      <div className="card">Card 3</div>
      <div className="card">Card 3</div>
      <div className="card">Card 3</div>
      <div className="card">Card 3</div>
      <div className="card">Card 3</div>
      <div className="card">Card 3</div>
      <div className="card">Card 3</div>
      <div className="card">Card 3</div>
    </div>
  );
};

export default ScrollAnimate;
