let check = 1;

const body = document.body;
const btn = document.querySelector(".darkLightBtn");
const darkLightBtn = document.querySelector("#darkLightBtn");
const navBar = document.querySelectorAll('.navBar')
const home = document.querySelector(".home");
const kshitij = document.querySelector(".myName");
const homeText = document.querySelectorAll(".homeText");
const about = document.querySelector(".about");
const skills = document.querySelector('.skills')
const innerDivs = document.querySelectorAll(".white")
const projects = document.querySelector('.projects')
const experience = document.querySelector('.experience')
const footer = document.querySelector('.footer')


document.addEventListener('DOMContentLoaded', () => {
btn.addEventListener("click", () => {
  if (check === 1) {
    body.style.backgroundColor = "white";
    home.style.background = `linear-gradient(45deg, #ffffff, #ffffff, rgb(101, 0, 173))`;
    homeText.forEach((text) => {
      text.style.color = "black";
    });
    kshitij.style.background = `-webkit-linear-gradient(
    180deg,
    hwb(0 0% 100%),
    rgb(101, 0, 173),
    hwb(0 0% 100%)
  )`;
    kshitij.style.WebkitBackgroundClip = "text";
    kshitij.style.WebkitTextFillColor = "transperent";
    innerDivs.forEach((body) =>{
      body.style.backgroundColor = 'white'
      body.style.color = 'black'
    })
    about.style.background = 'linear-gradient(30deg, rgb(86, 0, 147), #ffffff, #ffffff)';
    skills.style.color = 'black'
    skills.style.background = 'linear-gradient(150deg, rgb(86, 0, 147), #ffffff, #ffffff)';
    projects.style.color = 'black'
    projects.style.background = 'linear-gradient(-180deg, #ffffff, rgb(86, 0, 147), #ffffff)';
    experience.style.color = 'black'
    experience.style.background = 'linear-gradient(-180deg, #ffffff, rgb(86, 0, 147), #ffffff)';
    footer.style.background = 'linear-gradient(180deg, #ffffff, white, rgb(101, 0, 173))';

    check = 0;
    darkLightBtn.src = "./Images/dark-mode-dark.png";
  } else {
    body.style.backgroundColor = "black";
    home.style.background =
      "linear-gradient(45deg, #000000, #000000, rgb(101, 0, 173))";
    homeText.forEach((text) => {
      text.style.color = "white";
    });
    kshitij.style.background = `-webkit-linear-gradient(
    180deg,
    #b3b3b3,
    #b469ff,
    rgb(196, 196, 196)
  )`;
    kshitij.style.WebkitBackgroundClip = "text";
    kshitij.style.WebkitTextFillColor = "transperent";
    innerDivs.forEach((body) =>{
      body.style.backgroundColor = '#0d0119'
      body.style.color = 'white'
    })
    about.style.background = 'linear-gradient(30deg, rgb(86, 0, 147), #000000, #000000)';
    skills.style.color = 'white'
    skills.style.background = 'linear-gradient(150deg, rgb(86, 0, 147), #000000, #000000)';
    projects.style.color = 'white'
    projects.style.background = 'linear-gradient(-180deg, #000000, rgb(86, 0, 147), #000000)';
    experience.style.color = 'black'
    experience.style.background = 'linear-gradient(-180deg, #000000, rgb(86, 0, 147), #000000)';
    footer.style.background = 'linear-gradient(180deg, #000000, black, rgb(101, 0, 173))'
    

    check = 1;
    darkLightBtn.src = "./Images/light-mode-dark.png";
  }
});
});


document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.animated-element');
  
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('show');
          } else {
              entry.target.classList.remove('show');
          }
      });
  }, {
      threshold: 0.1 // Trigger when 10% of the element is visible
  });

  elements.forEach(element => {
      observer.observe(element);
  });
});

document.querySelector("#showSidebar").addEventListener('click', () =>{
  document.querySelector('#sideBar').classList.add('active')
})

document.querySelector("#hideSidebar").addEventListener('click', () =>{
  document.querySelector('#sideBar').classList.remove('active')
})