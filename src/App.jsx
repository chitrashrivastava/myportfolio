import React, { useEffect, useState } from 'react';
import './index.css'; // Import your custom CSS file
import gsap from 'gsap/all'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; // Update the import statement
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Experience from './Exp1';
import ContactForm from './Contact';
import Projects from './Projects';
import Training from './Training';
import NotFound from './Notfound';
const App = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {


    let cursor1 = document.querySelector('.cursor-1');
    let cursor2 = document.querySelector('.cursor-2');

    window.onmousemove = (e) => {
      cursor1.style.top = e.pageY + 'px';
      cursor1.style.left = e.pageX + 'px';
      cursor2.style.top = e.pageY + 'px';
      cursor2.style.left = e.pageX + 'px';
    }

    document.querySelectorAll('a').forEach(links => {
      links.onmouseenter = () => {
        cursor1.classList.add('active');
        cursor2.classList.add('active');
      }

      links.onmouseleave = () => {
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
      }
    });

    const toggleTextElement = document.getElementById("toggleText");
    const texts = ["Chitra Shrivastava", "Full stack developer", "UI/UX designer"];
    let textIndex = 0;
    let charIndex = 0;

    function type() {
      if (charIndex < texts[textIndex].length) {
        toggleTextElement.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
      } else {
        setTimeout(erase, 1000);
      }
    }

    function erase() {
      if (charIndex > 0) {
        toggleTextElement.innerHTML = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
      } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 500);
      }
    }

    type();

    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.image img', {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      scrollTrigger: {
        trigger: '.image',
        start: 'top 10%',
        end: 'bottom 10%',
        scrub: true,
      },

    });


    gsap.from(".navbar .a", {
      duration: 1,
      y: -20,
      stagger: 0.2,
      delay: 1
    });


    gsap.from(".follow .a", {
      duration: 1,
      x: -20,
      stagger: 0.2,
      delay: 1
    });
    gsap.registerPlugin(ScrollTrigger);



    const iconDivs = document.querySelectorAll('.icons');


    gsap.utils.toArray('.exp-tra').forEach(box => {
      box.addEventListener('mouseenter', () => {
        gsap.to(box, { scale: 1.05, duration: 0.3 });
      });
      box.addEventListener('mouseleave', () => {
        gsap.to(box, { scale: 1, duration: 0.3 });
      });
    });

    gsap.utils.toArray('.follow .a').forEach((anchor, index) => {
      gsap.to(anchor, {
        yoyo: true,
        repeat: -1,
        y: 50,
        duration: 2,
        ease: 'sine.inOut',
        delay: index * 0.2, // Delay each animation by 0.2 seconds
      });
    });
    gsap.from('.image img', {
      y: -100, // Initial bounce position
      opacity: 0,
      duration: 1.5,
      ease: 'bounce.out', // Bounce easing effect
      delay: 0.5,
    });
    gsap.from('.hi', {
      scale: 0.5,
      rotation: -30,
      duration: 1,
      delay: 0.5,
    });


    iconDivs.forEach(iconDiv => {
      const icon = iconDiv.querySelector('.i');
      gsap.fromTo(icon, { y: -20 }, { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power2.out' });
    });

    gsap.from('.typing-animation', {
      y: 50,
      duration: 1.5,
      delay: 1.5,
    });
    gsap.to('.icons .i', {
      rotation: 360,
      scale: 1.2,
      repeat: -1,
      duration: 3,
      ease: 'power1.inOut',
      transformOrigin: 'center center',
    });
    gsap.utils.toArray('.box').forEach(box => {
      gsap.from(box, {
        y: 50,
        opacity: 0,
        scrollTrigger: {
          trigger: box,
          start: 'top 88%',
          toggleActions: 'play none none reverse',

        },
      });
    });
  }, []);
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Training />
      <Experience />
      <Projects />
      <ContactForm />

      <footer className="footer"> created by <span> Chitra Shrivastava</span> | all rights reserved! </footer>

     
    </>
  )
}

export default App;