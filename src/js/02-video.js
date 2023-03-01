import Player from '@vimeo/player';

const TIME_UPDATE_KEY = 'videoplayer-current-time';
const iframeRef = document.querySelector('#vimeo-player');
const player = new Player(iframeRef);
let dataTimeInSeconds = 0;

try {
  const data = JSON.parse(localStorage.getItem(TIME_UPDATE_KEY));
  dataTimeInSeconds = data.seconds;
  console.log('in try construction');
} catch (e) {
  console.log(e.message);
  // dataTimeInSeconds = 0;
}

// noinspection JSUnresolvedFunction
player.setCurrentTime(dataTimeInSeconds).then(function (seconds) {
  console.log(seconds);
})

player.on('timeupdate', (data) => {
  localStorage.setItem(TIME_UPDATE_KEY, JSON.stringify(data));
})
