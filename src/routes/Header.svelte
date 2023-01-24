<script>
	import { page } from '$app/stores';
	import logo from '$lib/img/logo.png';
</script>


<header class="col-12 d-flex justify-content-center">
    <nav class="col-10 d-flex justify-content-center justify-content-md-between mt-0">
        <div id="mobileMenuToggle">
            <input type="checkbox" />
            <span class="lightGray"></span>
            <span class="lightGray"></span>
            <span class="lightGray"></span>
            <ul id="mobileMenu">
                <a href="/listings"><li>listings</li></a>
                <a href="/about"><li>About</li></a>
                <a href="/blog"><li>Blog</li></a>
                <a href="/join"><li>Join</li></a>
                <a href="/contact"><li>Contact</li></a>
            </ul>
        </div>
        <div class="d-flex justify-content-start align-items-center">
            <a href="/"><img src={logo} alt="logo" class="logo"></a>
        </div>
        <ul class="d-flex justify-content-between col-6 my-0" id="nonMobileMenu">
            <a aria-current={$page.url.pathname.startsWith('/listings') ? 'page' : undefined} class="flex-grow-1 text-center" href="/listings"><li>Listings</li></a>
            <a aria-current={$page.url.pathname === '/about' ? 'page' : undefined} class="flex-grow-1 text-center" href="/about"><li>About</li></a>
            <a aria-current={$page.url.pathname.startsWith('/blog') ? 'page' : undefined} class="flex-grow-1 text-center" href="/blog"><li>Blog</li></a>
            <a aria-current={$page.url.pathname === '/join' ? 'page' : undefined} class="flex-grow-1 text-center" href="/join"><li>Join</li></a>
            <a aria-current={$page.url.pathname === '/contact' ? 'page' : undefined} class="flex-grow-1 text-center" href="/contact"><li>Contact</li></a>
        </ul>
    </nav>
</header>

<style>
    .logo {
        height: 40px;
    }

    ul > a {
        border-bottom: solid 5px rgb(5, 195, 249, 0);
        border-top: solid 5px rgb(5, 195, 249, 0);
    }

    a[aria-current='page'] {
        border-bottom: solid 5px rgb(5, 195, 249, 0.5);
    }

    ul > a > li {
        text-decoration: none;
        color: #3e3f3c;
        font-size: 1.3rem;
        display: inline-block;
    }

    nav > ul > a:hover {
        border-bottom: solid 5px rgb(5, 195, 249, 0.5);
        transition: width 0.5s ease;
        transition: background-color 1s ease;
    }

    #mobileMenuToggle, #mobileMenuToggle input, #mobileMenuToggle a, #mobileMenuToggle input {
    display: none;
}


@media screen and (max-width: 768px) {
    #nonMobileMenu {
        display: none !important;
    }
    
    #mobileMenuToggle
    {
    position: absolute;
    top: 37px;
    left: 10px;
    display: block;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
    }


    #mobileMenuToggle a
    {
    text-decoration: none;
    color: #232323;
    transition: color 0.3s ease;
    display: block;
    }

    /* #mobileMenuToggle a:hover
    {
    color: tomato;
    } */


    #mobileMenuToggle input
    {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;
    
    cursor: pointer;
    
    opacity: 0; /* hide this */
    z-index: 3; /* and place it over the hamburger */
    
    -webkit-touch-callout: none;
    }

    /*
    * Just a quick hamburger
    */
    #mobileMenuToggle span
    {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    /* opacity: .8; */
    /* background: #EDEDED; */
    border-radius: 3px;
    
    z-index: 2;
    
    transform-origin: 4px 0px;
    
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                opacity 0.55s ease;
    }

    #mobileMenuToggle span:first-child
    {
    transform-origin: 0% 0%;
    }

    #mobileMenuToggle span:nth-last-child(2)
    {
    transform-origin: 0% 100%;
    }

    /* 
    * Transform all the slices of hamburger
    * into a crossmark.
    */
    #mobileMenuToggle input:checked ~ span
    {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
    }

    /*
    * But let's hide the middle one.
    */
    #mobileMenuToggle input:checked ~ span:nth-last-child(3)
    {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
    }

    /*
    * Ohyeah and the last one should go the other direction
    */
    #mobileMenuToggle input:checked ~ span:nth-last-child(2)
    {
    transform: rotate(-45deg) translate(0, -1px);
    }

    /*
    * Make this absolute positioned
    * at the top left of the screen
    */
    #mobileMenu
    {
    position: absolute;
    width: 300px;
    margin: -100px 0 0 -50px;
    padding: 50px;
    padding-top: 125px;
    background: rgb(255,255,255, .7);
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    /* to stop flickering of text in safari */
    transform-origin: 0% 0%;
    transform: translate(-100%, 0);
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
    z-index: 1;
    }

    #mobileMenu li
    {
    padding: 10px 0;
    font-size: 22px;
    z-index: 1;
    position: relative; 
    }

    /*
    * And let's slide it in from the left
    */
    #mobileMenuToggle input:checked ~ ul
    {
    transform: none;
    }

}
</style>