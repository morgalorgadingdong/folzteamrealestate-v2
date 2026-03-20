<script>
    let title = 'Folz Team Real Estate';
    let keywords = `Salem, Oregon Real Estate, Willamette Valley Real Estate, Salem real estate experts, Salem real estate agents, Homes for sale in Salem`;
    let description = `Folz Team Real Estate, Salem Oregon's most trusted real estate team. We are a full service real estate team that specializes in residential, commercial, and investment properties. We are a team of 8 agents that are here to help you with all of your real estate needs.`; 
    // import hero from '$lib/img/hero.jpg'
    import about from '$lib/img/about-home-page.jpg'
    import workhardbekind from '$lib/img/WorkHard_NewFont01@2x-cropped.png'
    import featuredListingPhoto from '$lib/img/featured-listing.png'
    // import maag from '$lib/img/market-at-a-glance.jpg'
    import {Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
    import '@splidejs/svelte-splide/css';
    import FeaturedListingsContainer from './listings/FeaturedListingsContainer.svelte';
    import FeaturedListingsContainerMobile from './listings/FeaturedListingsContainerMobile.svelte';

    //F IDX Broker

    import { onMount } from 'svelte';

    onMount(() => {
        const container = document.getElementById('listings');
        if (!container) {
            console.warn('Element with ID "listings" not found.');
            return;
        }

        const script = document.createElement('script');
        script.id = 'idxwidgetsrc-99186';
        script.src = 'https://folzteamrealestate.idxbroker.com/idx/widgets/99186';
        script.charset = 'UTF-8';
        script.async = true;
        container.innerHTML = '';
        container.appendChild(script);

        // Brand colors to apply to the IDX widget
        const brandVars = {
            '--idx-banners-color':      '#050e3d', // navy — banners, labels, "View All" button
            '--idx-priceReduced-color': '#05C3F9', // cyan — price-reduced badge
            '--idx-text-color':         '#ffffff', // white — text on dark overlays
            '--idx-favorite-color':     '#FF557E', // pink — heart/favorite icon
            '--idx-arrows-color':       '#050e3d', // navy — arrow icons
            '--idx-arrowBackground-color': 'rgba(255,255,255,0.85)', // white — arrow button bg
            '--idx-header-color':       '#f2f3f4', // light gray — header bg
        };

        // Additional styles injected directly into the shadow root
        const shadowCSS = `
            * {
                font-family: "Inter", sans-serif !important;
            }
            .idx-listing-card__listing-price {
                color: #050e3d !important;
            }
            .idx-listing-card {
                border-top: 3px solid #050e3d;
            }
            .idx-listings-carousel__arrow {
                box-shadow: 0 2px 6px rgba(0,0,0,0.15);
                transition: box-shadow 0.3s ease;
            }
            .idx-listings-carousel__arrow:hover {
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            }
            .idx-listings-carousel__submit {
                letter-spacing: 0.05em;
                text-transform: uppercase;
                font-family: "Inter", sans-serif !important;
                transition: box-shadow 0.3s ease;
            }
            .idx-listings-carousel__submit:hover {
                box-shadow: 0 4px 8px rgba(0,0,0,0.4);
            }
            .idx-listing-card__courtesy {
                color: #afadac;
            }
        `;

        let styleInjected = false;
        const deadline = Date.now() + 12000;

        const applyBrandStyles = () => {
            const carousel = document.querySelector('idx-listings-carousel');
            if (!(carousel instanceof HTMLElement)) return false;

            // Override the CSS custom properties on the host element;
            // they cascade into the shadow DOM via CSS variable inheritance.
            for (const [prop, value] of Object.entries(brandVars)) {
                carousel.style.setProperty(prop, value);
            }

            if (!carousel.shadowRoot) return false;

            if (!styleInjected) {
                const style = document.createElement('style');
                style.id = 'folz-idx-overrides';
                style.textContent = shadowCSS;
                carousel.shadowRoot.appendChild(style);
                styleInjected = true;
            }

            return true;
        };

        const poll = setInterval(() => {
            applyBrandStyles();
            if (styleInjected || Date.now() > deadline) {
                clearInterval(poll);
            }
        }, 200);
    });

</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name='keywords' content={keywords} />
</svelte:head>
<section id="heroIMG" class="my-0">
    <div class="heroText col-12 col-md-10 col-lg-6">
        <h1>The Willamette Valley's most trusted Real Estate Team.</h1>
    </div>
</section>




<!-- <section id="featuredListings" class="contentSection inViewport pb-5">
    <h2>Featured Listings - Coming soon!</h2>
</section> -->


<section id="featuredListings" class="contentSection inViewport pb-5">
    <!-- <h2>Featured Listing</h2> -->
    <!-- <FeaturedListingsContainerMobile/> -->
    
        
    <a href="https://theriverspenthouse.com/?mls=" target="_blank" rel="noreferrer" class="featured-listing-link">
        <div class="individualListingBG d-flex align-items-end">
            <div class="ytBg">
                <iframe
                    class="ytIframe"
                    src="https://www.youtube.com/embed/Rxf52YobdAU?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=Rxf52YobdAU"
                    title="Featured listing video"
                    frameborder="0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
            <div class="listingTitleContainer w-full flexCenterH flexWrap mb-5">
                <h1 class="listingTitle">Featured Listing!</h1>
            </div>
        </div>
    </a>
        
        <!-- <FeaturedListingsContainer/> -->
    
        <!-- <div class="col-12 center flexCenterH flexSpaceAroundH">
            <a href="/listings"><button class="button">See All Listings</button></a>
        </div> -->
</section>

<div class="contentSection pb-5">
  <h2 class="idx-section-heading">Browse Listings</h2>
  <div class="idx-shell">
    <div id="listings">
        <script
            charset="UTF-8"
            type="text/javascript"
            id="idxwidgetsrc-99186"
            src="https://folzteamrealestate.idxbroker.com/idx/widgets/99186">
        </script>
    </div>
  </div>
</div>

<section id="whatOurClientsSay" class="inViewport">
    <div class="py-5">
    <h2>What our Clients Say</h2>
        <Splide aria-label="Client Testimonials" class="z-reset" hasTrack={ false } options={ {
            type: 'loop',
            perPage: 2.5,
            breakpoints: {
		        768: {
			        perPage: 1.5,
		        },
                576: {
                    perPage: 1,
                }
            },
            focus: 'center',
            drag: 'free',
            snap: true
          } }>
          <SplideTrack>
                <SplideSlide class="my-3 mt-0">
                    <div class="flexCenterH flexColumn testimonialContainer card">
                        <i class="fa-solid fa-quote-left"></i>
                        <i class="fa-solid fa-quote-right"></i>
                        <p class="w-full testimonialTextLong">"We could not have been happier with our experience working with Christine. Not only is Christine skilled and strategic regarding timing and price, but she advised on staging and updates that would make the most of our efforts. She was always available for questions, recommendations, or ideas and responded quickly. We had offers our first day on the market and ended up accepting well over our asking price... We definitely would not trust anyone else with our future real estate needs!"</p>
                        <p class="w-full testimonialTextAbbr">"We could not have been happier with our experience working with Christine. Not only is Christine skilled and strategic regarding timing and price, but she advised on staging and updates that would make the most of our efforts. She was always available for questions, recommendations, or ideas and responded quickly… We definitely would not trust anyone else with our future real estate needs!"</p>
                        <br>
                        <p class="w-full testimonialText">Heather, Salem</p>
                    </div>
                </SplideSlide>
                <SplideSlide class="my-3 mt-0">
                    <div class="flexCenterH flexColumn testimonialContainer card">
                        <i class="fa-solid fa-quote-left"></i>
                        <i class="fa-solid fa-quote-right"></i>
                        <p class="w-full testimonialTextLong">"I have done two real estate transactions with Christine and she has been fantastic both times. She is knowledgeable about the local market, including price trends in various neighborhoods. She has an eye for style and made great recommendations for painting, flooring, etc. which helped us a get a quick sale. Most important of all, she was always very responsive to our needs, whether by phone, email, or text. She is very highly recommended and is my go-to broker in the Salem-Keizer area."</p>
                        <p class="w-full testimonialTextAbbr">"I have done two real estate transactions with Christine and she has been fantastic both times. She is knowledgeable about the local market, including price trends in various neighborhoods. She has an eye for style and made great recommendations for painting, flooring, etc… She is very highly recommended and is my go-to broker in the Salem-Keizer area."</p>
                        <br>
                        <p class="testimonialText">Devon, Keizer</p>
                    </div>
                </SplideSlide>
                <SplideSlide class="my-3 mt-0">
                    <div class="flexCenterH flexColumn testimonialContainer card">
                        <i class="fa-solid fa-quote-left"></i>
                        <i class="fa-solid fa-quote-right"></i>
                        <p class="w-full testimonialTextLong">"Working with Evan was easy, fun, and extremely successful. We were first time home buyers that peppered Evan with questions ranging from details on particular houses to the process as a whole, all of which he patiently and thoroughly answered. Evan was always prepared and on time, if not early, for our appointments, and he readily accommodated our work schedules by meeting in the evening and over the weekend. He was present at every stage and gave us useful guidance on key decisions like the offer letter and outcomes of the home inspection. It's hard to overstate his response time to questions sent via voicemail, email, or text. Twice, we were the first party to tour a listing. We met Evan on a Wednesday and were submitting an offer the following Monday on the house we now call home."</p>
                        <p class="w-full testimonialTextAbbr">"Working with Evan was easy, fun, and extremely successful. We were first time home buyers that peppered Evan with questions ranging from details on particular houses to the process as a whole, all of which he patiently and thoroughly answered... We met Evan on a Wednesday and were submitting an offer the following Monday on the house we now call home."</p>
                        <br>
                        <p class="testimonialText">Anonymous Zillow User, Salem</p>
                    </div>
                </SplideSlide>
                <SplideSlide class="my-3 mt-0">
                    <div class="flexCenterH flexColumn testimonialContainer card">
                        <i class="fa-solid fa-quote-left"></i>
                        <i class="fa-solid fa-quote-right"></i>
                        <p class="w-full testimonialTextLong">"Christine is the professional's professional. Excellent understanding of the market, solid marketing and sales efforts, trustworthy advice and expert at closing. Her communication skills are also superb, call backs within just a few minutes. We highly recommend Christine for any real estate need."</p>
                        <p class="w-full testimonialTextAbbr">"Christine is the professional's professional. Excellent understanding of the market, solid marketing and sales efforts, trustworthy advice and expert at closing. Her communication skills are also superb, call backs within just a few minutes. We highly recommend Christine for any real estate need."</p>
                        <br>
                        <p class="testimonialText">Anonymous Zillow User, Dallas</p>
                    </div>
                </SplideSlide>
                <SplideSlide class="my-3 mt-0">
                    <div class="flexCenterH flexColumn testimonialContainer card">
                        <i class="fa-solid fa-quote-left"></i>
                        <i class="fa-solid fa-quote-right"></i>
                        <p class="w-full testimonialTextLong">"Christine was OUTSTANDING and so easy to work with! She did a great job helping us find the perfect home. She was extremely knowledgeable and super forthcoming with information. Christine digs into homes for you, getting the entire scoop and history... it meant so much that she went above and beyond for us."</p>
                        <p class="w-full testimonialTextAbbr">"Christine was OUTSTANDING and so easy to work with! She did a great job helping us find the perfect home. She was extremely knowledgeable and super forthcoming with information… It meant so much that she went above and beyond for us."</p>
                        <br>
                        <p class="w-full testimonialText">Anonymous Zillow User, Salem</p>
                    </div>
                </SplideSlide>
                
            </SplideTrack>
            <div class="splide__arrows">
                <button class="splide__arrow splide__arrow--prev"><i class="fa-solid fa-caret-left"></i></button>
                <button class="splide__arrow splide__arrow--next"><i class="fa-solid fa-caret-right"></i></button>
            </div>
            </Splide>
            
        <br>
        <div class="col-12 center flexCenterH flexSpaceAroundH">
            <a href="https://www.zillow.com/profile/Christinefolz" target="_blank" rel="noreferrer"><button id="reviewsButton" class="button">See More Reviews On Zillow</button></a>
        </div>
    </div>
</section>

<div id="quoteSection" class="d-flex justify-content-center align-items-center flex-wrap">
    <div class="content-container d-flex justify-content-center align-items-center flex-wrap text-center">
        <!-- <p class="grayText">Our motto</p> -->
        <img class="col-10 p-3" id="quote" src={workhardbekind} alt="Work Hard. Be Kind." />
        <!-- <h2 class="col-12 py-0" id="quote">Work Hard. <b>Be Kind.</b></h2> -->
        <!-- <p class="grayText col-11">Doing the right thing is rarely easy, that's why we embrace a culture of hard work in order to help our clients to the best of our ability.</p> -->
        <!-- <div class="col-12 center flexCenterH flexSpaceAroundH">
            <a href="/about"><button class="button">About us</button></a>
        </div> -->
</div>
</div>

<!-- <section id="theMarketAtAGlance" class="my-0 d-flex flex-wrap align-content-center">
    <div class="backgroundIMGContent1 content-section">
    <h2 class="whiteText">The Willamette Valley Market at a Glance</h2>
    <p class="sectionSubHeader">For the Month of January, 2023</p>
    <br>
    <div class="flexContainer flexLeft flexWrap flexSpaceAroundH col-11 center">
        <div class="col-6 col-md-3 maagItem">
            <i class="fa-solid fa-money-bill-1-wave iconHeader"></i>
            <h3 class="whiteText">Median Sales price</h3>
            <p class="maagValue">$404,529</p>
            <p><i class="fa-solid fa-arrow-up"></i> 1.1% from last month</p>
        </div>
        <div class="col-6 col-md-3 maagItem">
            <i class="fa-solid fa-border-all iconHeader"></i>
            <h3 class="whiteText">Median Sales Price Per Square Foot</h3>
            <p class="maagValue">$263</p>
            <p><i class="fa-solid fa-arrow-up"></i> 3.3% from last month</p>
        </div>
        <div class="col-6 col-md-3 maagItem">
            <i class="fa-solid fa-handshake iconHeader"></i>
            <h3 class="whiteText">Number of Closed Sales</h3>
            <p class="maagValue">252</p>
            <p><i class="fa-solid fa-arrow-down"></i> 46.7% from last month</p>
        </div>
        <div class="col-6 col-md-3 maagItem">
            <i class="fa-solid fa-clock iconHeader"></i>
            <h3 class="whiteText">Median Days on the Market</h3>
            <p class="maagValue">86</p>
            <p><i class="fa-solid fa-arrow-up"></i> 78.1% from last month</p>
        </div>
    </div>
</div>
</section> -->

<section id="aboutUsSection" class="inViewport col-12 my-0">
    <div class="col-12 d-flex justify-content-center align-items-center flex-wrap mb-5">
        <div class="col-11 col-xl-10 d-flex justify-content-center justify-content-md-between align-items-center flex-wrap">
            <h2 class="col-12">About Us</h2>
            <div id ="aboutTextContainer" class="textLeft col-12 col-md-6 d-flex justify-content-between align-items-center flex-wrap mx-0 px-4 order-1">
                <p>We are a small team of Real Estate Agents headquartered in Salem Oregon, who have a passion for helping others achieve their real estate goals. Our team was born and raised in the Salem/Keizer area, and as such offers insights into the market and neighborhoods that only decades of being imbedded in a community can provide.</p>
                <a href="/about" ><button id="aboutButton" class="button third center textCenter">Our Story</button></a>
            </div>
            <img class="col-10 col-md-5 order-0 order-md-2 my-3" src="{ about }" alt="Group of people in business casual attire pretending to be doing various 'real estate agent' tasks (asnwering phones, on laptop, holding a 'sold' sign, etc) around a couch in an empty room.">
            <!-- <img class="col-12 col-md-6 circleIMG" src="$lib/img/about-home-page.jpg" alt="dfa"> -->
        </div>
    </div>
</section>

<style>
    .featured-listing-link {
        display: block;
        width: 100%;
    }

    #heroIMG {
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('$lib/img/hero.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 85vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.individualListingBG {
        background-color: black;
        height: 500px;
        min-height: 80vh;
        max-height: 95vh;
        position: relative;
        width: 100%;
        z-index: 0;
    }

    .individualListingBG::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.25);
  z-index: -1; /* keep it behind text but above video */
}

    .individualListingBG > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin: 0;
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
        opacity: 0.6;
        /* mask-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
        -webkit-mask-image: linear-gradient(rgba(0, 0, 0), rgba(0, 0, 0)); */
    }
    .listingTitleContainer {
    margin: 0;
    color: white;
    padding: var(--space-xl) var(--space-xs);
    text-align: center;
    height: fit-content;
    background-color: color-mix(in srgb, var(--color-accent-cyan) 40%, transparent);
    z-index: 1;
}

.listingTitleContainer > h1 {
    margin: 0 0 var(--space-md) 0;
    color: white;
    text-align: center;
    font-size: 2.5rem;
    font-weight: lighter;
    width: 100%;
}

.listingSubTitleContainer {
    min-width: 330px;
    max-width: 650px;
}

.listingSubTitleContainer > p {
    margin: 0;
    color: white;
    font-size: 1.1rem;
    text-align: start;
    font-weight: lighter;
}

.row {
    width: 90%;
    display: flex;
    margin: auto;
}

.listingInfoContainer h2 {
    font-size: 2rem;
    /* width: max-content; */
    margin: 0 30px 0 0;
}

.ytBg {
  position: absolute;
  inset: 0;
  z-index: -1;
  opacity: 0.6;
  overflow: hidden;
  pointer-events: none; /* keep section clickable */
}

/* “cover” trick for YouTube iframe */
.ytIframe {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 177.78vh; /* 16/9 * 100vh */
  height: 100vh;
  transform: translate(-50%, -50%);
}

/* On very wide screens, switch sizing so it still covers */
@media (min-aspect-ratio: 16/9) {
  .ytIframe {
    width: 100vw;
    height: 56.25vw; /* 9/16 * 100vw */
  }
}

.idx-shell {
  width: 100%;
  max-width: 1400px;   /* or 1200 / 1600 — your call */
  margin: 0 auto;
  padding: 0 1rem;     /* keeps it off screen edges */
}

#listings,
#listings * {
  box-sizing: border-box;
}

#listings {
  overflow-x: clip; /* modern */
}

/* fallback */
@supports not (overflow: clip) {
  #listings {
    overflow-x: hidden;
  }
}


#theMarketAtAGlance {
color: white;
background-image: linear-gradient(
    rgba(175, 173, 172, 0.5),
    rgba(0, 0, 0, 0.5)
  ),
  url('$lib/img/mt-hood.jpg');

background-position: center;
background-repeat: no-repeat;
background-size: cover;
position: relative;
margin: auto;
background-attachment: fixed;
background-position: center;
z-index: 1;
}

</style>

