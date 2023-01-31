<script>
    let title = 'Folz Team Real Estate';
    let keywords = `Salem, Oregon Real Estate, Willamette Valley Real Estate, Salem real estate experts, Salem real estate agents, Homes for sale in Salem`;
    let description = `Folz Team Real Estate, Salem Oregon's most trusted real estate team. We are a full service real estate team that specializes in residential, commercial, and investment properties. We are a team of 8 agents that are here to help you with all of your real estate needs.`; 
    // import hero from '$lib/img/hero.jpg'
    import about from '$lib/img/about-home-page.jpg'
    // import maag from '$lib/img/market-at-a-glance.jpg'
    import {Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
    import '@splidejs/svelte-splide/css';
    import FeaturedListingsContainer from './listings/FeaturedListingsContainer.svelte';
    
</script>

<svelt:head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name='keywords' content={keywords} />
</svelt:head>
<section id="heroIMG" class="my-0">
    <div class="heroText col-12 col-md-10 col-lg-6">
        <h1>The Willamette Valley's most trusted Real Estate Team.</h1>
    </div>
</section>

<section id="featuredListings" class="contentSection inViewport">
    <div class="content-container">
        <h2>Featured Listings</h2>
    
        <FeaturedListingsContainer />
    
        <div class="col-3 center flexCenterH flexSpaceAroundH">
            <a href="/listings"><button class="button">See All Listings</button></a>
        </div>
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
                    <div class="flexCenterH flexColumn testimonialContainer card">
                        <i class="fa-solid fa-quote-left"></i>
                        <i class="fa-solid fa-quote-right"></i>
                        <p class="onehundo testimonialTextLong">"We could not have been happier with our experience working with Christine. Not only is Christine skilled and strategic regarding timing and price, but she advised on staging and updates that would make the most of our efforts. She was always available for questions, recommendations, or ideas and responded quickly. We had offers our first day on the market and ended up accepting well over our asking price... We definitely would not trust anyone else with our future real estate needs!"</p>
                        <p class="onehundo testimonialTextAbbr">"We could not have been happier with our experience working with Christine. Not only is Christine skilled and strategic regarding timing and price, but she advised on staging and updates that would make the most of our efforts. She was always available for questions, recommendations, or ideas and responded quickly… We definitely would not trust anyone else with our future real estate needs!"</p>
                        <br>
                        <p class="onehundo testimonialText">Heather, Salem</p>
                    </div>
                </SplideSlide>
                <SplideSlide class="my-5">
                    <div class="flexCenterH flexColumn testimonialContainer card">
                        <i class="fa-solid fa-quote-left"></i>
                        <i class="fa-solid fa-quote-right"></i>
                        <p class="onehundo testimonialTextLong">"I have done two real estate transactions with Christine and she has been fantastic both times. She is knowledgeable about the local market, including price trends in various neighborhoods. She has an eye for style and made great recommendations for painting, flooring, etc. which helped us a get a quick sale. Most important of all, she was always very responsive to our needs, whether by phone, email, or text. She is very highly recommended and is my go-to broker in the Salem-Keizer area."</p>
                        <p class="onehundo testimonialTextAbbr">"I have done two real estate transactions with Christine and she has been fantastic both times. She is knowledgeable about the local market, including price trends in various neighborhoods. She has an eye for style and made great recommendations for painting, flooring, etc… She is very highly recommended and is my go-to broker in the Salem-Keizer area."</p>
                        <br>
                        <p class="testimonialText">Devon, Keizer</p>
                    </div>
                </SplideSlide>
                <SplideSlide class="my-5">
                    <div class="flexCenterH flexColumn testimonialContainer card">
                        <i class="fa-solid fa-quote-left"></i>
                        <i class="fa-solid fa-quote-right"></i>
                        <p class="onehundo testimonialTextLong">"Working with Evan was easy, fun, and extremely successful. We were first time home buyers that peppered Evan with questions ranging from details on particular houses to the process as a whole, all of which he patiently and thoroughly answered. Evan was always prepared and on time, if not early, for our appointments, and he readily accommodated our work schedules by meeting in the evening and over the weekend. He was present at every stage and gave us useful guidance on key decisions like the offer letter and outcomes of the home inspection. It's hard to overstate his response time to questions sent via voicemail, email, or text. Twice, we were the first party to tour a listing. We met Evan on a Wednesday and were submitting an offer the following Monday on the house we now call home."</p>
                        <p class="onehundo testimonialTextAbbr">"Working with Evan was easy, fun, and extremely successful. We were first time home buyers that peppered Evan with questions ranging from details on particular houses to the process as a whole, all of which he patiently and thoroughly answered... We met Evan on a Wednesday and were submitting an offer the following Monday on the house we now call home."</p>
                        <br>
                        <p class="testimonialText">Anonymous Zillow User, Salem</p>
                    </div>
                </SplideSlide>
                <SplideSlide class="my-5">
                    <div class="flexCenterH flexColumn testimonialContainer card">
                        <i class="fa-solid fa-quote-left"></i>
                        <i class="fa-solid fa-quote-right"></i>
                        <p class="onehundo testimonialTextLong">"Christine is the professional's professional. Excellent understanding of the market, solid marketing and sales efforts, trustworthy advice and expert at closing. Her communication skills are also superb, call backs within just a few minutes. We highly recommend Christine for any real estate need."</p>
                        <p class="onehundo testimonialTextAbbr">"Christine is the professional's professional. Excellent understanding of the market, solid marketing and sales efforts, trustworthy advice and expert at closing. Her communication skills are also superb, call backs within just a few minutes. We highly recommend Christine for any real estate need."</p>
                        <br>
                        <p class="testimonialText">Anonymous Zillow User, Dallas</p>
                    </div>
                </SplideSlide>
                <SplideSlide class="my-5">
                    <div class="flexCenterH flexColumn testimonialContainer card">
                        <i class="fa-solid fa-quote-left"></i>
                        <i class="fa-solid fa-quote-right"></i>
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
                <!-- <button class="splide__arrow splide__arrow--prev">&lt;</button>
                <button class="splide__arrow splide__arrow--next">&gt;</button> -->
                <button class="splide__arrow splide__arrow--prev"><i class="fa-solid fa-caret-left"></i></button>
                <button class="splide__arrow splide__arrow--next"><i class="fa-solid fa-caret-right"></i></button>
            </div>
            </Splide>
            
        <br>
        <div class="col-3 center flexCenterH flexSpaceAroundH">
            <a href="https://www.zillow.com/profile/Christinefolz" target="_blank" rel="noreferrer"><button id="reviewsButton" class="button">See More Reviews On Zillow</button></a>
        </div>

</section>

<div id="quoteSection" class="d-flex justify-content-center align-items-center flex-wrap">
    <div class="content-container d-flex justify-content-center align-items-center flex-wrap text-center">
        <h2 class="col-11" id="quote">"Work Hard. Be Kind."</h2>
        <p class="grayText col-11">Doing the right thing is rarely easy, that's why we embrace a culture of hard work in order to help our clients to the best of our ability.</p>
        <div class="col-3 center flexCenterH flexSpaceAroundH">
            <a href="/about"><button class="button">About us</button></a>
        </div>
</div>
</div>

<section id="theMarketAtAGlance" class="inViewport my-0">
    <div class="backgroundIMGContent1">
    <h2 class="whiteText">The Willamette Valley Market at a Glance</h2>
    <p class="sectionSubHeader">For the Month of December, 2022</p>
    <br>
    <div class="flexContainer flexLeft flexWrap flexSpaceAroundH col-11 center">
        <div class="col-6 col-md-3 maagItem">
            <i class="fa-solid fa-money-bill-1-wave iconHeader"></i>
            <h3 class="whiteText">Median Sales price</h3>
            <p class="maagValue">$404,000</p>
            <p><i class="fa-solid fa-arrow-down"></i> 4.1% from last month</p>
        </div>
        <div class="col-6 col-md-3 maagItem">
            <i class="fa-solid fa-border-all iconHeader"></i>
            <h3 class="whiteText">Median Sales Price Per Square Foot</h3>
            <p class="maagValue">$260</p>
            <p><i class="fa-solid fa-arrow-down"></i> 2.1% from last month</p>
        </div>
        <div class="col-6 col-md-3 maagItem">
            <i class="fa-solid fa-handshake iconHeader"></i>
            <h3 class="whiteText">Number of Closed Sales</h3>
            <p class="maagValue">354</p>
            <p><i class="fa-solid fa-arrow-down"></i> 9.2% from last month</p>
        </div>
        <div class="col-6 col-md-3 maagItem">
            <i class="fa-solid fa-clock iconHeader"></i>
            <h3 class="whiteText">Median Days on the Market</h3>
            <p class="maagValue">73</p>
            <p><i class="fa-solid fa-arrow-up"></i> 13.3% from last month</p>
        </div>
    </div>
</div>
</section>

<section id="aboutUsSection" class="inViewport col-12 my-0">
    <div class="col-12 d-flex justify-content-center align-items-center flex-wrap mb-5">
        <div class="col-11 col-xl-10 d-flex justify-content-between align-items-center flex-wrap">
            <h2 class="col-12">About Us</h2>
            <div id ="aboutTextContainer" class="textLeft col-12 col-md-6 d-flex justify-content-between align-items-center flex-wrap mx-0 px-4">
                <p>We are a small team of Real Estate Agents headcol-3ed in Salem Oregon, with a passion for helping others achieve their real estate goals. Our team was born and raised in the Salem/Keizer area, and as such offers insights into the market and neighborhoods that only decades of being imbedded in a community can provide.</p>
                <p></p>
                <a href="/about" ><button id="aboutButton" class="button third center textCenter">About Page</button></a>
            </div>
            <img class="col-12 col-md-6 circleIMG" src="{ about }" alt="dfa">
            <!-- <img class="col-12 col-md-6 circleIMG" src="$lib/img/about-home-page.jpg" alt="dfa"> -->
        </div>
    </div>
</section>

<style>
    
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

.splide__arrow {
    font-weight: 900;
    background-color: rgb(255, 255, 255, 0.5);
}

.splide__arrow > i {
    font-size: 1.5rem;
    color: black;
}

.splide__arrow--prev {
    position: absolute;
    top: 50%;
    left: 2vw;
    z-index: 1;
    padding: 0;
}

.splide__arrow--next {
    position: absolute;
    top: 50%;
    right: 2vw;
    z-index: 1;
}



#quote {
    color: black;
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

.maagItem .fa-arrow-down {
    color: #f84c6c;
}

.maagItem .fa-arrow-up {
    color: #02cc7d;
}


#aboutUsSection > div {
    min-height: 80vh;
}


</style>

