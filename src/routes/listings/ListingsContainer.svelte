<script>
    import { listings } from '../listings'
    import ListingCard from './ListingCard.svelte'
</script>

<div class="col-12 d-flex justify-content-between flex-wrap">
    {#each listings as listing}
        <ListingCard { listing } />
    {/each}
</div>