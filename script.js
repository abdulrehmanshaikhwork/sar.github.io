
AOS.init({duration:800, once:true});

document.getElementById('themeToggle').addEventListener('click', function(){
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
  // change icon
  this.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// small gsap entrance
gsap.from('.profile', {y:40, opacity:0, duration:1, ease:'power3.out'});
gsap.from('.card', {y:30, opacity:0, duration:0.8, stagger:0.12});
