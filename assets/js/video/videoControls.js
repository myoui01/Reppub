function playVideo() {
  const button = document.getElementsByClassName('video-play-button')[0];
  const video = document.getElementsByTagName('video')[0];

  const buttonContent = '<img src="./assets/images/icons/play-icon.svg" alt="Play icon">'

  if(button.innerHTML.trim() === buttonContent) {
    video.play();
    button.innerHTML = '<img src="./assets/images/icons/pause-icon.svg" alt="Pause icon"></img>';
  } else {
    video.pause();
    button.innerHTML = buttonContent;
  }
}

function muteVideo() {
  const button = document.getElementById('video-mute-button');
  ;
  const video = document.getElementsByTagName('video')[0];

  if(button.innerHTML.trim() === '<img src="./assets/images/icons/volume-on-icon.svg" alt="Volume icon">') {
    video.muted = true;
    button.innerHTML = '<img src="./assets/images/icons/volume-off-icon.svg" alt="Volume icon"></img>';
  } else {
    video.muted = false;
    button.innerHTML = '<img src="./assets/images/icons/volume-on-icon.svg" alt="Volume icon"></img>';
  }
}

function changeVideo() {
  const video = document.getElementsByTagName('video')[0];

//   if(document.body.clientWidth < 768) {
//     video.setAttribute('src', './assets/videos/home-video-mobile.mp4');
//   } else {
//     video.setAttribute('src', './assets/videos/home-video.mp4');
//   }
}

window.onresize = () => changeVideo();
window.onload = () => changeVideo();