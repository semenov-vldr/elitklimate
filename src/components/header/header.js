const header = document.querySelector('header.header');

if (header) {

  const menu = header.querySelector('.header__nav');
  const burger = header.querySelector('.header__burger');
  const menuClose = header.querySelector('.header__nav-close');
  const navLinks = header.querySelectorAll(".header__nav-link");


  burger.addEventListener('click', () => {
    menu.classList.add('js-menu-open');
    blockScrollBody();
  });

  menuClose.addEventListener('click', () => {
    menu.classList.remove('js-menu-open');
    unblockScrollBody();
  });

  navLinks.forEach(navLink => {
    navLink.addEventListener("click", () => {
      menu.classList.remove('js-menu-open');
      unblockScrollBody();
    })
  })

}







