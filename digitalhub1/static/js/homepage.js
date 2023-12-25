// toggle icon navbar

menuIcon = document.querySelector("#menu-icon");
 navbar =document.querySelector('.navbar');

menuIcon.onclick =() =>{
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}
//scroll Selections
  selection = document.querySelectorAll('section');
 navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    selection.forEach(sec => {
        top= window.scrollY;
        offset =sec.offsetTop -100;
        height = sec.offsetHeight;
        id =sec.getAttribute('id');
        
        if(top>=offset && top < offset + height) {
            //active navbar links 
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            });
           // active section for animation on roll
         sec.classList.add('show-animate');
         
        }
        //if want to use animation that repeats on scroll use this
        else{
            sec.classList.remove('show-animate');
        }
    });
    //sticky header
   let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
    //remove toggle icon and navbar when click navbar links (scroll)
    
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  
}