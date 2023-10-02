var loop = false;

gsap.from(".letter", {
  y: 50,
  opacity: 0,
  stagger: 0.08,
  duration: 1,
  ease: "power2.inOut",
});

setInterval(() => {
  if (loop) {
    gsap.to(".letter", {
      y: 0,
      opacity: 1,
      stagger: 0.08,
      duration: 1,
      ease: "power2.inOut",
    });
    gsap.to(".letter2", {
        x: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 1,
        ease: "power2.inOut",
      });

    loop = false;
  } else {
    gsap.to(".letter", {
      y: 50,
      opacity: 0,
      stagger: 0.08,
      duration: 1,
      ease: "power2.inOut",
    });

    gsap.to(".letter2", {
        x: 80,
        opacity: 0,
        stagger: -0.08,
        duration: 1,
        ease: "power2.inOut",
      });

    loop = true;
  }
}, 2000);


gsap.from(".letter2", {
    x: 80,
    opacity: 0,
    stagger: 0.08,
    duration: 1,
    ease: "power2.inOut",
  });