const scaler = document.querySelector('.scale');
const bulge = document.querySelector('.bulge');
const line = document.querySelector('.vertical-line');
const bulgeLabel = document.querySelector('.bulge-label'); 
const siteHeading = document.querySelector('.site-heading');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  bulgeLabel.style.setProperty("--scroll-y", scrollTop + "px");
  
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

  //bulge text limit
  if ((scrollPercent * 100).toFixed(0) > 80) {
    bulgeLabel.style.transform = `translateY(${-20}px)`;
  }
  else {
    bulgeLabel.style.transform = `translateY(${-90}px)`;
  }

  
  if ((scrollPercent * 100).toFixed(0) < 25) {
    bulgeLabel.innerHTML = `Progress: ${(scrollPercent * 100).toFixed(0)}%`;
  }

  else if ((scrollPercent * 100).toFixed(0) <= 50) {
    bulgeLabel.innerHTML = `Progress: ${(scrollPercent * 100).toFixed(0)}%`;
  }

  else if((scrollPercent * 100).toFixed(0) <= 75) {
    bulgeLabel.innerHTML = `Progress: ${(scrollPercent * 100).toFixed(0)}%`;
  }

  else {
    bulgeLabel.innerHTML = `Progress: ${(scrollPercent * 100).toFixed(0)}%`;
  }

  bulge.style.transform = `translate(-50%, -50%) translateY(${direction * 1.5}px)`;

  setTimeout(() => {
    bulge.style.transform = `translate(-50%, -50%) scale(1)`;
  }, 10000);

  if ((scrollPercent * 100).toFixed(0) > 40) {
    siteHeading.style.opacity = 0;
  }
  else{
    siteHeading.style.opacity = 1;
  }


});
