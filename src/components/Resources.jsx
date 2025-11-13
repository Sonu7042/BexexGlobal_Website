import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Css/resources.css"

gsap.registerPlugin(ScrollTrigger);

export default function Resources() {
  const sectionRef = useRef(null);
  const numberRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    // Number count animation
    gsap.fromTo(
      numberRef.current,
      { y: 50, opacity: 0, innerText: 0 },
      {
        y: 0,
        opacity: 1,
        innerText: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
        snap: { innerText: 1 },
        onUpdate: function () {
          numberRef.current.innerText = Math.round(this.targets()[0].innerText);
        },
      }
    );

    // Content slide-in animation
    gsap.fromTo(
      contentRef.current,
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="animation-section" ref={sectionRef}>
      <div className="number-box" ref={numberRef}>0</div>
      <div className="content-box" ref={contentRef}>
        <h2>Scroll Animation with GSAP</h2>
        <p>
          This content slides in from the right while the number on the left
          counts up when the section enters the viewport.
        </p>
      </div>
    </section>
  );
}
