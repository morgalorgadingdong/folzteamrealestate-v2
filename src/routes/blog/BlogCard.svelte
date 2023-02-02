<script>
    /**
	 * @type {{ }}
	 */
    export let blog;
    let imgSrc = `./img/blogs/${blog.Number}. ${blog.Title}/blog-${blog.Number}-banner.jpg`;
    console.log(imgSrc)
</script>


<a href={'./blog/' + blog.Title} class="col-12 col-md-5 d-lg-none" data-sveltekit-preload-data="hover">
    <div class="col-12 card mx-0">
        <div class="card-body">
            <div class="card-img-top" >
                <img src="{ imgSrc }" alt="{blog.Title}"/>
                <!-- <img src="{'$lib/img/listings/' +  listing.Title + '/' + listing.MLS + '-0.jpg'}" alt="{listing.Title}"/> -->
                <!-- <img src='../../lib/img/listings/${listing.Title}/${listing.MLS}-0.jpg' alt="temp"/> -->
                <!-- <img src='$lib/' alt="{listing.Caption0}"/> -->
            </div>
            <!-- <div class="card-img-top"></div> -->
            <div class="col-12 px-2">
                <h5 class="card-title pt-3">{blog.Title}</h5>
                <p class="blogDate col-12 text-left px-0">{blog.Date}</p>
                <p class="blogDescription col-12 text-left px-0">{blog.Sections[0].Content}</p>
                <a href={'./blog/' + blog.Title}>Read More</a>
            </div>
        </div>
    </div>
</a>

<a href={'./blog/' + blog.Title} class="col-12 d-none d-lg-inline my-5" data-sveltekit-preload-data="hover">
    <div class="col-12 d-flex flex-wrap">
        <div class="card-img-left col-4" >
            <img src="{ imgSrc }" alt="{blog.Title}"/>
            <!-- <img src="{'$lib/img/listings/' +  listing.Title + '/' + listing.MLS + '-0.jpg'}" alt="{listing.Title}"/> -->
            <!-- <img src='../../lib/img/listings/${listing.Title}/${listing.MLS}-0.jpg' alt="temp"/> -->
            <!-- <img src='$lib/' alt="{listing.Caption0}"/> -->
        </div>
        <!-- <div class="card-img-top"></div> -->
        <div class="col-8 px-2 d-flex align-content-center justify-content-start flex-wrap px-3">
            <div class="col-12 d-flex justify-content-start card-title-container">
                <h5 class="card-title text-left py-1">{blog.Title}</h5>
            </div>
            <p class="blogDate col-12 text-start px-0">{blog.Date}</p>
            <p class="blogDescription col-12 text-left px-0">{blog.Sections[0].Content}</p>
            <a class="col-12 text-center" href={'./blog/' + blog.Title}>Read More</a>
        </div>
    </div>
</a>

<style>
    a {
        text-decoration: none;
        color: black;
    }
    a.col-3 {
        padding: 1rem;
    }

    .card {
        margin: 1rem;
    }
    .card-body {
        padding: 0;
    }

    .card-img-top {
        width: 100%;
        height: 15rem;
        padding: 0;
        background-size: cover;
        background-position: center;
        border-bottom: solid 4px #05c3f9;
        /* background-image: url({imgSrc}) */
    }
    .card-img-top > img, .card-img-left > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin: 0;
    }

    .card-img-left {
        aspect-ratio: 3/2;
        padding: 0;
        background-size: cover;
        background-position: center;
        /* background-image: url({imgSrc}) */
    }

    .card-section {
        border-top: #afadac solid 1px;
        padding-top: 1rem;
    }

    .card-section p {
        width: 50%;
    }

    .blogCard {
    padding: 0;
}

.blogCard:hover {
    /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); */
    cursor: pointer;
}

.blogCardBG {
    aspect-ratio: 1/1;
    background-position: center;
    background-size: cover;
    /* background-image: url('../img/blog/blog-1.jpeg'); */
}

.blogDate {
    color: #afadac;
}

.blogDescription {
    white-space: nowrap;
    padding: 0;
    overflow: hidden; 
    word-wrap: break-word;
    /* line-height: 1.5;
    max-height: 40px; */
    text-overflow: ellipsis;
    font-size: 14px;
}

    .card-title-container {
        border-bottom: solid 2px #05c3f9;
    }

</style>