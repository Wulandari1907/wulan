document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.target.getAttribute('data-target');

    document.querySelectorAll('.section').forEach(sec => {
      sec.classList.remove('active');
    });

    document.getElementById(targetId).classList.add('active');
  });
});