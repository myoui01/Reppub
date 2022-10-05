let dark = decodeURIComponent(document.cookie).split('=')[1] === 'dark';

function changeLogo() {
  const logo = document.getElementsByClassName('logo-header')[0];

  if(dark) {
    logo.setAttribute('style', 'filter: invert(1)')
  } else {
    logo.setAttribute('style', 'filter: invert(0)')
  }

  dark = !dark;
}

window.onload = () => {
  const cookie = decodeURIComponent(document.cookie).split('=')[1];
  const logo = document.getElementsByClassName('logo-header')[0];

  if (cookie === 'dark' || !cookie) {
    logo.setAttribute('style', 'filter: invert(0)')
  } else {
    logo.setAttribute('style', 'filter: invert(1)')
  }
};
