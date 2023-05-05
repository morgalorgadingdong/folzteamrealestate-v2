<script>
    import { listings } from '../listings'
    import ListingCard from './ListingCard.svelte'
    let max =4;
    let count = 0;
</script>

<div id="listingsContainer" class="col-12 d-none d-sm-flex justify-content-between flex-wrap" >
    {#each listings as listing}
        {#if listing.FeaturedListing && count < max}
            
            <ListingCard { listing } />
        {/if}
    {/each}
</div>