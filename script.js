const detail = document.querySelector('.detalle');

if (typeof detail.showModal === 'function') {
  const fullImage = detail.querySelector('img');
  const caption = detail.querySelector('figcaption');
  let activeLink;

  document.querySelectorAll('.obra').forEach((link) => {
    link.addEventListener('click', (event) => {
      if (event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return;
      event.preventDefault();
      activeLink = link;
      const description = link.querySelector('img').alt;
      fullImage.src = link.href;
      fullImage.alt = description;
      caption.textContent = description;
      detail.showModal();
      document.body.classList.add('ampliando');
    });
  });

  detail.querySelector('.cerrar').addEventListener('click', () => detail.close());
  detail.addEventListener('close', () => {
    document.body.classList.remove('ampliando');
    activeLink?.focus();
  });
}

const printButton = document.querySelector('#imprimir');
printButton.hidden = false;
printButton.addEventListener('click', () => window.print());
