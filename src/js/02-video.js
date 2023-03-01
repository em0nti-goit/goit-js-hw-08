import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const TIME_UPDATE_KEY = 'videoplayer-current-time';
const iframeRef = document.querySelector('#vimeo-player');
const player = new Player(iframeRef);
let dataTimeInSeconds = 0;

try {
  const data = JSON.parse(localStorage.getItem(TIME_UPDATE_KEY));
  dataTimeInSeconds = data.seconds;
} catch (e) {
  console.log(e.message);
}

// noinspection JSUnresolvedFunction
player.setCurrentTime(dataTimeInSeconds).then(function (seconds) {
  console.log(seconds);
})

player.on('timeupdate', throttle((data) => {
  localStorage.setItem(TIME_UPDATE_KEY, JSON.stringify(data))
}, 1000))
