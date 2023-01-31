<script>
    import BlogsContainer from "./BlogsContainer.svelte";
</script>

<section>
    <div class="content-container">
        <h1>Blog</h1>
        <div class="col-12 d-flex justify-content-center flex-wrap px-5">
            <BlogsContainer />
        </div> 
    </div>
</section>





<style>
    /* #blogsContainer {
    display: flex;
    gap: 15px;
} */



section {
    min-height: 80vh;
}

nav > ul {
    margin-bottom: 0;
}

a {
    color: #05c3f9;
}



.blogHeader {
    background-position: center;
    background-size: cover;
    height: 30vh;
    max-height: 300px;
}

.blog-highlight {
    font-size: 1.5rem;
    font-weight: 600;
    color: #05c3f9;
    font-style: italic;
    background-color: rgb(175, 173, 172, 0.1);
}

.blog-divider {
    border-top: #05c3f9 solid 2px;
}
</style>