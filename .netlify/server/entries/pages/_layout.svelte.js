import { c as create_ssr_component, b as subscribe, d as add_attribute, v as validate_component } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const logo = "/_app/immutable/assets/logo-7252c2f7.png";
const Header_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-1a402hb.svelte-1a402hb.svelte-1a402hb{box-shadow:0 3px 3px lightgray}.logo.svelte-1a402hb.svelte-1a402hb.svelte-1a402hb{height:40px}ul.svelte-1a402hb>a.svelte-1a402hb.svelte-1a402hb{border-bottom:solid 5px rgb(5, 195, 249, 0);border-top:solid 5px rgb(5, 195, 249, 0)}a[aria-current='page'].svelte-1a402hb.svelte-1a402hb.svelte-1a402hb{border-bottom:solid 5px rgb(5, 195, 249, 0.5)}a.mobile-menu-item[aria-current='page'].svelte-1a402hb>li.svelte-1a402hb.svelte-1a402hb{color:rgb(5, 195, 249, 1)}a.mobile-menu-item.svelte-1a402hb.svelte-1a402hb.svelte-1a402hb{border-bottom:none}ul.svelte-1a402hb>a.svelte-1a402hb>li.svelte-1a402hb{text-decoration:none;color:#3e3f3c;font-size:1.3rem;display:inline-block}nav.svelte-1a402hb>ul.svelte-1a402hb>a.svelte-1a402hb:hover{border-bottom:solid 5px rgb(5, 195, 249, 0.5);transition:width 0.5s ease;transition:background-color 1s ease}#mobileMenuToggle.svelte-1a402hb.svelte-1a402hb.svelte-1a402hb,#mobileMenuToggle.svelte-1a402hb input.svelte-1a402hb.svelte-1a402hb,#mobileMenuToggle.svelte-1a402hb a.svelte-1a402hb.svelte-1a402hb,#mobileMenuToggle.svelte-1a402hb input.svelte-1a402hb.svelte-1a402hb{display:none}@media screen and (max-width: 768px){#nonMobileMenu.svelte-1a402hb.svelte-1a402hb.svelte-1a402hb{display:none !important}#mobileMenuToggle.svelte-1a402hb.svelte-1a402hb.svelte-1a402hb{position:absolute;top:37px;left:10px;display:block;z-index:1;-webkit-user-select:none;user-select:none}#mobileMenuToggle.svelte-1a402hb a.svelte-1a402hb.svelte-1a402hb{text-decoration:none;color:#232323;transition:color 0.3s ease;display:block}#mobileMenuToggle.svelte-1a402hb input.svelte-1a402hb.svelte-1a402hb{display:block;width:40px;height:32px;position:absolute;top:-7px;left:-5px;cursor:pointer;opacity:0;z-index:3;-webkit-touch-callout:none}#mobileMenuToggle.svelte-1a402hb span.svelte-1a402hb.svelte-1a402hb{display:block;width:33px;height:4px;margin-bottom:5px;position:relative;border-radius:3px;z-index:2;transform-origin:4px 0px;transition:transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n                    background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n                    opacity 0.55s ease}#mobileMenuToggle.svelte-1a402hb span.svelte-1a402hb.svelte-1a402hb:first-child{transform-origin:0% 0%}#mobileMenuToggle.svelte-1a402hb span.svelte-1a402hb.svelte-1a402hb:nth-last-child(2){transform-origin:0% 100%}#mobileMenuToggle.svelte-1a402hb input.svelte-1a402hb:checked~span.svelte-1a402hb{opacity:1;transform:rotate(45deg) translate(-2px, -1px);background:#232323}#mobileMenuToggle.svelte-1a402hb input.svelte-1a402hb:checked~span.svelte-1a402hb:nth-last-child(3){opacity:0;transform:rotate(0deg) scale(0.2, 0.2)}#mobileMenuToggle.svelte-1a402hb input.svelte-1a402hb:checked~span.svelte-1a402hb:nth-last-child(2){transform:rotate(-45deg) translate(0, -1px)}#mobileMenu.svelte-1a402hb.svelte-1a402hb.svelte-1a402hb{position:absolute;width:300px;margin:-100px 0 0 -50px;padding:50px;padding-top:125px;background:rgb(255,255,255, .8);list-style-type:none;-webkit-font-smoothing:antialiased;transform-origin:0% 0%;transform:translate(-100%, 0);transition:transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);z-index:1}#mobileMenu.svelte-1a402hb li.svelte-1a402hb.svelte-1a402hb{padding:10px 0;font-size:22px;z-index:1;position:relative}#mobileMenuToggle.svelte-1a402hb input.svelte-1a402hb:checked~ul.svelte-1a402hb{transform:none}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<header class="${"col-12 d-flex justify-content-center svelte-1a402hb"}"><nav class="${"col-10 d-flex justify-content-center justify-content-md-between mt-0 svelte-1a402hb"}"><div id="${"mobileMenuToggle"}" class="${"svelte-1a402hb"}"><input id="${"mobileMenuToggler"}" type="${"checkbox"}" class="${"svelte-1a402hb"}">
            <span class="${"lightGray svelte-1a402hb"}"></span>
            <span class="${"lightGray svelte-1a402hb"}"></span>
            <span class="${"lightGray svelte-1a402hb"}"></span>
            <ul id="${"mobileMenu"}" class="${"svelte-1a402hb"}"><a class="${"mobile-menu-item svelte-1a402hb"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/listings") ? "page" : void 0,
    0
  )} href="${"/listings"}"><li class="${"svelte-1a402hb"}">Listings</li></a>
                <a class="${"mobile-menu-item svelte-1a402hb"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/about") ? "page" : void 0,
    0
  )} href="${"/about"}"><li class="${"svelte-1a402hb"}">About</li></a>
                <a class="${"mobile-menu-item svelte-1a402hb"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/blog") ? "page" : void 0,
    0
  )} href="${"/blog"}"><li class="${"svelte-1a402hb"}">Blog</li></a>
                <a class="${"mobile-menu-item svelte-1a402hb"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/join") ? "page" : void 0,
    0
  )} href="${"/join"}"><li class="${"svelte-1a402hb"}">Join</li></a>
                <a class="${"mobile-menu-item svelte-1a402hb"}"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/contact") ? "page" : void 0,
    0
  )} href="${"/contact"}"><li class="${"svelte-1a402hb"}">Contact</li></a></ul></div>
        <div class="${"col-2 d-sm-none"}"></div>
        <div class="${"d-flex justify-content-start align-items-center "}"><a href="${"/"}"><img${add_attribute("src", logo, 0)} alt="${"logo"}" class="${"logo svelte-1a402hb"}"></a></div>
        <ul class="${"d-flex justify-content-between col-6 my-0 svelte-1a402hb"}" id="${"nonMobileMenu"}"><a${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/listings") ? "page" : void 0,
    0
  )} class="${"flex-grow-1 text-center svelte-1a402hb"}" href="${"/listings"}"><li class="${"svelte-1a402hb"}">Listings</li></a>
            <a${add_attribute("aria-current", $page.url.pathname === "/about" ? "page" : void 0, 0)} class="${"flex-grow-1 text-center svelte-1a402hb"}" href="${"/about"}"><li class="${"svelte-1a402hb"}">About</li></a>
            <a${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/blog") ? "page" : void 0,
    0
  )} class="${"flex-grow-1 text-center svelte-1a402hb"}" href="${"/blog"}"><li class="${"svelte-1a402hb"}">Blog</li></a>
            <a${add_attribute("aria-current", $page.url.pathname === "/join" ? "page" : void 0, 0)} class="${"flex-grow-1 text-center svelte-1a402hb"}" href="${"/join"}"><li class="${"svelte-1a402hb"}">Join</li></a>
            <a${add_attribute("aria-current", $page.url.pathname === "/contact" ? "page" : void 0, 0)} class="${"flex-grow-1 text-center svelte-1a402hb"}" href="${"/contact"}"><li class="${"svelte-1a402hb"}">Contact</li></a></ul></nav>
</header>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="${"gray flexCenterV py-5"}"><div class="${"col-10 d-flex justify-content-center justify-content-sm-between center flex-wrap"}"><div class="${"col-8 col-sm-4 col-md-3 order-sm-2 mb-5 mb-sm-0"}"><img class="${"col-12"}" src="${"/img/real-broker-logo-whitetext.png"}" alt="${"REAL Brokers"}"></div>

        <div class="${"col-6 col-sm-3 flexLeft flexColumn flexCenterH whiteText flexWrap order-sm-1 "}"><p class="${"testimonialText"}">Folz Team Real Estate</p>
            <p class="${"testimonialText"}">christinefolzre@gmail.com</p>
            <p class="${"testimonialText"}">(503) 949-3087</p>
            <p class="${"testimonialText"}">2023</p></div>
        
        <div class="${"col-6 col-sm-3 justify-content-end justify-content-sm-around align-items-center align-content-sm-center flexCenterV order-sm-3"}"><i class="${"fa-brands fa-instagram whiteText footerSocial"}" onclick="${"location.href='https://www.instagram.com/folzteamrealestate/';"}" style="${"cursor: pointer;"}"></i>
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
