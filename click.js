let navSlide=()=>{
    const burger=document.querySelector('.burger');
    const nav=document.querySelector('.nav-links')
    const navlinks=document.querySelectorAll('.nav-links li');
    console.log(navlinks,"classli")
    //toggle nav
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
   
    
}
    navSlide();
