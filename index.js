var init = function () {
    var isMobile = navigator.userAgent &&
        navigator.userAgent.toLowerCase().indexOf('mobile') >= 0;
    var isSmall = window.innerWidth < 1000;

    var ps = new ParticleSlider({
        ptlGap: 6,
        mouseForce: 400,
        monochrome: true,
        color: '#f98622',
        ptlSize: 2
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

// purple section --------------------------------------------------------------------
document.addEventListener('scroll', (e) => {
    const purpleSection = document.getElementById('purple-section');
    const div = purpleSection.getBoundingClientRect()
    const textDiv = purpleSection.children.item(1)

    // bg color transition
    if (div.top <= (window.innerHeight * 80 / 100) && div.top > ((-(window.innerHeight) * 50 / 100))) {
        mainContent.style.backgroundColor = colors.section1
    }

    if (div.bottom)

        if (div.top > (window.innerHeight * 80 / 100)) mainContent.style.backgroundColor = '#000'

    // text transition
    if (div.top <= (window.innerHeight * 20 / 100)) textDiv.setAttribute('data-state', 'open')

    if (div.top > (window.innerHeight * 20 / 100)) textDiv.setAttribute('data-state', 'closed')

    // header bg-color transition
    if (div.top <= (window.innerHeight * 10 / 100) && div.bottom > (window.innerHeight * 40 / 100)) header.style.backgroundColor = colors.section1

    if (div.top > (window.innerHeight * 10 / 100)) header.style.backgroundColor = '#16181c'
})
// ------------------------------------------------------------------------------------------------


// all sections ---------------------------------------------------------------------------------
document.addEventListener('scroll', (e) => {
    const divs = document.querySelectorAll('section')
    // console.log(divs)

    divs.forEach(d => {
        const div = d.getBoundingClientRect()
        const gridDiv = d.children.item(0)
        const textDiv = gridDiv.children.item(1)
        const ih = window.innerHeight


        if ((div.bottom <= ih && div.bottom > 0) && div.bottom > (ih * 50 / 100)) {
            const bgColor = d.id ? colors[d.id] : colors[d.getAttribute('data-color')]

            header.style.backgroundColor = bgColor
            mainContent.style.backgroundColor = bgColor
            // console.log('bottom', colors[d.id])

        } else if (div.top > ((-ih) * 50 / 100) && div.top <= (ih * 50 / 100)) {
            // document.body.style.backgroundColor = colors[d.id]

            const bgColor = d.id ? colors[d.id] : colors[d.getAttribute('data-color')]

            header.style.backgroundColor = bgColor
            mainContent.style.backgroundColor = bgColor
            // console.log('top', colors[d.id], ((-ih) * 60 / 100))
        }

        if (div.top <= (window.innerHeight * 40 / 100)) textDiv.setAttribute('data-state', 'open')

        if (div.top > (window.innerHeight * 40 / 100)) textDiv.setAttribute('data-state', 'closed')

        if (d.getAttribute('data-has-zoom') && div.top <= (window.innerHeight * 30 / 100)) d.children.item(1).setAttribute('data-zoom', 'true')

        if (d.getAttribute('data-has-zoom') && div.top > (window.innerHeight * 30 / 100)) d.children.item(1).setAttribute('data-zoom', 'false')

        // if (d.getAttribute('data-zoom') && div.top <= (window.innerHeight * 70 / 100)) {
        //     console.log(d.getAttribute('data-zoom'))
        //     const bgColor = d.id ? colors[d.id] : colors[d.getAttribute('data-color')]

        //     textDiv.setAttribute('data-state', 'open')
        //     header.style.backgroundColor = bgColor
        //     mainContent.style.backgroundColor = bgColor
        // }

        // if (d.getAttribute('data-zoom') && div.top > (window.innerHeight * 70 / 100)) textDiv.setAttribute('data-state', 'closed')
    })

})
// ---------------------------------------------------------------------------------------------------------------------------------------


// sandwich bar -----------------------------------------------------------------------------------------------------------------------
let scrollPosition = 0;

document.addEventListener('scroll', () => {
    console.log(window.scrollY)
    let currentScrollPosition = window.scrollY
    const sandwich = document.getElementById('sandwich')

    if (scrollPosition > currentScrollPosition) {
        sandwich.style.display = 'flex'
        // sandwich.style.position = 'fixed'
        // sandwich.style.top = '24px'
        // sandwich.style.right = '28px'
        // sandwich.style.backgroundColor = '#000'
        // sandwich.style.padding = '8px'
        // sandwich.style.width = '48px'
    }
    else {
        sandwich.style.display = 'none'
        // sandwich.style.width = '32px'
        // sandwich.style.padding = '0'
    }
    scrollPosition = currentScrollPosition
})
// ----------------------------------------------------------------------------------------------------------------------------------------


// end of main content -------------------------------------------------------------------------------------------------------------
document.addEventListener('scroll', () => {
    const div = mainContent.getBoundingClientRect()

    if (div.bottom <= (window.innerHeight * 40 / 100)) {
        console.log('main content end')
        mainContent.style.backgroundColor = '#16181c'
        header.style.backgroundColor = '#16181c'
    }
})
// ---------------------------------------------------------------------------------------------------------------------------------------





// end section visibility ----------------------------------------------------------------------------------------------------
document.addEventListener('scroll', () => {
    const div = document.getElementById('final')

    if (window.scrollY > window.innerHeight) {
        console.log('true')
        div.setAttribute('data-show', 'true')
    } else {
        div.setAttribute('data-show', 'false')
    }
})