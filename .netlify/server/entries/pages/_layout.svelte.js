import { c as create_ssr_component, b as subscribe, d as add_attribute, v as validate_component } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const logo = "/_app/immutable/assets/logo-7252c2f7.png";
const Header_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-9m66uj.svelte-9m66uj.svelte-9m66uj{box-shadow:0 3px 3px lightgray}.logo.svelte-9m66uj.svelte-9m66uj.svelte-9m66uj{height:40px}ul.svelte-9m66uj>a.svelte-9m66uj.svelte-9m66uj{border-bottom:solid 5px rgb(5, 195, 249, 0);border-top:solid 5px rgb(5, 195, 249, 0)}a[aria-current='page'].svelte-9m66uj.svelte-9m66uj.svelte-9m66uj{border-bottom:solid 5px rgb(5, 195, 249, 0.5)}a.mobile-menu-item[aria-current='page'].svelte-9m66uj>li.svelte-9m66uj.svelte-9m66uj{color:rgb(5, 195, 249, 1)}a.mobile-menu-item.svelte-9m66uj.svelte-9m66uj.svelte-9m66uj{border-bottom:none}ul.svelte-9m66uj>a.svelte-9m66uj>li.svelte-9m66uj{text-decoration:none;color:#3e3f3c;font-size:1.3rem;display:inline-block}nav.svelte-9m66uj>ul.svelte-9m66uj>a.svelte-9m66uj:hover{border-bottom:solid 5px rgb(5, 195, 249, 0.5);transition:width 0.5s ease;transition:background-color 1s ease}#mobileMenuToggle.svelte-9m66uj.svelte-9m66uj.svelte-9m66uj,#mobileMenuToggle.svelte-9m66uj input.svelte-9m66uj.svelte-9m66uj,#mobileMenuToggle.svelte-9m66uj a.svelte-9m66uj.svelte-9m66uj,#mobileMenuToggle.svelte-9m66uj input.svelte-9m66uj.svelte-9m66uj{display:none}@media screen and (max-width: 768px){#nonMobileMenu.svelte-9m66uj.svelte-9m66uj.svelte-9m66uj{display:none !important}#mobileMenuToggle.svelte-9m66uj.svelte-9m66uj.svelte-9m66uj{position:absolute;top:37px;left:10px;display:block;z-index:1;-webkit-user-select:none;user-select:none}#mobileMenuToggle.svelte-9m66uj a.svelte-9m66uj.svelte-9m66uj{text-decoration:none;color:#232323;transition:color 0.3s ease;display:block}#mobileMenuToggle.svelte-9m66uj input.svelte-9m66uj.svelte-9m66uj{display:block;width:40px;height:32px;position:absolute;top:-7px;left:-5px;cursor:pointer;opacity:0;z-index:3;-webkit-touch-callout:none}#mobileMenuToggle.svelte-9m66uj span.svelte-9m66uj.svelte-9m66uj{display:block;width:33px;height:4px;margin-bottom:5px;position:relative;border-radius:3px;z-index:2;transform-origin:4px 0px;transition:transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n                opacity 0.55s ease}#mobileMenuToggle.svelte-9m66uj span.svelte-9m66uj.svelte-9m66uj:first-child{transform-origin:0% 0%}#mobileMenuToggle.svelte-9m66uj span.svelte-9m66uj.svelte-9m66uj:nth-last-child(2){transform-origin:0% 100%}#mobileMenuToggle.svelte-9m66uj input.svelte-9m66uj:checked~span.svelte-9m66uj{opacity:1;transform:rotate(45deg) translate(-2px, -1px);background:#232323}#mobileMenuToggle.svelte-9m66uj input.svelte-9m66uj:checked~span.svelte-9m66uj:nth-last-child(3){opacity:0;transform:rotate(0deg) scale(0.2, 0.2)}#mobileMenuToggle.svelte-9m66uj input.svelte-9m66uj:checked~span.svelte-9m66uj:nth-last-child(2){transform:rotate(-45deg) translate(0, -1px)}#mobileMenu.svelte-9m66uj.svelte-9m66uj.svelte-9m66uj{position:absolute;width:300px;margin:-100px 0 0 -50px;padding:50px;padding-top:125px;background:rgb(255,255,255, .8);list-style-type:none;-webkit-font-smoothing:antialiased;transform-origin:0% 0%;transform:translate(-100%, 0);transition:transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);z-index:1}#mobileMenu.svelte-9m66uj li.svelte-9m66uj.svelte-9m66uj{padding:10px 0;font-size:22px;z-index:1;position:relative}#mobileMenuToggle.svelte-9m66uj input.svelte-9m66uj:checked~ul.svelte-9m66uj{transform:none}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<header class="${"col-12 d-flex justify-content-center svelte-9m66uj"}"><nav class="${"col-10 d-flex justify-content-center justify-content-md-between mt-0 svelte-9m66uj"}"><div id="${"mobileMenuToggle"}" class="${"svelte-9m66uj"}"><input id="${"mobileMenuToggler"}" type="${"checkbox"}" class="${"svelte-9m66uj"}">
            <span class="${"lightGray svelte-9m66uj"}"></span>
            <span class="${"lightGray svelte-9m66uj"}"></span>
            <span class="${"lightGray svelte-9m66uj"}"></span>
            <ul id="${"mobileMenu"}" class="${"svelte-9m66uj"}"><a class="${"mobile-menu-item svelte-9m66uj"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/listings") ? "page" : void 0,
    0
  )} href="${"/listings"}"><li class="${"svelte-9m66uj"}">Listings</li></a>
                <a class="${"mobile-menu-item svelte-9m66uj"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/about") ? "page" : void 0,
    0
  )} href="${"/about"}"><li class="${"svelte-9m66uj"}">About</li></a>
                <a class="${"mobile-menu-item svelte-9m66uj"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/blog") ? "page" : void 0,
    0
  )} href="${"/blog"}"><li class="${"svelte-9m66uj"}">Blog</li></a>
                <a class="${"mobile-menu-item svelte-9m66uj"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/join") ? "page" : void 0,
    0
  )} href="${"/join"}"><li class="${"svelte-9m66uj"}">Join</li></a>
                <a class="${"mobile-menu-item svelte-9m66uj"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/contact") ? "page" : void 0,
    0
  )} href="${"/contact"}"><li class="${"svelte-9m66uj"}">Contact</li></a></ul></div>
        <div class="${"col-2 d-sm-none"}"></div>
        <div class="${"d-flex justify-content-start align-items-center "}"><a href="${"/"}"><img${add_attribute("src", logo, 0)} alt="${"logo"}" class="${"logo svelte-9m66uj"}"></a></div>
        <ul class="${"d-flex justify-content-between col-6 my-0 svelte-9m66uj"}" id="${"nonMobileMenu"}"><a${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/listings") ? "page" : void 0,
    0
  )} class="${"flex-grow-1 text-center svelte-9m66uj"}" href="${"/listings"}"><li class="${"svelte-9m66uj"}">Listings</li></a>
            <a${add_attribute("aria-current", $page.url.pathname === "/about" ? "page" : void 0, 0)} class="${"flex-grow-1 text-center svelte-9m66uj"}" href="${"/about"}"><li class="${"svelte-9m66uj"}">About</li></a>
            <a${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/blog") ? "page" : void 0,
    0
  )} class="${"flex-grow-1 text-center svelte-9m66uj"}" href="${"/blog"}"><li class="${"svelte-9m66uj"}">Blog</li></a>
            <a${add_attribute("aria-current", $page.url.pathname === "/join" ? "page" : void 0, 0)} class="${"flex-grow-1 text-center svelte-9m66uj"}" href="${"/join"}"><li class="${"svelte-9m66uj"}">Join</li></a>
            <a${add_attribute("aria-current", $page.url.pathname === "/contact" ? "page" : void 0, 0)} class="${"flex-grow-1 text-center svelte-9m66uj"}" href="${"/contact"}"><li class="${"svelte-9m66uj"}">Contact</li></a></ul></nav>
</header>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="${"gray flexCenterV"}"><div class="${"flexCenterH ninety center flexSpaceBetweenH"}"><div class="${"flexLeft flexColumn flexCenterH whiteText flexWrap"}"><p class="${"testimonialText"}">Folz Team Real Estate</p>
            <p class="${"testimonialText"}">2023</p></div>
        <div class="${"flexRight flexCenterV flexSpaceAroundH"}"><i class="${"fa-brands fa-instagram whiteText footerSocial"}" onclick="${"location.href='https://www.instagram.com/folzteamrealestate/';"}" style="${"cursor: pointer;"}"></i>
            <i class="${"fa-brands fa-facebook whiteText footerSocial"}" onclick="${"location.href='https://www.facebook.com/folzteamrealestate/';"}" style="${"cursor: pointer;"}"></i>
            <i class="${"fa-solid fa-envelope whiteText footerSocial"}" onclick="${"location.href='/contact';"}" style="${"cursor: pointer;"}"></i></div></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"app"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	<main>${slots.default ? slots.default({}) : ``}</main>

    ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
