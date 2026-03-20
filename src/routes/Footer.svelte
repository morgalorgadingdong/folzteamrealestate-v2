<script>
	import logo from '$lib/img/logo-2.png';
    import realLogo from '$lib/img/real-logo-with-name-white.png'
    import wvmlsLogo from '$lib/img/wvmls-logo.png'
</script>

<footer class="black flexCenterV py-5 flex-wrap d-flex justify-content-center">
    <div class="col-10 d-flex justify-content-center justify-content-sm-between center flex-wrap">
        <div class="col-8 col-sm-4 col-md-3 order-sm-2 mb-5 mb-sm-0">
            <img class="col-12" src={realLogo} alt="REAL Brokers">
            <!-- <p class="text-white col-12 text-center">Real Broker, LLC</p> -->
        </div>
        

        <div class="col-6 col-sm-3 flexLeft flexColumn flexCenterH whiteText flexWrap order-sm-1 ">
            <p class="testimonialText">Folz Team Real Estate</p>
            <p class="testimonialText">Christine Folz</p>
            <a href="mailto:christinefolzre@gmail.com" class="testimonialText whiteText">christinefolzre@gmail.com</a>
            <a href="tel:+15039493087" class="testimonialText whiteText">(503) 949-3087</a>
        </div>
        
        <div class="col-6 col-sm-3  justify-content-end justify-content-sm-around align-items-center align-content-sm-center flexCenterV  order-sm-3">
            <a href="https://www.instagram.com/folzteamrealestate/" target="_blank" rel="noreferrer" aria-label="Instagram"><i class="fa-brands fa-instagram whiteText footerSocial"></i></a>
            <a href="https://www.facebook.com/folzteamrealestate/" target="_blank" rel="noreferrer" aria-label="Facebook"><i class="fa-brands fa-facebook whiteText footerSocial"></i></a>
            <a href="/contact" aria-label="Contact us"><i class="fa-solid fa-envelope whiteText footerSocial"></i></a>
        </div>
    </div>
    <div class="col-lg-6 col-10 d-flex justify-content-center pt-5 flex-wrap">
        <p class="testimonialText whiteText text-italic">Based on information from Willamette Valley Multiple Listing Service, which neither guarantees nor is in any way responsible for its accuracy. All data is provided ‘AS IS’ and with all faults. Data maintained by Willamette Valley Multiple Listing Service may not reflect all real estate activity in the market.</p>
    </div>
    <div class="col-12 d-flex justify-content-center">
        <img class="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1 mt-3" src={wvmlsLogo} alt="REAL Brokers">
    </div>
    
    <p class="text-white col-12 text-center mt-3">2026</p>
</footer>