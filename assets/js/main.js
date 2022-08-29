/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
        // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== whatwedo ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.whatwedo__item')

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.whatwedo__header')

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if (openItem && openItem !== item) {
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.whatwedo__content')

    if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 400) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'
const recaptcha = document.querySelector('.g-recaptcha')


// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
        // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
    $(recaptcha).attr("data-theme", getCurrentTheme);
})

// document.addEventListener('DOMContentLoaded', (event) => {
//     recaptcha.setAttribute("data-theme", selectedTheme );
//   });

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})


/*=============== HOME SWIPER ===============*/
let homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: 'true',
    spaceBetween: 16,
});

sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`)
sr.reveal(`.about__img, .tech, .contact__box`, { origin: 'left' })
sr.reveal(`.about__data, .contact__form, .marquee`, { origin: 'right' })
sr.reveal(`.steps__card, .tech, .whatwedo__card, .whatwedo__group, .footer`, { interval: 100 })


/*=============== MARQUEE ===============*/
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

/*=============== MAIL SEND ===============*/
// const form = document.querySelector('.contact__form');

// const inputs = document.querySelector('.contact__form');

// function sendMsg(e){
//     e.preventDefault();

//     const subject = document.querySelector('.subject'),
//           email = document.querySelector('.email'),
//           message = document.querySelector('.message');

//         const email_ = (inputs.elements["email"].value).trim()
//         const msg_ = (inputs.elements["message"].value.trim())
//         const subject_ = (inputs.elements["subject"].value).trim()

//         if (!subject_.length > 0 || !email_.length > 0 || !msg_.length > 0) {
//             swal({
//                 title: "All fields are mandatory!",
//                 text: "Please fill out your information",
//                 icon: "error",
//                 timer: 5000
//             });
//             return
//         }

//     Email.send({
//         Host : "smtp.mailtrap.io",
//         Username : "3a63deaa1ee15f",
//         Password : "6ca80ab87dbe5a",
//         To : "dapphyuk@gmail.com",
//         From : email.value,
//         Subject : subject.value,
//         Body : message.value
//     }).then(
//       message => swal({
//           title: "Email Sent!", 
//           text: "Thanks for contacting Us", 
//           icon: "success",
//           timer: 3000,
//         })
//     );
//     document.getElementById('contact__form').reset();
// }

function sendEmail() {
    Email.send({
        Host : "smtp.mailtrap.io",
        Username : "3a63deaa1ee15f",
        Password : "6ca80ab87dbe5a",
        To : "dapphyuk@gmail.com",
        From : "test@demo.com",
        Subject : "demo",
        Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
    }).then(
      message => alert(message)
    );
    }



// function validateEmail(inputText) {
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (inputText.value.match(mailformat)) {
//         document.contact__form.email.focus();
//         return true;
//     } else {
//         swal({
//             title: "OOPS! invalid Email!",
//             text: "Please check and try again",
//             icon: "error",
//             timer: 5000
//         })
//         document.contact__form.email.focus();
//         return false;
//     }
// };

// form.addEventListener('submit', sendMsg);
/*=============== CAPTCHA ===============*/

// function onSubmit(token) {
//     document.getElementById('contact__form').submit();
//   }

// function captchaVerified (){
//     var registerBtn = document.querySelector('#send_message');
//     registerBtn.removeAttribute('disabled');
// }

// function captchaExpired (){
//     var registerBtn = document.querySelector('#send_message');
//     registerBtn.attributes.add('disabled');
// }