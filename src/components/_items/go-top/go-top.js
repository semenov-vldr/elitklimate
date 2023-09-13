const gotTopButton = document.querySelector('.go-top');

if (gotTopButton) {

  gotTopButton.addEventListener('click', goTop);
  window.addEventListener('scroll', trackScroll);

  function goTop () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  };

  function trackScroll () {
    const offset = window.scrollY;
    const coords = document.documentElement.clientHeight;
    gotTopButton.classList.toggle('js-scroll-show', offset > 2 * coords);
  };

}
