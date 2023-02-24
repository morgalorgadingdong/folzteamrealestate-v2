import { c as create_ssr_component, l as each, v as validate_component } from "../../../chunks/index.js";
import { l as listings } from "../../../chunks/listings.js";
import { L as ListingCard } from "../../../chunks/ListingCard.js";
const ListingsContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"col-12 d-flex justify-content-between flex-wrap"}">${each(listings, (listing) => {
    return `${validate_component(ListingCard, "ListingCard").$$render($$result, { listing }, {}, {})}`;
  })}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"col-12 d-flex justify-content-center flex-wrap"}">
    <div class="${"content-container"}">${validate_component(ListingsContainer, "ListingsContainer").$$render($$result, {}, {}, {})}</div></section>`;
});
export {
  Page as default
};
