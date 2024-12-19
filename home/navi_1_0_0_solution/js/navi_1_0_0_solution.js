const solutionElms = document.querySelectorAll('.navi_1_0_0_solution__post');
const solutionImgElm = document.querySelectorAll('.navi_1_0_0_solution__image img');
solutionElms.forEach((elm, index) => {
    elm.addEventListener('click', () => {
        solutionElms.forEach(elm => {elm.classList.remove('active')});
        solutionImgElm.forEach(elm => {elm.classList.remove('animate')});
        solutionImgElm[index].classList.add('animate');
        elm.classList.toggle('active')})
});