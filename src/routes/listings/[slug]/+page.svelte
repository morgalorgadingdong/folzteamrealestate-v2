<script>
	import { listings } from "../../listings";
    /**
	 * @type {{ slug: string; }}
	 */
     export let data;
    //  let images = []
    //  listings.forEach(listing => {
    //     if (listing.Title == data.slug) {
    //         let i = 0;
    //         while (i <= listing.Pics) {
    //             import img from '$lib/img/listings/' + listing.Title + '/' + listing.MLS + '-' + i + '.jpg'
    //             images.push(img)
    //         }

    //     }
    //  })

    let i = 0
    let j = [4, 4, 4, 3, 6, 3, 3, 3, 6, 6, 3, 3]
    let k = 0
    let thisListing
    listings.forEach(listing => {
        if (listing.Title == data.slug) {
            thisListing = listing
        }
    })
    let imgSrcBanner = `../img/listings/${thisListing.Title}/${thisListing.MLS}-0.jpg`;
    let imgSrc
    function returnColumnSize() {
        if (k >= j.length) {
            k = 0
        }
        let index = k;
        console.log(i, index)
        k++
        return j[index];
    }

    function renderPicture(listing) {
        imgSrc = `../img/listings/${listing.Title}/${listing.MLS}-${i}.jpg`;
        i++
        return imgSrc
    }
    console.log(data.slug)

</script>

<div>
    {#each listings as listing}
        {#if listing.Title == data.slug}
            <div class="individualListingBG flexCenterV">
                <img src = {imgSrcBanner} alt="banner" class="bannerImg" />
                <div class="listingTitleContainer oneHundo flexCenterH flexWrap">
                    <h1 class="listingTitle">{listing.Address}</h1>
                    <div class="listingSubTitleContainer d-flex justify-content-around col-12 col-lg-6 flex-wrap">
                        <p>{listing.SquareFootage} sq ft</p>
                        <div class="subTitleDivider">|</div>
                        <p>{listing.Beds} Bed</p>
                        <div class="subTitleDivider">|</div>
                        <p>{listing.Baths} Bath</p>
                        <div class="subTitleDivider">|</div>
                        <p>{listing.MLS} MLS</p>
                        <div class="subTitleDivider">|</div>
                        <p>{listing.Price}</p></div>
                        <div class="d-flex justify-content-center col-12 flex-wrap">
                            <p class="">Status: <b class="{listing.Status} ">{listing.Status}</b></p>
                        </div>
                    </div>
                </div>
            <div class="listingInfoContainer">
                <div class="row flexCenterV">
                    <h2>Details</h2>
                    <div class="line"></div>
                </div>
                <p id="details">{listing.Details}</p>
                <div class="row flexCenterV">
                    <h2>Features</h2>
                    <div class="line"></div>
                </div>
                <ul id="featuresContainer">
                    {#each listing.Features as feature}
                        <li><p class="bold blueText mx-1">✓ </p><p> {feature}</p></li>
                    {/each}
                </ul>
                <div class="row flexCenterV">
                    <h2>Photos</h2>
                    <div class="line"></div>
                </div>
                <div id="photosContainer" class="listingPhotosContainer flexLeft flexWrap">
                    {#if listing.Pics > 0}
                        {#each Array(listing.Pics) as pic}
                            <div class="col-12 col-md-6 col-lg-{returnColumnSize()} listingPhotoContainer">
                                <img src={renderPicture(listing)} alt="listing" class="listingPhoto" />
                            </div>
                        {/each}
                    {/if}
                </div>
                </div>
        {/if}
    {/each}
</div>
<section class="d-flex align-content-center justify-contet-center flex-wrap">
    <h3 class="col-12 text-center">Interested in seeing this property?</h3>
    <form id="submissionForm" class="" method="post" netlify>
        <div class="fields flexCenterH  flexWrap">
            <div class="field oneHundo">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" required/>
            </div>
            <div id="emailContainer" class="field fiddy">
                <label for="email" class="oneHundo">Email</label><br>
                <input type="text" name="email" id="email" required/>
            </div>
            <div id="telContainer" class="field fiddy">
                <label for="tel">Phone Number</label><br>
                <input type="tel" name="tel" id="tel"/>
            </div>
            <div class="field">
                <label for="message">Message</label>
                <textarea name="message" id="message" rows="5"></textarea>
            </div>
        </div>
        <ul class="actions oneHundo flexCenterH">
            <li><input type="submit" value="Submit" class="oneHundo" id="submitbtn"/></li>
        </ul>
    </form>
</section>

<style>
    .individualListingBG {
        background-color: black;
        height: 700px;
        min-height: 80vh;
        max-height: 95vh;
        /* background-position: center;
        background-repeat: no-repeat;
        background-size: cover; */
        position: relative;
        margin: auto;
        /* background-position: center; */
        z-index: 0;
    }

    .individualListingBG > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin: 0;
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
        opacity: 0.6;
        /* mask-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
        -webkit-mask-image: linear-gradient(rgba(0, 0, 0), rgba(0, 0, 0)); */
    }

.listingTitleContainer {
    margin: 0;
    color: white;
    padding: 50px 10px;
    text-align: center;
    height: fit-content;
    background-color: rgb(5, 195, 249,.3);
    z-index: 1;
}

.listingTitleContainer > h1 {
    margin: 0 0 20px 0;
    color: white;
    text-align: center;
    font-size: 2.5rem;
    font-weight: lighter;
    width: 100%;
}

.listingSubTitleContainer {
    min-width: 330px;
    max-width: 650px;
}

.listingSubTitleContainer > p {
    margin: 0;
    color: white;
    font-size: 1.1rem;
    text-align: center;
    font-weight: lighter;
}

.row {
    width: 90%;
    display: flex;
    margin: auto;
}

.listingInfoContainer > div > h2 {
    font-size: 2rem;
    width: max-content;
    margin: 0 30px 0 0;
}

/* #AFADAC */

.listingInfoContainer > p {
    padding: 15px 0;
    width: 90%;
    margin: auto;
}

.listingInfoContainer > ul {
    padding: 15px 0;
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

/* .listingInfoContainer > ul, .listingInfoContainer > p, .listingInfoContainer > .listingPhotosContainer {
    width: 90%;
    margin: auto;
} */

.listingInfoContainer > ul > li {
    margin: 0 0 15px 0;
    display: flex;
}

#featuresContainer {
    padding: 0;
}

#featuresContainer p {
    margin: auto;
}

button {
    border: none;
}

.listingPhotosContainer {
    overflow: hidden;
    width: 90%;
    margin: auto;
}

.listingPhotoContainer {
    height: 30vh;
    padding: 0.3rem;
}

.listingPhoto {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: 0;

  }

  .pageBreak {
      height: 4px;
      width: 90%;
      display: flex;
      margin-bottom: 15px;
  }

  .listingContactBar {
    width: 90%;
    height: fit-content;
    margin: 30px auto;
    /* background-color: rgb(5, 195, 249,.3); */
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