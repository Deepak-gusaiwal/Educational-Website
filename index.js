console.log('this is educational website');

// toogle menu button class
let openMenuBtn = document.getElementById('openMenuBtn');
let toggleIcon = openMenuBtn.querySelector('label i');
console.log(toggleIcon);
openMenuBtn.addEventListener('click',()=>{
    toggleIcon.classList.toggle('fa-xmark')
})

// toggle active class in nav links
let links = [...document.querySelectorAll('.menuLinks a')];

links.forEach((link)=>{
    let pageLocation = window.location;
    if(link.href.includes(pageLocation)){
        link.classList.add('active');
    }else{
        link.classList.remove('active');
    }
})
// toggle active classes in footer

// let permaLinks = [...document.querySelectorAll('.footerpermaLinks')];
// console.log(permaLinks)
// permaLinks.forEach((link)=>{
//     let pageLocation = window.location;
//     if(link.href.includes(pageLocation)){
//         link.classList.add('active');
//     }else{
//         link.classList.remove('active');
//     }
// });
// add navScrollBg class in nav bar on scroll
window.addEventListener('scroll',()=>{
    let nav = document.querySelector('nav');
    nav.classList.toggle('navScrollBg',this.scrollY>60);
});

// *******toggle faqs ***
let faqs = document.querySelectorAll('.faq');
Array.from(faqs).forEach((targetedfaq)=>{
    targetedfaq.addEventListener('click',()=>{
        // let open = document.querySelector('.open');
        // open.classList.toggle('open');
        targetedfaq.classList.toggle('open');
    });
});

let dropOpenLinks = [...document.querySelectorAll('.dropOpenLinks')];
dropOpenLinks.forEach((e)=>{
    let dropBox = e.nextElementSibling;
    console.log(dropBox);
    e.addEventListener('click',()=>{
        console.log('click on link');
        dropBox.classList.toggle('block')
    })
})