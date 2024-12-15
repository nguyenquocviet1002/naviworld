const elmDropdown = document.querySelectorAll('.header_1_0_0__icon--2');
const elmDropdownSub = document.querySelectorAll('.header_1_0_0__icon--3');
const elmButton = document.querySelector('.header_1_0_0__bar');
const elmBg = document.querySelector('.header_1_0_0__bg');
elmDropdown.forEach(elm => {
    elm.addEventListener('click', (e) => {
        e.preventDefault();
        elm.classList.toggle('show');
        elm.parentElement.parentElement.querySelector('.header_1_0_0__dropdown').classList.toggle('show');
        
    })
})

elmDropdownSub.forEach(elm => {
    elm.addEventListener('click', (e) => {
        e.preventDefault();
        elm.classList.toggle('show');
        elm.parentElement.parentElement.querySelector('.header_1_0_0__subSecond').classList.toggle('show');
        
    })
})

elmButton.addEventListener('click', () => {
    document.querySelector('.header_1_0_0__nav').classList.add("show");
    elmBg.classList.add("show");
})

elmBg.addEventListener('click', () => {
    document.querySelector('.header_1_0_0__nav').classList.remove("show");
    elmBg.classList.remove("show");
})
