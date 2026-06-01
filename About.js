const entries = document.querySelectorAll('.entry');

entries.forEach(entry => {
  let entryMeta = entry.querySelector('.entry__meta')

  
  gsap.set(entryMeta, {
    xPercent: 10,
    opacity: 0.2
  })

  

  gsap.to(entryMeta, {
    scrollTrigger: {
      trigger: entryMeta,
      start: 'top bottom',
      end: 'bottom 80%',
      scrub: true
    },
    xPercent: 0,
    opacity: 1
  })
})

// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);