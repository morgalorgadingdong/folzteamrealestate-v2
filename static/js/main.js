// SECTION TOP BAR HIGHLIGHT
var myElement = document.getElementsByClassName('inViewport');
let scrolling = false;
window.onscroll = () => {
    scrolling = true;
};
setInterval(() => {
    if (scrolling) {
        scrolling = false;
        let bounding = []
        for (i=0; i < myElement.length; i++) {
            bounding.push(myElement[i].getBoundingClientRect());
            }
        for (i=0; i < myElement.length; i++) {
            // console.log(bounding[i].top)
            if (bounding[i].top >= 0 && bounding[i].left >= 0 && bounding[i].right <= (window.innerWidth || document.documentElement.clientWidth) && bounding[i].bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
                myElement[i].classList.add('inViewportActually');
                // console.log(`si ${bounding[i]}`)
            } else {
                myElement[i].classList.remove('inViewportActually');
                // console.log(`no ${bounding[i]}`)
            }
        }
    }
},500);


document.body.addEventListener('click', function(e) {
    if (e.target.id != 'mobileMenuToggler' && e.target.id != 'mobileMenu') {
        document.getElementById('mobileMenuToggler').checked = false;
    }
});

