<script>
    import { listings } from '../listings'
    import ListingCard from './ListingCard.svelte'
    let max =4;
    let count = 0;
    // Write a function that increments count by 1
    $: featuredListings = listings
    .filter((listing) => listing.FeaturedListing && listing.Status !== "Sold")
    .slice(0, max);

</script>

<div id="listingsContainer" class="col-12 d-none d-sm-flex justify-content-between flex-wrap" >
    <!-- {#each featuredListings as listing}
        {#if listing.FeaturedListing && count < max}
            <ListingCard { listing } />
        {/if}
    {/each} -->
    {#each featuredListings as listing}
            <ListingCard { listing } />
    {/each}
</div>