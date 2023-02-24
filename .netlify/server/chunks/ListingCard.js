import { c as create_ssr_component, d as add_attribute, e as escape, o as null_to_empty } from "./index.js";
const ListingCard_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-1a2ye5t.svelte-1a2ye5t{text-decoration:none;color:black}a.svelte-1a2ye5t.svelte-1a2ye5t{padding:1rem}.card.svelte-1a2ye5t.svelte-1a2ye5t{margin:1rem}.card-body.svelte-1a2ye5t.svelte-1a2ye5t{padding:0}.card-img-top.svelte-1a2ye5t.svelte-1a2ye5t{width:100%;height:15rem;padding:0;background-size:cover;background-position:center}.card-img-top.svelte-1a2ye5t>img.svelte-1a2ye5t{width:100%;height:100%;object-fit:cover;margin:0}.card-section.svelte-1a2ye5t.svelte-1a2ye5t{border-top:#afadac solid 1px;padding-top:1rem}.card-section.svelte-1a2ye5t p.svelte-1a2ye5t{width:50%}.Active.svelte-1a2ye5t.svelte-1a2ye5t{color:#02cc7d}.Pending.svelte-1a2ye5t.svelte-1a2ye5t{color:orange}.Sold.svelte-1a2ye5t.svelte-1a2ye5t{color:#f84c6c}",
  map: null
};
const ListingCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { listing } = $$props;
  const slug = listing;
  let imgSrc = `./img/listings/${listing.Title}/${listing.MLS}-0.jpg`;
  if ($$props.listing === void 0 && $$bindings.listing && listing !== void 0)
    $$bindings.listing(listing);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  $$result.css.add(css);
  return `<a${add_attribute("href", "./listings/" + listing.Title, 0)} class="${"col-12 col-sm-6 col-lg-3 svelte-1a2ye5t"}"><div class="${"col-12 card mx-0 svelte-1a2ye5t"}"><div class="${"card-body svelte-1a2ye5t"}"><div class="${"card-img-top svelte-1a2ye5t"}"><img src="${escape(imgSrc, true) + " "}"${add_attribute("alt", listing.Title, 0)} class="${"svelte-1a2ye5t"}">
                
                
                </div>
            
            <h5 class="${"card-title"}">${escape(listing.Address)}</h5>
            <div class="${"card-section d-flex justify-content-between flex-wrap svelte-1a2ye5t"}"><p class="${"svelte-1a2ye5t"}">${escape(listing.SquareFootage)} sq ft</p>
                <p class="${"svelte-1a2ye5t"}">${escape(listing.Beds)} Bedrooms</p>
                <p class="${"svelte-1a2ye5t"}">${escape(listing.Baths)} Bathrooms</p>
                <p class="${"svelte-1a2ye5t"}">${escape(listing.MLS)} MLS</p></div>
            <div class="${"card-section d-flex justify-content-between flex-wrap svelte-1a2ye5t"}"><p class="${"svelte-1a2ye5t"}">Status: <b class="${escape(null_to_empty(listing.Status), true) + " svelte-1a2ye5t"}">${escape(listing.Status)}</b></p>
                <p class="${"svelte-1a2ye5t"}">${escape(listing.Price)}</p></div></div></div>
</a>`;
});
export {
  ListingCard as L
};
