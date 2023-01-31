<script>
    import { blogs } from '../blogs'
    import BlogCard from './BlogCard.svelte'
</script>

<div class="col-12 d-flex justify-content-around flex-wrap content-container">
    {#each blogs as blog}
        {#if blog.Published == true}    
            <BlogCard { blog } />
        {/if}
    {/each}
</div>

<style>

</style>