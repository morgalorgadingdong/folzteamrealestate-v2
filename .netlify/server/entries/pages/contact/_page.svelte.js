import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { C as ContactCard } from "../../../chunks/ContactCard.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section><div class="${"content-container d-flex justify-content-center flex-wrap center text-start px-3"}" id="${"reserveForm"}"><h2 class="${"col-12"}">Contact</h2>
        <div class="${"col-12 col-md-6"}"><p class="${"col-12"}">Phone: (503) 949-3087</p>
            <p class="${"col-12"}">Email: christinefolzre@gmail.com</p>
            <p class="${"col-12"}">Or you can use the form on this page and we&#39;ll get back to you within 24 hours!</p></div>
        
        <br>
        ${validate_component(ContactCard, "ContactCard").$$render($$result, {}, {}, {})}</div>
</section>`;
});
export {
  Page as default
};
