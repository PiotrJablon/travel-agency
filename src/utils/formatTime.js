export const formatTime = (arg) => {
  if (typeof arg === 'undefined' || typeof arg === 'string' || typeof arg === 'function' || arg < 0) {
    return null;
  } else {
    const seconds = Math.floor(arg % 60);
    const minutes = Math.floor((arg / 60) % 60);
    const hours = Math.floor(arg / 3600);

    return String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
  }
};
