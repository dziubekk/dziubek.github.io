// Inicjalizacja AOS
AOS.init({
    duration: 1000,
    once: true,
  });
  
  // GSAP - animacja hero
  gsap.from(".hero-title", {
    y: 50,
    opacity: 0,
    duration: 1,
  });
  
  gsap.from(".subtitle", {
    y: 50,
    opacity: 0,
    delay: 0.5,
    duration: 1,
  });
  
  // Dark/Light mode toggle
  const toggleBtn = document.querySelector('.theme-toggle');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
  });
  
  // particles.js config
  particlesJS("particles-js", {
    particles: {
      number: { value: 60 },
      color: { value: "#00ffcc" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3 },
      move: { enable: true, speed: 2 },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#00ffcc",
        opacity: 0.4,
        width: 1,
      },
    },
  });
  