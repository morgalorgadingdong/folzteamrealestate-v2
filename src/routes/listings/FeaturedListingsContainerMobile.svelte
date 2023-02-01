<script>
    import { listings } from '../listings'
    import ListingCard from './ListingCard.svelte'
    import {Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
    import '@splidejs/svelte-splide/css';
</script>

<div id="listingsContainer" class="col-12 d-block d-sm-none justify-content-between flex-wrap" >
    <Splide aria-label="Client Testimonials" class="z-reset" hasTrack={ false } options={ {
        type: 'loop',
        perPage: 2.5,
        breakpoints: {

            576: {
                perPage: 1,
            }
        },
        focus: 'center',
        drag: 'free',
        snap: true
      } }>
      <SplideTrack>
        {#each listings as listing}
            {#if listing.FeaturedListing}
                <SplideSlide class="my-3 mt-0">    
                    <ListingCard { listing } />
                </SplideSlide>
            {/if}
        {/each}    

        </SplideTrack>

        <div class="splide__arrows">
            <button class="splide__arrow splide__arrow--prev"><i class="fa-solid fa-caret-left"></i></button>
            <button class="splide__arrow splide__arrow--next"><i class="fa-solid fa-caret-right"></i></button>
        </div>
        </Splide>
</div>