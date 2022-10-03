const navItems = document.querySelector('#nav__items');
const openNavBtn = document.querySelector('#open__nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');

openNavBtn.addEventListener ('click',() =>{
    navItems.style.display= 'flex';
    openNavBtn.style.display= 'none';
    closeNavBtn.style.display='inline-block';
})


const closeNav = ()=> {
    navItems.style.display= 'none';
    openNavBtn.style.display='inline-block';
    closeNavBtn.style.display= 'none';
   
}

closeNavBtn.addEventListener('click',closeNav);

// change navbar on scroll
window.addEventListener('scroll', () => {
 
  document.querySelector('nav').classList.toggle('window-scroll', window-scrollY > 0 )

});


// const navbar = document.querySelector('nav');
// window.onscroll = () => {
//     if (window.scrollY >200) {
//         navbar.classList.add('window-scroll');
//     } else {
//         navbar.classList.remove('window-scroll');
//     }
// };

// close navbar medium small devices

if(window.innerWidth < 1024){
  document.querySelectorAll('#nav__items li a').forEach(navItem=>{
    navItem.addEventListener('click',()=>{
      closeNav();
    })
  })
}






//TESTIMONIAL SECTION SLIDER
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    //RESPONSIVE BREACKPOINT

    breakpoints:{
        //on tablet 
       600:{
        slidesPerView:2
       }, 
       //on window >1024
       1024:{
        slidesPerView:3
       }
    }
  });

  //close nav

