// Seleccionamos todas las secciones de calificación (rating)
const ratings = document.querySelectorAll('.rating');

ratings.forEach(rating => {
  const stars = rating.querySelectorAll('.star');
  const input = rating.querySelector('input');

  stars.forEach((star, idx) => {
    star.addEventListener('click', () => {
      input.value = idx + 1;

      stars.forEach((s, i) => {
        if (i <= idx) {
          s.classList.replace('bx-star', 'bxs-star');
          s.classList.add('active');
        } else {
          s.classList.replace('bxs-star', 'bx-star');
          s.classList.remove('active');
        }
      });
    });
  });
});


/* *************** */
/* ESTRELLAS */ 
/* ************** */