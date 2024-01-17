const greetingFunc = () => {
  const greeting = document.querySelector(".home-greeting");
  //alert(greeting.textContent);

  currentTime = new Date();
  //alert(currentTime);

  if(currentTime.getHours() < 12) {
    greeting.textContent = "Good Morning!";
    //alert("Good Morning!");   
  }
  else if(currentTime.getHours() < 17) {
    greeting.textContent = "Good Afternoon!";
    //alert("Good Afternoon!");   
  }
  else {
    greeting.textContent = "Good Evening!";
    //alert("Good Evening!"); 
  }
  
}

const navSlide = () => {
  const toggle = document.querySelector('.toggle');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  
  //toggle
  toggle.addEventListener('click', ()=>{
    nav.classList.toggle('nav-active');
    
    //animation
    navLinks.forEach((link, index)=>{
      if(link.style.animation){
        link.style.animation = ''
      }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });
    
    //burger animation
    toggle.classList.toggle('toggle');

  });
}
  
  greetingFunc();
  navSlide();