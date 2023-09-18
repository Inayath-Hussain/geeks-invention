var init = function () {
    var isMobile = navigator.userAgent &&
        navigator.userAgent.toLowerCase().indexOf('mobile') >= 0;
    var isSmall = window.innerWidth < 1000;

    var ps = new ParticleSlider({
        ptlGap: 4,
        mouseForce: 400,
        monochrome: true,
        color: '#652f00',
        ptlSize: 2.2
    });

    var gui = new dat.GUI();
    gui.add(ps, 'ptlGap').min(0).max(5).step(1).onChange(function () {
        ps.init(true);
    });
    gui.add(ps, 'ptlSize').min(1).max(5).step(1).onChange(function () {
        ps.init(true);
    });
    gui.add(ps, 'restless');
    gui.addColor(ps, 'color').onChange(function (value) {
        ps.monochrome = true;
        ps.setColor(value);
        ps.init(true);
    });


    (window.addEventListener
        ? window.addEventListener('click', function () { ps.init(true) }, false)
        : window.onclick = function () { ps.init(true) });
}

var initParticleSlider = function () {
    var psScript = document.createElement('script');
    (psScript.addEventListener
        ? psScript.addEventListener('load', init, false)
        : psScript.onload = init);
    psScript.src = 'http://particleslider.com/js/particleslider/current/particleslider.js';
    psScript.setAttribute('type', 'text/javascript');
    document.body.appendChild(psScript);
}

    (window.addEventListener
        ? window.addEventListener('load', initParticleSlider, false)
        : window.onload = initParticleSlider);

// modal----------------------------------------------------
let sandwich = document.getElementById('sandwich');
let modal = document.getElementById('modal')
// let closeBtn = document.getElementById('close')

sandwich.addEventListener('click', (e) => {

    console.log(sandwich.children)
    if (modal.getAttribute('data-modal') === 'closed') {
        sandwich.style.position = 'fixed'
        sandwich.style.zIndex = 50
        sandwich.style.top = '2.13rem'
        sandwich.style.right = '2.25rem'

        modal.setAttribute('data-modal', 'open')

        sandwich.children.item(0).classList.add('t-rotate')
        sandwich.children.item(1).classList.add('hidden')
        sandwich.children.item(2).classList.add('b-rotate')

    }
    else {
        sandwich.style.removeProperty('position')
        sandwich.style.removeProperty('z-index')

        modal.setAttribute('data-modal', 'closed')

        sandwich.children.item(0).classList.remove('t-rotate')
        sandwich.children.item(1).classList.remove('hidden')
        sandwich.children.item(2).classList.remove('b-rotate')

    }
    // modal.classList.replace('hidden', 'block')
    // modal.classList.add('flex')
})

// closeBtn.addEventListener('click', () => {
//     modal.setAttribute('data-modal', 'closed')
//     // modal.classList.replace('block', 'hidden')
//     // modal.classList.remove('flex')
// })
// ------------------------------------------------------------

const colors = {
    section1: '#3F2CAA', // purple
    section2: '#01B5AC', // aqua
    section3: '#19181E', // black
    section4: '#23252C' // grey
}

const mainContent = document.getElementById('main-content')
const header = document.querySelector('header')

document.addEventListener('scroll', (e) => {
    const purpleSection = document.getElementById('purple-section');
    const div = purpleSection.getBoundingClientRect()
    const textDiv = purpleSection.children.item(1)

    // bg color transition
    if (div.top <= (window.innerHeight * 80 / 100) && div.top > ((-(window.innerHeight) * 40 / 100))) {
        mainContent.style.backgroundColor = colors.section1
    }

    if (div.top > (window.innerHeight * 80 / 100)) mainContent.style.backgroundColor = '#000'

    // text transition
    if (div.top <= (window.innerHeight * 20 / 100)) textDiv.setAttribute('data-state', 'open')

    if (div.top > (window.innerHeight * 20 / 100)) textDiv.setAttribute('data-state', 'closed')

    // header bg-color transition
    if (div.top <= (window.innerHeight * 10 / 100) && div.bottom > (window.innerHeight * 40 / 100)) header.style.backgroundColor = colors.section1

    if (div.top > (window.innerHeight * 10 / 100)) header.style.backgroundColor = '#000'
})

document.addEventListener('scroll', (e) => {
    const divs = document.querySelectorAll('section')
    console.log(divs)

    divs.forEach(d => {
        const div = d.getBoundingClientRect()
        const ih = window.innerHeight


        if ((div.bottom <= ih && div.bottom > 0) && div.bottom > (ih * 40 / 100)) {
            document.body.style.backgroundColor = colors[d.id]
            console.log('bottom', colors[d.id])

        } else if (div.top > ((-ih) * 60 / 100) && div.top <= (ih * 40 / 100)) {
            document.body.style.backgroundColor = colors[d.id]
            console.log('top', colors[d.id], ((-ih) * 60 / 100))
        }
    })

})