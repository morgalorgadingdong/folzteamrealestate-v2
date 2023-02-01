<script>
    import { listings } from '../listings'
    import ListingCard from './ListingCard.svelte'
</script>

<div id="listingsContainer" class="col-12 d-none d-sm-flex justify-content-between flex-wrap" >
    {#each listings as listing}
        {#if listing.FeaturedListing}
            <ListingCard { listing } />
        {/if}
    {/each}
</div>