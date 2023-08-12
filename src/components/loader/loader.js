const loader = document.querySelector('.loader');

if (loader) {

  function hideLoader () {
    loader.classList.add('hide');
    setTimeout(() => loader.remove(), 300);
  };

  window.addEventListener('load', hideLoader);
}
