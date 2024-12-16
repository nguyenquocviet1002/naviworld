const solutionElms = document.querySelectorAll('.navi_1_0_0_solution__post');
solutionElms.forEach(elm => {
    elm.addEventListener('click', () => {
        elm.classList.toggle('active')})
})