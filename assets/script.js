document.addEventListener('DOMContentLoaded', ()=>{
  // activate nav link
  document.querySelectorAll('.nav a').forEach(a=>{
    const href = a.getAttribute('href');
    if(location.pathname.endsWith(href) || (location.pathname.endsWith('/') && href==='index.html')) a.classList.add('active');
  });

  // buscador live filter
  const searchInput = document.getElementById('jobSearch');
  if(searchInput){
    searchInput.addEventListener('input', ()=>{
      const q = searchInput.value.toLowerCase().trim();
      document.querySelectorAll('.job-item').forEach(item=>{
        const title = item.querySelector('.job-title').textContent.toLowerCase();
        const company = item.querySelector('.job-company').textContent.toLowerCase();
        const tags = item.querySelector('.job-tags').textContent.toLowerCase();
        if(title.includes(q) || company.includes(q) || tags.includes(q)) item.style.display = '';
        else item.style.display = 'none';
      });
    });
  }

  // contact form fake submit
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', e=>{
      e.preventDefault();
      alert('Obrigado! Sua mensagem foi enviada (simulação).');
      contactForm.reset();
    });
  }
});
