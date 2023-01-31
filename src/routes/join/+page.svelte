<script>
    import ContactCard from "../contact/ContactCard.svelte";
</script>
<div class="col-12">
    
    <div id="joinBanner" class="col-12 d-flex justify-content-around text-center align-items-center flex-wrap p-3">
        <div class="col-12 text-center my-0">
            <h2 class="whiteText py-3">Ready to take charge of your career?</h2>
        </div>
        <div class="col-3 flexColumn flexCenterV">
            <i class="p-3 fa-solid fa-hand-holding-dollar joinIcon blueText"></i>
            <h6>Great splits, low cap and fees</h6>
        </div>
        <div class="col-3 flexColumn flexCenterV">
            <i class="p-3 fa-solid fa-circle-nodes joinIcon blueText"></i>
            <h6>Powerful technology tools</h6>
        </div>
        <div class="col-3 flexColumn flexCenterV">
            <i class="p-3 fa-solid fa-user-group joinIcon blueText"></i>
            <h6>Mentorship and community</h6>
        </div>
    </div>
</div>
    
<!-- <section id="whoWereLookingFor" class='d-flex align-items-center'>
    <div class="content-container px-5">
        <h4 class="oneHundo">We're looking for motivated Agents interested in taking ownership of their careers to join our growing team.</h4>
    </div>
</section> -->

<section class="d-flex align-content-center">
    <div class="content-container">
        <div class="col-12 d-flex flex-wrap justify-content-center align-items-center center joinReasonContainer text-start my-0">
            <div id="buildYourBusinessIMG" class="col-10 col-md-4 my-5 my-md-0"></div>
            <div class="col-12 col-md-8 joinSubContent flexColumn px-5">
                <h3 class="joinSubContentHeader">Build your business</h3>
                <p class="">Build your real estate business with Real’s great splits & tech tools — no office required.</p>
                <ul class="flexWrap">
                    <li class="padL"><b>&#10004</b> 85/15 Commission Split</li>
                    <li class="padL"><b>&#10004</b> $12,000 Cap, then 100% split</li>
                    <li class="padL"><b>&#10004</b> Free access to powerful tech tools, such as Chime, Skyscope, and more</li>
                </ul>
                <div class="col-12 col-lg-8 d-flex justify-content-center">
                    <a href="https://www.joinreal.com/about/details/agentplan" target="_blank" rel="noreferrer noopener"><div class="button learnMoreButton">Learn more</div></a>
                </div>
            </div>
        </div> 
    </div>
</section>
        
<section class="d-flex align-content-center lightLightGray">
    <div class="content-container">
        <div class="col-12 d-flex flex-wrap justify-content-center align-items-center center joinReasonContainer text-start my-0">
            <div id="revShareIMG" class="col-10 col-md-4 my-5 my-md-0 order-0 order-md-2"></div>
            <div class="col-12 col-md-8 joinSubContentRight text-start flexColumn px-5">
                <h3 class="onehundo joinSubContentHeader">Earn extra revenue</h3>
                <p class="">Earn 5% revenue share up to $4,000 per capping agent from Real's portion of the split. Unlock additional tiers as your network grows.</p>
                <div class="col-12 col-lg-8 d-flex justify-content-center">
                    <a href="https://www.joinreal.com/about/details/revenueshare" target="_blank" rel="noreferrer noopener"><div class="button learnMoreButton">Learn more</div></a>
                </div>
            </div>
            
        </div>
    </div>    
</section>
<section class="d-flex align-content-center">
    <div class="content-container">
        <div class="col-12 d-flex flex-wrap justify-content-center align-items-center center joinReasonContainer text-start my-0">
            <div id="ownAPieceIMG" class="col-10 col-md-4 my-5 my-md-0"></div>
            <div class="col-12 col-md-8 joinSubContent">
                <h3 class="onehundo joinSubContentHeader">Own a piece of your company</h3>
                <p>Real is publicly trading as The Real Brokerage Inc. (NASDAQ: REAX) (TSXV: REAX). Agents can earn a piece of the company through three stock plans.</p>
                <div class="col-12 col-lg-8 d-flex justify-content-center">
                    <a href="https://www.joinreal.com/about/details/stockplan" target="_blank" rel="noreferrer noopener"><div class="button learnMoreButton">Learn more</div></a>
                </div>
            </div>
        </div>    
    </div>
    

</section>
    
        <div id="joinContactUs" class="listingContactBar flexColumn flexCenterV inViewport ayyydee center">
            <h3 class="pt-5">Interested?</h3>
            <p>We're looking for motivated Agents interested in taking ownership of their careers to join our growing team. If you think you might be a good fit, use the form below to reach out or email us at christinefolzre@gmail.com</p>
            <ContactCard />
            <!-- <a href="contact.html"><div class="button">Contact Us</div></a> -->
        </div>


<style>
    section, .content-container {
        height: fit-content;
    }
    #joinBanner {
        background-image:linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url("$lib/img/salem-1.jpg");
        min-height: 350px;
        height: 40vh;
        max-height: fit-content;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        margin: auto;
        z-index: 0;
    }

#joinBanner > div {
    margin: 10px;
}

#joinBanner h6 {
    color: white;
}

#whoWereLookingFor {
    height: 40vh;
    max-height: 400px;
    min-height: 30px;

}

#whoWereLookingFor h4 {
    color: rgb(5,195,249);
    font-size: 1.5rem;
    font-style: italic;
}

#buildYourBusinessIMG, #revShareIMG, #ownAPieceIMG {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: 35vh;
    max-height: 450px;
    margin-top: 10px;
}

#buildYourBusinessIMG {
    background-image: url('$lib/img/christine-folz-1.jpg');
}

#revShareIMG {
    background-image: url("$lib/img/Team-photo-3.jpg");
}

#ownAPieceIMG {
    background-image: url("$lib/img/Team-photo-4.jpg");
}

b {
    color: rgb(5,195,249);
}

.joinIcon {
    font-size: 3rem;
}

/* .joinReasonContainer {
    height: 500px;
} */

.learnMoreButton {
    margin: 20px 0 20px 15px;
}

.textRight {
    text-align: end;
}

.joinSubContentRight, .joinSubContent {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 20px
}

.joinSubContent ul {
    padding: 0;
}

.joinSubContentRight {
    /* align-items: flex-end; */
}


.joinSubContent > ul {
    display: flex;
    justify-content: flex-start;
}

.joinSubContentHeader {
    border-bottom: solid rgb(5,195,249);
    font-size: 1.5rem;
}

#joinContactUs {
    margin: 30px auto;
}
        </style>