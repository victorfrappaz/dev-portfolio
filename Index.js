function getNodeIndex(elm) {
  var c = elm.parentNode.children,
    i = 0;
  for (; i < c.length; i++) if (c[i] == elm) return i;
}

const skills = document.querySelectorAll('.skill');



skills.forEach(skill => {
  console.log("Index : " + getNodeIndex(skill) )
  gsap.set(skill, {
    xPercent: -10,
    yPercent: 10 * (getNodeIndex(skill)%4) * 2,
    opacity: 0
  })

  gsap.to(skill, {
    scrollTrigger: {
      trigger: skill,
      start: 'top bottom',
      end: 'bottom 80%',
      scrub: true
    },
    xPercent: 0 ,
    yPercent: 0,
    opacity: 1 
  })
})

const entries = document.querySelectorAll('.entry');

entries.forEach(entry => {
  let entryMeta = entry.querySelector('.entry__meta')
  let entryMedia = entry.querySelector('.entry__media')

  gsap.set(entryMeta, {
    xPercent: -100,
    opacity: 0
  })
  gsap.set(entryMedia, {
    xPercent: 100,
    opacity: 0
  })

  gsap.to(entryMeta, {
    scrollTrigger: {
      trigger: entry,
      start: 'top bottom',
      end: 'bottom 90%',
      scrub: true
    },
    xPercent: 0,
    opacity: 1
  })

  gsap.to(entryMedia, {
    scrollTrigger: {
      trigger: entry,
      start: 'top bottom',
      end: 'bottom 90%',
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