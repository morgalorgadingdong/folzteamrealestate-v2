import { c as create_ssr_component, l as each, v as validate_component, d as add_attribute, e as escape } from "../../../../chunks/index.js";
import { l as listings } from "../../../../chunks/listings.js";
import { C as ContactCard } from "../../../../chunks/ContactCard.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section#contact.svelte-1o26ok2.svelte-1o26ok2{min-height:0;height:fit-content}.individualListingBG.svelte-1o26ok2.svelte-1o26ok2{background-color:black;height:700px;min-height:80vh;max-height:95vh;position:relative;margin:auto;z-index:0}.individualListingBG.svelte-1o26ok2>img.svelte-1o26ok2{width:100%;height:100%;object-fit:cover;margin:0;position:absolute;left:0;top:0;z-index:-1;opacity:0.6}.listingTitleContainer.svelte-1o26ok2.svelte-1o26ok2{margin:0;color:white;padding:50px 10px;text-align:center;height:fit-content;background-color:rgb(5, 195, 249,.3);z-index:1}.listingTitleContainer.svelte-1o26ok2>h1.svelte-1o26ok2{margin:0 0 20px 0;color:white;text-align:center;font-size:2.5rem;font-weight:lighter;width:100%}.listingSubTitleContainer.svelte-1o26ok2.svelte-1o26ok2{min-width:330px;max-width:650px}.listingSubTitleContainer.svelte-1o26ok2>p.svelte-1o26ok2{margin:0;color:white;font-size:1.1rem;text-align:center;font-weight:lighter}.row.svelte-1o26ok2.svelte-1o26ok2{width:90%;display:flex;margin:auto}.listingInfoContainer.svelte-1o26ok2 h2.svelte-1o26ok2{font-size:2rem;width:max-content;margin:0 30px 0 0}#details.svelte-1o26ok2.svelte-1o26ok2{padding:15px 0;width:90%;margin:auto}.listingInfoContainer.svelte-1o26ok2 ul.svelte-1o26ok2{padding:15px 0;width:90%;margin:auto;display:flex;justify-content:space-between;flex-wrap:wrap}.listingInfoContainer.svelte-1o26ok2 ul li.svelte-1o26ok2{margin:0 0 15px 0;display:flex}#featuresContainer.svelte-1o26ok2.svelte-1o26ok2{padding:0}#featuresContainer.svelte-1o26ok2 p.svelte-1o26ok2{margin:auto}.listingPhotosContainer.svelte-1o26ok2.svelte-1o26ok2{overflow:hidden;width:90%;margin:auto}.listingPhotoContainer.svelte-1o26ok2.svelte-1o26ok2{height:30vh;padding:0.3rem}.listingPhoto.svelte-1o26ok2.svelte-1o26ok2{width:100%;height:100%;object-fit:cover;margin:0}.pageBreak.svelte-1o26ok2.svelte-1o26ok2{height:4px;width:90%;display:flex;margin-bottom:15px}.listingContactBar.svelte-1o26ok2.svelte-1o26ok2{width:90%;height:fit-content;margin:30px auto}.Active.svelte-1o26ok2.svelte-1o26ok2{color:#02cc7d}.Pending.svelte-1o26ok2.svelte-1o26ok2{color:orange}.Sold.svelte-1o26ok2.svelte-1o26ok2{color:#f84c6c}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let i = 0;
  let j = [4, 4, 4, 3, 6, 3, 3, 3, 6, 6, 3, 3];
  let k = 0;
  let thisListing;
  listings.forEach((listing) => {
    if (listing.Title == data.slug) {
      thisListing = listing;
    }
  });
  let imgSrcBanner = `../img/listings/${thisListing.Title}/${thisListing.MLS}-0.jpg`;
  let imgSrc;
  function returnColumnSize() {
    if (k >= j.length) {
      k = 0;
    }
    let index = k;
    console.log(i, index);
    k++;
    return j[index];
  }
  function renderPicture(listing) {
    imgSrc = `../img/listings/${listing.Title}/${listing.MLS}-${i}.jpg`;
    i++;
    return imgSrc;
  }
  console.log(data.slug);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div>${each(listings, (listing) => {
    return `${listing.Title == data.slug ? `<div class="${"individualListingBG flexCenterV svelte-1o26ok2"}"><img${add_attribute("src", imgSrcBanner, 0)} alt="${"banner"}" class="${"bannerImg svelte-1o26ok2"}">
                <div class="${"listingTitleContainer oneHundo flexCenterH flexWrap svelte-1o26ok2"}"><h1 class="${"listingTitle svelte-1o26ok2"}">${escape(listing.Address)}</h1>
                    <div class="${"listingSubTitleContainer d-flex justify-content-around col-12 col-lg-6 flex-wrap svelte-1o26ok2"}"><p class="${"svelte-1o26ok2"}">${escape(listing.SquareFootage)} sq ft</p>
                        <div class="${"subTitleDivider"}">|</div>
                        <p class="${"svelte-1o26ok2"}">${escape(listing.Beds)} Bed</p>
                        <div class="${"subTitleDivider"}">|</div>
                        <p class="${"svelte-1o26ok2"}">${escape(listing.Baths)} Bath</p>
                        <div class="${"subTitleDivider"}">|</div>
                        <p class="${"svelte-1o26ok2"}">${escape(listing.MLS)} MLS</p>
                        <div class="${"subTitleDivider"}">|</div>
                        <p class="${"svelte-1o26ok2"}">${escape(listing.Price)}</p></div>
                        <div class="${"d-flex justify-content-center col-12 flex-wrap"}"><p class="${""}">Status: <b class="${escape(listing.Status, true) + " svelte-1o26ok2"}">${escape(listing.Status)}</b></p></div>
                    </div></div>
            <section class="${"listingInfoContainer svelte-1o26ok2"}"><div class="${"content-container text-start"}"><div class="${"row flexCenterV svelte-1o26ok2"}"><h2 class="${"svelte-1o26ok2"}">Details</h2>
                    <div class="${"line"}"></div></div>
                <p id="${"details"}" class="${"svelte-1o26ok2"}">${escape(listing.Details)}</p>
                <div class="${"row flexCenterV svelte-1o26ok2"}"><h2 class="${"svelte-1o26ok2"}">Features</h2>
                    <div class="${"line"}"></div></div>
                <ul id="${"featuresContainer"}" class="${"svelte-1o26ok2"}">${each(listing.Features, (feature) => {
      return `<li class="${"svelte-1o26ok2"}"><p class="${"bold blueText mx-1 svelte-1o26ok2"}">✓ </p><p class="${"svelte-1o26ok2"}">${escape(feature)}</p></li>`;
    })}</ul>
                <div class="${"row flexCenterV svelte-1o26ok2"}"><h2 class="${"svelte-1o26ok2"}">Photos</h2>
                    <div class="${"line"}"></div></div>
                <div id="${"photosContainer"}" class="${"listingPhotosContainer flexLeft flexWrap svelte-1o26ok2"}">${listing.Pics > 0 ? `${each(Array(listing.Pics), (pic) => {
      return `<div class="${"col-12 col-md-6 col-lg-" + escape(returnColumnSize(), true) + " listingPhotoContainer svelte-1o26ok2"}"><img${add_attribute("src", renderPicture(listing), 0)} alt="${"listing"}" class="${"listingPhoto svelte-1o26ok2"}">
                            </div>`;
    })}` : ``}
                </div></div>
            </section>` : ``}`;
  })}</div>
<section id="${"contact"}" class="${"d-flex align-content-center justify-contet-center flex-wrap svelte-1o26ok2"}"><div class="${"content-container inViewport py-5 d-flex justify-content-center flex-wrap"}"><h3 class="${"col-12 text-center pt-3"}">Interested in seeing this property?</h3>
        <p class="${"col-12"}">(503) 949-3087</p>
        <p class="${"col-12"}">christinefolzre@gmail.com</p>
        ${validate_component(ContactCard, "ContactCard").$$render($$result, {}, {}, {})}</div>

</section>`;
});
export {
  Page as default
};
