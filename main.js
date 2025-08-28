// script.js
document.addEventListener('DOMContentLoaded', () => {
  console.log('script.js loaded — DOM ready');

  let count = 0;
  const btn = document.getElementById('btn');
  const display = document.getElementById('count');

  if (!btn) {
    console.error('Element not found: #btn — check index.html and script path');
    return;
  }
  if (!display) {
    console.error('Element not found: #count — check index.html and script path');
    return;
  }

  console.log('Found #btn and #count — attaching click handler');
  btn.addEventListener('click', () => {
    count++;
    display.textContent = count;
  });
});