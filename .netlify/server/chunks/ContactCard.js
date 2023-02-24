import { c as create_ssr_component } from "./index.js";
const ContactCard_svelte_svelte_type_style_lang = "";
const css = {
  code: "#submissionForm.svelte-w7t81{max-width:600px}#submissionForm.svelte-w7t81{margin-bottom:25px}.fields.svelte-w7t81{width:100%}.field.svelte-w7t81{padding:10px 5px;width:100%}#name.svelte-w7t81{width:100%}#tel.svelte-w7t81,#email.svelte-w7t81{width:100%}#telContainer.svelte-w7t81,#emailContainer.svelte-w7t81{width:50%}#message.svelte-w7t81{width:100%}input.svelte-w7t81{width:100%;flex-grow:2;line-height:1.5rem}",
  map: null
};
const ContactCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<form id="${"submissionForm"}" class="${"d-flex justify-content-center flexWrap col-12 col-md-6 svelte-w7t81"}" name="${"netlify-form-example"}" method="${"POST"}" netlify-honeypot="${"bot-field"}" data-netlify="${"true"}"><input type="${"hidden"}" name="${"form-name"}" value="${"netlify-form-example"}" class="${"svelte-w7t81"}">
    <div class="${"fields d-flex justify-content-center flexWrap svelte-w7t81"}"><div class="${"field col-12 svelte-w7t81"}"><label for="${"name"}">Name</label>
            <input type="${"text"}" name="${"name"}" id="${"name"}" required class="${"svelte-w7t81"}"></div>
        <div id="${"emailContainer"}" class="${"field col-6 svelte-w7t81"}"><label for="${"email"}" class="${"col-12"}">Email</label><br>
            <input type="${"text"}" name="${"email"}" id="${"email"}" required class="${"svelte-w7t81"}"></div>
        <div id="${"telContainer"}" class="${"field col-6 svelte-w7t81"}"><label for="${"tel"}">Phone Number</label><br>
            <input type="${"tel"}" name="${"tel"}" id="${"tel"}" class="${"svelte-w7t81"}"></div>
        <div class="${"field svelte-w7t81"}"><label for="${"message"}">Message</label>
            <textarea name="${"message"}" id="${"message"}" rows="${"5"}" class="${"svelte-w7t81"}"></textarea></div></div>
    <ul class="${"actions col-12 d-flex justify-content-center px-0"}"><li><input type="${"submit"}" value="${"Submit"}" class="${"col-12 svelte-w7t81"}" id="${"submitbtn"}"></li></ul>
</form>`;
});
export {
  ContactCard as C
};
