const trailDot = document.getElementById("trail")

gsap.set(trailDot, {x: "-50%", y: "-50%"})

document.onmousemove = (evt) => {
    const {clientX, clientY} = evt

    gsap.to(trailDot, {top: clientY + "px", left: clientX + "px", duration : 0.3})
}