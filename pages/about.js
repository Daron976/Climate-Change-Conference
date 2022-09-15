const menuBtn = document.getElementById('about-open-id');
const mobileBtn = document.querySelector('.mobile-menu');

function openMenu() {// eslint-disable-line
  mobileBtn.style.display = 'flex';
  menuBtn.style.display = 'none';
}

function closeMenu() {// eslint-disable-line
  mobileBtn.style.display = 'none';
  menuBtn.style.display = 'block';
}

menuBtn.setAttribute('onclick', 'openMenu()');
mobileBtn.setAttribute('onclick', 'closeMenu()');