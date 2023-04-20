var throttle = require('lodash.throttle');
import Player from '@vimeo/player';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(timeUpdate, 1000));

function timeUpdate(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}
const saveTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(saveTime || 0);
