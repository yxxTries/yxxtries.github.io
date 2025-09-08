const scaler = document.querySelector('.scale');
const bulge = document.querySelector('.bulge');
const line = document.querySelector('.vertical-line');
const bulgeLabel = document.querySelector('.bulge-label'); 

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;

  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = maxScroll > 0 ? scrollTop / maxScroll : 0;

  // scale ranges: 0.5 (child) → 1.0 (half screen at max scroll)
  const scale = 0.5 + scrollPercent * 1.5;

  scaler.style.transform = `scale(${scale})`;

  //Scroll Bulge
  let direction = window.scrollY > scrollTop ? 1 : -1;
  const lineHeight = line.offsetHeight;

  const y = (1 - scrollPercent) * lineHeight;
  console.log(y);
  bulge.style.top = `${y}px`;

  //Bulge Text
  bulgeLabel.style.top = `${y}px`;
  bulgeLabel.textContent = `Scroll: ${(scrollPercent * 100).toFixed(0)}%`;

  bulge.style.transform = `translate(-50%, -50%) translateY(${direction * 1.5}px)`;

  setTimeout(() => {
    bulge.style.transform = `translate(-50%, -50%) scale(1)`;
  }, 10000);



});
