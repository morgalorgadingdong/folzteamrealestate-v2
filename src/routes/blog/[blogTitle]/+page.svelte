<script>
	import { blogs } from "../../blogs"; 
    export let data;
    //  export let blog;
    //  export const slug = blog;
    
    let blog
    blogs.forEach(article => {
        if (article.Title == data.blogTitle) {
            blog = article;
        }
    })

    
    let imgSrcBanner = `../img/blogs/${blog.Number}. ${blog.Title}/blog-${blog.Number}-banner.jpg`;
    let testBlog = blogs[1]
    let prevBlog
    let nextBlog
    // if (blog.Number != 1) {
    //     prevBlog = blogs[blog.Number - 1]
    // }
    // if (blog.Number <= blogs.length+1) {
    //     nextBlog = blogs[blog.Number + 1]
    // }

</script>

<section>
    <div class="blogBanner col-12 px-0">
        <img src = {imgSrcBanner} alt="{blog.BannerAlt}" class="bannerImg" />
    </div>
    <div id="" class="d-flex flex-wrap justify-content-center content-container text-start center mb-5" >            
        <div class="col-12 blog-header d-flex align-content-center justify-content-start flex-wrap">
            <h2 class="col-12 text-left px-3 pb-1">{blog.Title}</h2>
            <p class="blogDate col-12 text-left px-3">Published by {blog.Author} on {blog.Date}</p>
        </div>
        <div class="col-12 px-3">
            <div class="blog-divider col-12 blog-header-divider"></div>
        </div>
        <div class="col-12 d-flex justify-content-center flex-wrap mt-3 px-3">
            {#each blog.Sections as Section}
                {#if Section.Type == 'text'}
                    <p class="col-12 col-lg-8 text-left px-0 my-3 blog-text {Section.Class}">{Section.Content}</p>
                {:else if Section.Type == 'img'}
                    <img src="../img/blogs/{blog.Number}. {blog.Title}/blog-{blog.Number}-{Section.Number}.jpg" alt="{Section.Alt}" class="col-10 col-md-8 mt-3 blog-img" />
                    <span class="col-12 text-center mb-3">{#if Section.Caption}{Section.Caption}{/if} <a href="{Section.Src}">source</a></span>
                {:else if Section.Type == 'divider'}
                    <div class="mt-5 pb-5 blog-divider col-8 {Section.Class}"></div>
                {:else if Section.Type == 'highlight'}
                <p class="text-center blog-highlight p-5 col-12 col-lg-8 my-5">{Section.Content}</p>
                {:else if Section.Type == 'heading'}
                <h4 class="text-start col-12 col-lg-8 mt-3 mb-0">{Section.Content}</h4>
                {:else if Section.Type == 'list'}
                <ul class="text-start col-12 col-lg-8 my-3 mb-0 d-flex flex-wrap justify-content-center">
                    {#each Section.ListItems as Item}
                        {#if Item.Type == 'text'}
                            <li class="blog-text my-2 col-12">{Item.Content}</li>
                        {:else if Item.Type == 'img'}
                            <img src="../img/blogs/{blog.Number}. {blog.Title}/blog-{blog.Number}-{Item.Number}.jpg" alt="{Section.Alt}" class="col-10 col-md-8 mt-3 blog-img" />
                            <span class="col-12 text-center mb-3">{#if Item.Caption}{Item.Caption}{/if} <a href="{Item.Src}">source</a></span>
                        {/if}
                    {/each}
                </ul>
                {:else if Section.Type == 'html'}
                    <p class="col-12 col-lg-8 text-left px-0 my-3 blog-text {Section.Class}">{@html Section.Content}</p>
                {:else if Section.Type == 'quote'}
                    <div class="flexCenterH flexColumn testimonialContainer col-12 col-lg-8 px-0 mx-0">
                        <i class="fa-solid fa-quote-left px-3 px-md-5"></i>
                        <!-- <i class="fa-solid fa-quote-right"></i> -->
                        <p class="col-12 text-left px-3 px-md-5 my-3  blog-text {Section.Class}">{@html Section.Content}</p>
                    </div>
                {:else if Section.Type == 'link'}
                    <a href="{Section.url}" class="col-12 col-lg-8  px-0"><p class="col-12 text-left px-0 my-3 blog-text {Section.Class}">{Section.Content}</p></a>
                {/if}
            {/each}
        </div>
    </div>
    <a href="/blog" class=""><div class="button my-5">Back to Blogs</div></a>
    <!-- <a href={'./'+testBlog.Title}>{testBlog.Title}</a>  -->
    <!-- <p on:click={blog = testBlog}>{testBlog.Title}</p> -->
</section>
 <!-- <p on:click={reloadPage(nextBlog.Title)}>{nextBlog.Title}</p> -->

<style>
    .blog-divider.divider-invisible {
        border-top: 0px solid rgba(175, 173, 172,0);
        margin-top: 1.5rem !important;
        padding-bottom: 1.5rem !important;
    }

    .indented {
        padding-left: 2rem !important;
    }

    .sub-header {
        font-size: 1.5rem;
        font-weight: 600;
        font-style: italic;
        margin-bottom: -0.5rem !important;
        color: #3e3f3c;
    }
    
    .blog-text {
        font-size: 1.2rem;
        line-height: 1.5rem;
        font-family: var(--bs-body-font-family);
    }

    .blog-img {
        object-fit: cover;
        margin: 0;
        position: relative;
        left: 0;
        top: 0;
        aspect-ratio: 1/1;
    }

    .blogBanner {
        background-color: black;
        height: 30vh;
        max-height: 300px;
        /* background-position: center;
        background-repeat: no-repeat;
        background-size: cover; */
        position: relative;
        margin: auto;
        /* background-position: center; */
    }

    .blogBanner > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin: 0;
        position: absolute;
        left: 0;
        top: 0;
        /* mask-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
        -webkit-mask-image: linear-gradient(rgba(0, 0, 0), rgba(0, 0, 0)); */
    }
/* #blogsContainer {
    display: flex;
    gap: 15px;
} */

.blog-header {
    min-height: 23vh;
}

.blogDate {
    color: #afadac;
}

.blog-header-divider {
    margin-bottom: 40px;
}

a {
    color: #05c3f9;
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

@media (max-width: 768px) {
    .blog-text {
        font-size: 1rem;
        line-height: 1.2rem;
    }
}

.testimonialContainer {
    height: fit-content;
    position: relative;
    padding: 1rem;
    background-color: rgba(211, 211, 211, 0);
}

.testimonialContainer p {
    /* background-color: rgba(211, 211, 211, 0.5); */
    padding: 1rem;
    border-radius: 5px;
    font-style: italic;
}

.testimonialContainer .fa-quote-left, .testimonialContainer .fa-quote-right {
  color: rgb(5, 195, 249, 0.5);
  font-size: 3rem;
}

</style>




    <!-- {#each blogs as blog}
        {#if blog.Title == data.slug}
        <div class="blogBanner col-12 px-0">
            <img src = {imgSrcBanner} alt="banner" class="bannerImg" />
        </div>
        <div id="" class="d-flex flex-wrap justify-content-center col-12 col-lg-10 col-xxl-8 center mb-5" >            
            <div class="col-12 blog-header d-flex align-content-center justify-content-start flex-wrap">
                <h2 class="col-12 text-left px-3 pb-1">{thisBlog.Title}</h2>
                <p class="blogDate col-12 text-left px-3">Published by {blog.Author} on {blog.Date}</p>
            </div>
            <div class="col-12 px-3">
                <div class="blog-divider col-12 blog-header-divider"></div>
            </div>
            <div class="col-12 d-flex justify-content-center flex-wrap mt-3 px-3">
                {#each blog.Sections as Section}
                    {#if Section.Type == 'text'}
                        <p class="col-12 text-left px-0 my-3 blog-text">{Section.Content}</p>
                    {:else if Section.Type == 'img'}
                        <img src="../img/blogs/{blog.Title}/blog-{blog.Number}-{Section.Number}.jpg" alt="{Section.Alt}" class="col-8 mt-5 blog-img" />
                        <span class="col-12 text-center mb-5">{Section.Caption} <a href="{Section.Src}">source</a></span>
                    {:else if Section.Type == 'divider'}
                        <div class="mt-5 pb-5 blog-divider col-8"></div>
                    {:else if Section.Type == 'highlight'}
                    <p class="text-center blog-highlight p-5 col-12 col-lg-8">{Section.Content}</p>
                    {:else if Section.Type == 'heading'}
                    <h4 class="text-start col-12">{Section.Content}</h4>
                    {/if}
                {/each}
            </div>
        </div>
        {/if}
    {/each} -->