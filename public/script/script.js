const humberger = document.querySelector('#humberger');
const navMenu = document.querySelector('#nav-menu');

// Hamburger
humberger.addEventListener('click', function(){
    humberger.classList.toggle('huberger-active');
    navMenu.classList.toggle('hidden');

})

// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    
    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed')
    }
    else{
        header.classList.remove('navbar-fixed')
    }
}
