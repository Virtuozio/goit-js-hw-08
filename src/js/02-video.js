import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';
const time = localStorage.getItem(STORAGE_KEY);

player.on('timeupdate', throttle(playOn, 1000));

function playOn(currentTime) {
  try {
    const serializedState = JSON.stringify(currentTime.seconds);
    localStorage.setItem(STORAGE_KEY, serializedState);
    console.log(localStorage.getItem(STORAGE_KEY));
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

if (time !== undefined) {
  player.setCurrentTime(time);
}
