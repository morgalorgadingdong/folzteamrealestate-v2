<script>
    let title = 'Folz Team Real Estate';
    let description = 'Sick'; 
    import hero from '$lib/img/hero.jpg'
    import about from '$lib/img/about-home-page.jpg'
    // import maag from '$lib/img/market-at-a-glance.jpg'
    import {Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
    import '@splidejs/svelte-splide/css';
</script>

<svelt:head>
    <title>{title}</title>
    <meta name="description" content={description} />
</svelt:head>
<section id="heroIMG" class="my-0">
    <div class="heroText">
        <h1>The Willamette Valley's most trusted Real Estate Team.</h1>
    </div>
</section>

<section id="featuredListings" class="contentSection inViewport">
    <h2>Featured Listings</h2>
    
    <!-- <div id="featuredListingsMobile" class="carousel js-flickity" data-flickity='{ "wrapAround": true }' data-flickity-options='{ "prevNextButtons": false }'>

        
    </div> -->
    
    <div id="featuredListingsContainer" class="flexWrap flexSpaceBetweenH ninety center" >


    </div>

    <div class="quarter center flexCenterH flexSpaceAroundH">
        <a href="/listings"><button class="button">See All Listings</button></a>
    </div>
</section>

<section id="whatOurClientsSay" class="backgroundIMG2 inViewport">
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
                <SplideSlide class="my-5">
                    <div class="flexCenterH flexColumn testimonialContainer">
                        <p class="onehundo testimonialTextLong">"We could not have been happier with our experience working with Christine. Not only is Christine skilled and strategic regarding timing and price, but she advised on staging and updates that would make the most of our efforts. She was always available for questions, recommendations, or ideas and responded quickly. We had offers our first day on the market and ended up accepting well over our asking price... We definitely would not trust anyone else with our future real estate needs!"</p>
                        <p class="onehundo testimonialTextAbbr">"We could not have been happier with our experience working with Christine. Not only is Christine skilled and strategic regarding timing and price, but she advised on staging and updates that would make the most of our efforts. She was always available for questions, recommendations, or ideas and responded quickly… We definitely would not trust anyone else with our future real estate needs!"</p>
                        <br>
                        <p class="onehundo testimonialText">Heather, Salem</p>
                    </div>
                </SplideSlide>
                <SplideSlide class="my-5">
                    <div class="flexCenterH flexColumn testimonialContainer">
                        <p class="onehundo testimonialTextLong">"I have done two real estate transactions with Christine and she has been fantastic both times. She is knowledgeable about the local market, including price trends in various neighborhoods. She has an eye for style and made great recommendations for painting, flooring, etc. which helped us a get a quick sale. Most important of all, she was always very responsive to our needs, whether by phone, email, or text. She is very highly recommended and is my go-to broker in the Salem-Keizer area."</p>
                        <p class="onehundo testimonialTextAbbr">"I have done two real estate transactions with Christine and she has been fantastic both times. She is knowledgeable about the local market, including price trends in various neighborhoods. She has an eye for style and made great recommendations for painting, flooring, etc… She is very highly recommended and is my go-to broker in the Salem-Keizer area."</p>
                        <br>
                        <p class="onehundo testimonialText">Devon, Keizer</p>
                    </div>
                </SplideSlide>
                <SplideSlide class="my-5">
                    <div class="flexCenterH flexColumn testimonialContainer">
                        <p class="onehundo testimonialTextLong">"Working with Evan was easy, fun, and extremely successful. We were first time home buyers that peppered Evan with questions ranging from details on particular houses to the process as a whole, all of which he patiently and thoroughly answered. Evan was always prepared and on time, if not early, for our appointments, and he readily accommodated our work schedules by meeting in the evening and over the weekend. He was present at every stage and gave us useful guidance on key decisions like the offer letter and outcomes of the home inspection. It's hard to overstate his response time to questions sent via voicemail, email, or text. Twice, we were the first party to tour a listing. We met Evan on a Wednesday and were submitting an offer the following Monday on the house we now call home."</p>
                        <p class="onehundo testimonialTextAbbr">"Working with Evan was easy, fun, and extremely successful. We were first time home buyers that peppered Evan with questions ranging from details on particular houses to the process as a whole, all of which he patiently and thoroughly answered... We met Evan on a Wednesday and were submitting an offer the following Monday on the house we now call home."</p>
                        <br>
                        <p class="onehundo testimonialText">Anonymous Zillow User, Salem</p>
                    </div>
                </SplideSlide>
                <SplideSlide class="my-5">
                    <div class="flexCenterH flexColumn testimonialContainer">
                        <p class="onehundo testimonialTextLong">"Christine is the professional's professional. Excellent understanding of the market, solid marketing and sales efforts, trustworthy advice and expert at closing. Her communication skills are also superb, call backs within just a few minutes. We highly recommend Christine for any real estate need."</p>
                        <p class="onehundo testimonialTextAbbr">"Christine is the professional's professional. Excellent understanding of the market, solid marketing and sales efforts, trustworthy advice and expert at closing. Her communication skills are also superb, call backs within just a few minutes. We highly recommend Christine for any real estate need."</p>
                        <br>
                        <p class="onehundo testimonialText">Anonymous Zillow User, Dallas</p>
                    </div>
                </SplideSlide>
                <SplideSlide class="my-5">
                    <div class="flexCenterH flexColumn testimonialContainer">
                        <p class="onehundo testimonialTextLong">"Christine was OUTSTANDING and so easy to work with! She did a great job helping us find the perfect home. She was extremely knowledgeable and super forthcoming with information. Christine digs into homes for you, getting the entire scoop and history... it meant so much that she went above and beyond for us."</p>
                        <p class="onehundo testimonialTextAbbr">"Christine was OUTSTANDING and so easy to work with! She did a great job helping us find the perfect home. She was extremely knowledgeable and super forthcoming with information… It meant so much that she went above and beyond for us."</p>
                        <br>
                        <p class="onehundo testimonialText">Anonymous Zillow User, Salem</p>
                    </div>
                </SplideSlide>
                
            </SplideTrack>
            <!-- <div class="splide__progress">
                <div class="splide__progress__bar" />
              </div> -->
            <div class="splide__arrows">
                <button class="splide__arrow splide__arrow--prev"></button>
                <button class="splide__arrow splide__arrow--next"></button>
            </div>
            </Splide>
            
        <br>
        <div class="quarter center flexCenterH flexSpaceAroundH">
            <a href="https://www.zillow.com/profile/Christinefolz" target="_blank" rel="noreferrer"><button id="reviewsButton" class="button">See More Reviews On Zillow</button></a>
        </div>

</section>

<section id="quoteSection" class="flexContainer flexCenterV ninety center flexWrap">
    <h2 class="col-12" id="quote">"Work Hard. Be Kind."</h2>
    <p class="grayText oneHundo">Doing the right thing is rarely easy, that's why we embrace a culture of hard work in order to help our clients to the best of our ability.</p>
    <div class="quarter center flexCenterH flexSpaceAroundH">
        <a href="/about"><button class="button">About us</button></a>
    </div>
</section>

<section id="theMarketAtAGlance" class="inViewport">
    <div class="backgroundIMGContent1">
    <h2 class="whiteText">The Willamette Valley Market at a Glance</h2>
    <p class="sectionSubHeader">For the Month of October, 2022</p>
    <br>
    <div class="flexContainer flexLeft flexWrap flexSpaceAroundH ninety center">
        <div class="quarter maagItem">
            <i class="fa-solid fa-money-bill-1-wave iconHeader"></i>
            <h3 class="whiteText">Median Sales price</h3>
            <p class="maagValue">$420,000</p>
            <p><i class="fa-solid fa-arrow-up iconPositiveTrend"></i> 6.3% from last month</p>
        </div>
        <div class="quarter maagItem">
            <i class="fa-solid fa-border-all iconHeader"></i>
            <h3 class="whiteText">Median Sales Price Per Square Foot</h3>
            <p class="maagValue">$273</p>
            <p><i class="fa-solid fa-arrow-up iconPositiveTrend"></i> 9.2% from last month</p>
        </div>
        <div class="quarter maagItem">
            <i class="fa-solid fa-handshake iconHeader"></i>
            <h3 class="whiteText">Number of Closed Sales</h3>
            <p class="maagValue">421</p>
            <p><i class="fa-solid fa-arrow-down iconNegativeTrend"></i> 42.2% from last month</p>
        </div>
        <div class="quarter maagItem">
            <i class="fa-solid fa-clock iconHeader"></i>
            <h3 class="whiteText">Median Days on the Market</h3>
            <p class="maagValue">63</p>
            <p><i class="fa-solid iconPositiveTrend"></i> 23.5% from last month</p>
        </div>
    </div>
</div>
</section>

<section id="aboutUsSection" class="inViewport d-flex justify-content-center align-items-center flex-wrap">
    <h2>About Us</h2>
    <div id="aboutContentContainer" class="ninety center flexLeft flexSpaceAroundH flexCenterV">
        <div id ="aboutTextContainer" class="foedee textLeft">
            <p>We are a small team of Real Estate Agents headquartered in Salem Oregon, with a passion for helping others achieve their real estate goals. Our team was born and raised in the Salem/Keizer area, and as such can offer insight into the market and neighborhoods that only decades of being imbedded in a community can provide.</p>
            <p></p>
            <a href="/about" ><button id="aboutButton" class="button third center textCenter">About Page</button></a>
        </div>
        <img class="third circleIMG" src="{ about }" alt="dfa">
    </div>
</section>

<style>
    section {
        min-height: 80vh;
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

.heroText {
  font-size: 1.2rem;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  background: rgba(175, 173, 172, 0.6);
  padding: 10px;
}

.z-reset {
    z-index: 0;
}

.splide__arrow--prev {
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 1;
}

.splide__arrow--next {
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 1;
}


#theMarketAtAGlance {
  color: white;
  background-image: linear-gradient(
      rgba(175, 173, 172, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url('$lib/img/market-at-a-glance.jpg');

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

