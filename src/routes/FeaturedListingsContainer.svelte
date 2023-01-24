<script>
    import { listings } from './listings'
    import ListingCard from './listings/ListingCard.svelte'
</script>

<div id="listingsContainer" class="flexLeft flexWrap flexSpaceBetweenH ninety center" >
    {#each listings as listing}
        {#if listing.FeaturedListing}
            <ListingCard { listing } />
        {/if}
    {/each}
</div>