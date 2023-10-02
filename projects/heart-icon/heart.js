var content = document.getElementById("content");
var liked = false;

var defaultElastic = { ease: "elastic", duration: 1 };
var numOfParticles = 6

gsap.set(".liked", { scale: 0 });

content.onclick = () => {
  liked = !liked;

  if (liked) {
    gsap.set(".liked", { scale: 0 });
    gsap.to(".liked", { scale: 1, opacity: 1, ...defaultElastic });

    var circ2 = document.createElement("div");
    circ2.classList.add("circle");
    content.appendChild(circ2);

    gsap.to(".circle", {
      height: 40,
      width: 40,
      border: "5px solid #FF0044",
      ease: "power0",
      duration: 0.3,
      onComplete: () =>
        gsap.to(".circle", {
          border: "0px solid #FF0044",
          height: 70,
          width: 70,
          ease: "circ.out",
          opacity: 0,
          duration: 1,
          onComplete: () => circ2.remove(),
        }),
    });

    for (var i = 0; i < numOfParticles; i++) {
      (function () {
        var el = document.createElement("div");
        el.classList.add("particle");
        content.appendChild(el);

        var randomX = Math.random() * 100 - 50;
        var randomY = Math.random() * 100 - 50;
        gsap.to(el, {
          x: randomX,
          y: randomY,
          opacity: 0.5,
          duration: 0.6,
        });
        setTimeout(() => {
          gsap.to(el, {
            y: randomY + 15,
            scale: 0,
            opacity: 0,
            delay: Math.random() * 0.5,
            ease: "circ.inOut",
            duration: 2,
            onComplete: () => el.remove(),
          });
        }, 600);
      })();
    }
  } else {
    gsap.set(".liked", { opacity: 1, height: 24, width: 24 });
    gsap.to(".liked", { opacity: 0, duration: 0.2 });
  }
};
