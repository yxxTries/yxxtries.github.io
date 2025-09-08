const scaler = document.querySelector('.scale');
const bulge = document.querySelector('.bulge');
const line = document.querySelector('.vertical-line');
const bulgeLabel = document.querySelector('.bulge-label'); 

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
  if ((scrollPercent * 100).toFixed(0) < 3) {
    bulgeLabel.style.transform = `translateY(${-13}px)`;
  }
  else{
    bulgeLabel.style.transform = `translateY(${0}px)`;
  }
  if ((scrollPercent * 100).toFixed(0) < 25) {
    bulgeLabel.innerHTML = `<b>Freelance Computer Technician</b> <span style="color:grey;font-style:italic">at GameFast, Dubai</span><br>Jan 2020 - Present<br>
    ● Built and upgraded custom PCs for clients, focusing on performance, compatibility, and budget.<br>
    ● Provided technical support, including troubleshooting, repairs, and component replacement.<br>
    ● Optimized system performance with proper cooling solutions and OS optimization.<br>
    Progress: ${(scrollPercent * 100).toFixed(0)}%`;
  }

  else if ((scrollPercent * 100).toFixed(0) <= 50) {
    bulgeLabel.innerHTML = `<b>Sales Associate</b> <span style="color:grey;font-style:italic">at SoftMoc, Fredericton</span><br>April 2023 - September 2023<br>
    ● Consistently achieved monthly sales targets by providing exceptional customer service.<br>
    ● Developed and maintained strong relationships with customers, ensuring customer loyalty.<br>
    ● Consistently received positive customer feedback.<br>
    Progress: ${(scrollPercent * 100).toFixed(0)}%`;
  }

  else if((scrollPercent * 100).toFixed(0) <= 75) {
    bulgeLabel.innerHTML = `<b>Asst. Manager (Seasonal Holidays)</b> <span style="color:grey;font-style:italic">at Cherry Hill Programs, Fredericton</span><br>February 2024 - present<br>
    • Assisted LM with preparations for the opening day including staff scheduling and training.<br>
    • Addressed and resolved service failures appropriately to ensure optimal guest experiences and recovery.<br>
    Progress: ${(scrollPercent * 100).toFixed(0)}%`;
  }

  else {
    bulgeLabel.innerHTML = `<b>Meal Advisor & Key-Holder</b> <span style="color:grey;font-style:italic">at M&M Food Market, Fredericton</span><br>June 2023 - Present<br>
    ● Demonstrated strong customer service skills to understand and meet customer expectations.<br>
    ● Developed and maintained strong relationships with customers, resulting in high-average sales.<br>
    Progress: ${(scrollPercent * 100).toFixed(0)}%`;
  }

  bulge.style.transform = `translate(-50%, -50%) translateY(${direction * 1.5}px)`;

  setTimeout(() => {
    bulge.style.transform = `translate(-50%, -50%) scale(1)`;
  }, 10000);



});
