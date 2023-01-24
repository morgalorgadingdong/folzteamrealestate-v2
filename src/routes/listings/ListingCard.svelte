<script>
    /**
	 * @type {{ Title: string; Address: any; SquareFootage: any; Beds: any; Baths: any; MLS: any; Status: any; Price: any; }}
	 */
    export let listing;
    export const slug = listing;
    let imgSrc = `./img/listings/${listing.Title}/${listing.MLS}-0.jpg`;
    // console.log(imgSrc)
    // import listingIMG from imgURL;
</script>


<a href={'./listings/' + listing.Title} class="col-3">
    <div class="col-12 card">
        <div class="card-body">
            <div class="card-img-top" >
                <img src="{ imgSrc } " alt="{listing.Title}"/>
                <!-- <img src="{'$lib/img/listings/' +  listing.Title + '/' + listing.MLS + '-0.jpg'}" alt="{listing.Title}"/> -->
                <!-- <img src='../../lib/img/listings/${listing.Title}/${listing.MLS}-0.jpg' alt="temp"/> -->
                <!-- <img src='$lib/' alt="{listing.Caption0}"/> -->
            </div>
            <!-- <div class="card-img-top"></div> -->
            <h5 class="card-title">{listing.Address}</h5>
            <div class="card-section d-flex justify-content-between flex-wrap">
                <p>{listing.SquareFootage} sq ft</p>
                <p>{listing.Beds} Bedrooms</p>
                <p>{listing.Baths} Bathrooms</p>
                <p>{listing.MLS} MLS</p>
            </div>
            <div class="card-section d-flex justify-content-between flex-wrap">
                <p>Status: <b class="{listing.Status}">{listing.Status}</b></p>
                <p>{listing.Price}</p>
            </div>
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
        /* background-image: url({imgSrc}) */
    }
    .card-img-top > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin: 0;
    }

    .card-section {
        border-top: #afadac solid 1px;
        padding-top: 1rem;
    }

    .card-section p {
        width: 50%;
    }

    .Active {
        color: #02cc7d;
    }
    .Pending {
        color: orange;
    }
    .Sold {
        color: #f84c6c;
    }
</style>