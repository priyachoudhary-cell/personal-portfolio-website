// Small JS for header menu and year updates
document.addEventListener('DOMContentLoaded', function(){
  // toggle menu
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if(btn){
    btn.addEventListener('click', () => {
      if(nav.style.display === 'flex') nav.style.display = '';
      else nav.style.display = 'flex';
    });
  }

  // set year
  const yearEls = [document.getElementById('year'),
                   document.getElementById('year-2'),
                   document.getElementById('year-3'),
                   document.getElementById('year-4'),
                   document.getElementById('year-5')];
  const y = new Date().getFullYear();
  yearEls.forEach(e => { if(e) e.textContent = y; });
});
