function hideTimelineOnMobile() {
  const timeline = document.querySelector('.timeline');
  if (window.innerWidth <= 768) {
    timeline.style.display = 'none';
  } else {
    timeline.style.display = 'flex';
  }
}

window.addEventListener('load', hideTimelineOnMobile);
window.addEventListener('resize', hideTimelineOnMobile);

