import { c as create_ssr_component, f as compute_rest_props, h as createEventDispatcher, i as spread, j as escape_attribute_value, k as escape_object, d as add_attribute, v as validate_component, l as each, e as escape } from "../../chunks/index.js";
import { l as listings } from "../../chunks/listings.js";
import { L as ListingCard } from "../../chunks/ListingCard.js";
const about = "/_app/immutable/assets/about-home-page-9ca28968.jpg";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function forOwn(object, iteratee) {
  if (object) {
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (key !== "__proto__") {
        if (iteratee(object[key], key) === false) {
          break;
        }
      }
    }
  }
  return object;
}
function isObject(subject) {
  return subject !== null && typeof subject === "object";
}
function isEqualDeep(subject1, subject2) {
  if (Array.isArray(subject1) && Array.isArray(subject2)) {
    return subject1.length === subject2.length && !subject1.some((elm, index) => !isEqualDeep(elm, subject2[index]));
  }
  if (isObject(subject1) && isObject(subject2)) {
    const keys1 = Object.keys(subject1);
    const keys2 = Object.keys(subject2);
    return keys1.length === keys2.length && !keys1.some((key) => {
      return !Object.prototype.hasOwnProperty.call(subject2, key) || !isEqualDeep(subject1[key], subject2[key]);
    });
  }
  return subject1 === subject2;
}
function merge(object, source) {
  const merged = object;
  forOwn(source, (value, key) => {
    if (Array.isArray(value)) {
      merged[key] = value.slice();
    } else if (isObject(value)) {
      merged[key] = merge(isObject(merged[key]) ? merged[key] : {}, value);
    } else {
      merged[key] = value;
    }
  });
  return merged;
}
function slice(arrayLike, start, end) {
  return Array.prototype.slice.call(arrayLike, start, end);
}
function apply(func) {
  return func.bind.apply(func, [null].concat(slice(arguments, 1)));
}
function typeOf(type, subject) {
  return typeof subject === type;
}
apply(typeOf, "function");
apply(typeOf, "string");
apply(typeOf, "undefined");
const Splide_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "options", "splide", "extensions", "transition", "hasTrack", "go", "sync"]);
  let { class: className = void 0 } = $$props;
  let { options = {} } = $$props;
  let { splide = void 0 } = $$props;
  let { extensions = void 0 } = $$props;
  let { transition = void 0 } = $$props;
  let { hasTrack = true } = $$props;
  createEventDispatcher();
  let root;
  let prevOptions = merge({}, options);
  function go(control) {
    splide?.go(control);
  }
  function sync(target) {
    splide?.sync(target);
  }
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.splide === void 0 && $$bindings.splide && splide !== void 0)
    $$bindings.splide(splide);
  if ($$props.extensions === void 0 && $$bindings.extensions && extensions !== void 0)
    $$bindings.extensions(extensions);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.hasTrack === void 0 && $$bindings.hasTrack && hasTrack !== void 0)
    $$bindings.hasTrack(hasTrack);
  if ($$props.go === void 0 && $$bindings.go && go !== void 0)
    $$bindings.go(go);
  if ($$props.sync === void 0 && $$bindings.sync && sync !== void 0)
    $$bindings.sync(sync);
  {
    if (splide && !isEqualDeep(prevOptions, options)) {
      splide.options = options;
      prevOptions = merge({}, prevOptions);
    }
  }
  return `

<div${spread(
    [
      {
        class: escape_attribute_value(classNames("splide", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", root, 0)}>${hasTrack ? `${validate_component(SplideTrack, "SplideTrack").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : `${slots.default ? slots.default({}) : ``}`}</div>`;
});
const SplideTrack = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classNames("splide__track", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}><ul class="${"splide__list"}">${slots.default ? slots.default({}) : ``}</ul></div>`;
});
const SplideSlide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<li${spread(
    [
      {
        class: escape_attribute_value(classNames("splide__slide", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</li>`;
});
const splide_min = "";
const FeaturedListingsContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div id="${"listingsContainer"}" class="${"col-12 d-none d-sm-flex justify-content-between flex-wrap"}">${each(listings, (listing) => {
    return `${listing.FeaturedListing ? `${validate_component(ListingCard, "ListingCard").$$render($$result, { listing }, {}, {})}` : ``}`;
  })}</div>`;
});
const FeaturedListingsContainerMobile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div id="${"listingsContainer"}" class="${"col-12 d-block d-sm-none justify-content-between flex-wrap"}">${validate_component(Splide_1, "Splide").$$render(
    $$result,
    {
      "aria-label": "Client Testimonials",
      class: "z-reset",
      hasTrack: false,
      options: {
        type: "loop",
        perPage: 2.5,
        breakpoints: { 576: { perPage: 1 } },
        focus: "center",
        drag: "free",
        snap: true
      }
    },
    {},
    {
      default: () => {
        return `${validate_component(SplideTrack, "SplideTrack").$$render($$result, {}, {}, {
          default: () => {
            return `${each(listings, (listing) => {
              return `${listing.FeaturedListing ? `${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "my-3 mt-0" }, {}, {
                default: () => {
                  return `${validate_component(ListingCard, "ListingCard").$$render($$result, { listing }, {}, {})}
                `;
                }
              })}` : ``}`;
            })}`;
          }
        })}

        <div class="${"splide__arrows"}"><button class="${"splide__arrow splide__arrow--prev"}"><i class="${"fa-solid fa-caret-left"}"></i></button>
            <button class="${"splide__arrow splide__arrow--next"}"><i class="${"fa-solid fa-caret-right"}"></i></button></div>`;
      }
    }
  )}</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#heroIMG.svelte-two6uy.svelte-two6uy{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('$lib/img/hero.jpg');background-size:cover;background-position:center;background-repeat:no-repeat;height:85vh;width:100%;display:flex;justify-content:center;align-items:center}.heroText.svelte-two6uy.svelte-two6uy{font-size:1.2rem;text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);color:white;background:rgba(175, 173, 172, 0.6);padding:10px}#quote.svelte-two6uy.svelte-two6uy{color:black}#quoteSection.svelte-two6uy b.svelte-two6uy{color:#05c3f9;font-weight:700}#whatOurClientsSay.svelte-two6uy h2.svelte-two6uy{color:black}#theMarketAtAGlance.svelte-two6uy.svelte-two6uy{color:white;background-image:linear-gradient(\n      rgba(175, 173, 172, 0.5),\n      rgba(0, 0, 0, 0.5)\n    ),\n    url('$lib/img/market-at-a-glance.jpg');background-position:center;background-repeat:no-repeat;background-size:cover;position:relative;margin:auto;background-attachment:fixed;background-position:center;z-index:1}.maagItem.svelte-two6uy .fa-arrow-down.svelte-two6uy{color:#f84c6c}.maagItem.svelte-two6uy .fa-arrow-up.svelte-two6uy{color:#02cc7d}#aboutUsSection.svelte-two6uy>div.svelte-two6uy{min-height:80vh}",
  map: null
};
let title = "Folz Team Real Estate";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let keywords = `Salem, Oregon Real Estate, Willamette Valley Real Estate, Salem real estate experts, Salem real estate agents, Homes for sale in Salem`;
  let description = `Folz Team Real Estate, Salem Oregon's most trusted real estate team. We are a full service real estate team that specializes in residential, commercial, and investment properties. We are a team of 8 agents that are here to help you with all of your real estate needs.`;
  $$result.css.add(css);
  return `<svelt:head><title>${escape(title)}</title>
    <meta name="${"description"}"${add_attribute("content", description, 0)}>
    <meta name="${"keywords"}"${add_attribute("content", keywords, 0)}></svelt:head>
<section id="${"heroIMG"}" class="${"my-0 svelte-two6uy"}"><div class="${"heroText col-12 col-md-10 col-lg-6 svelte-two6uy"}"><h1>The Willamette Valley&#39;s most trusted Real Estate Team.</h1></div></section>

<section id="${"featuredListings"}" class="${"contentSection inViewport pb-5"}"><h2>Featured Listings</h2>
    ${validate_component(FeaturedListingsContainerMobile, "FeaturedListingsContainerMobile").$$render($$result, {}, {}, {})}
    <div class="${"content-container"}">${validate_component(FeaturedListingsContainer, "FeaturedListingsContainer").$$render($$result, {}, {}, {})}
    
        <div class="${"col-12 center flexCenterH flexSpaceAroundH"}"><a href="${"/listings"}"><button class="${"button"}">See All Listings</button></a></div></div></section>

<section id="${"whatOurClientsSay"}" class="${"backgroundIMG2 inViewport svelte-two6uy"}"><div class="${"py-5"}"><h2 class="${"svelte-two6uy"}">What our Clients Say</h2>
        ${validate_component(Splide_1, "Splide").$$render(
    $$result,
    {
      "aria-label": "Client Testimonials",
      class: "z-reset",
      hasTrack: false,
      options: {
        type: "loop",
        perPage: 2.5,
        breakpoints: {
          768: { perPage: 1.5 },
          576: { perPage: 1 }
        },
        focus: "center",
        drag: "free",
        snap: true
      }
    },
    {},
    {
      default: () => {
        return `${validate_component(SplideTrack, "SplideTrack").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "my-3 mt-0" }, {}, {
              default: () => {
                return `<div class="${"flexCenterH flexColumn testimonialContainer card"}"><i class="${"fa-solid fa-quote-left"}"></i>
                        <i class="${"fa-solid fa-quote-right"}"></i>
                        <p class="${"onehundo testimonialTextLong"}">&quot;We could not have been happier with our experience working with Christine. Not only is Christine skilled and strategic regarding timing and price, but she advised on staging and updates that would make the most of our efforts. She was always available for questions, recommendations, or ideas and responded quickly. We had offers our first day on the market and ended up accepting well over our asking price... We definitely would not trust anyone else with our future real estate needs!&quot;</p>
                        <p class="${"onehundo testimonialTextAbbr"}">&quot;We could not have been happier with our experience working with Christine. Not only is Christine skilled and strategic regarding timing and price, but she advised on staging and updates that would make the most of our efforts. She was always available for questions, recommendations, or ideas and responded quickly… We definitely would not trust anyone else with our future real estate needs!&quot;</p>
                        <br>
                        <p class="${"onehundo testimonialText"}">Heather, Salem</p></div>`;
              }
            })}
                ${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "my-3 mt-0" }, {}, {
              default: () => {
                return `<div class="${"flexCenterH flexColumn testimonialContainer card"}"><i class="${"fa-solid fa-quote-left"}"></i>
                        <i class="${"fa-solid fa-quote-right"}"></i>
                        <p class="${"onehundo testimonialTextLong"}">&quot;I have done two real estate transactions with Christine and she has been fantastic both times. She is knowledgeable about the local market, including price trends in various neighborhoods. She has an eye for style and made great recommendations for painting, flooring, etc. which helped us a get a quick sale. Most important of all, she was always very responsive to our needs, whether by phone, email, or text. She is very highly recommended and is my go-to broker in the Salem-Keizer area.&quot;</p>
                        <p class="${"onehundo testimonialTextAbbr"}">&quot;I have done two real estate transactions with Christine and she has been fantastic both times. She is knowledgeable about the local market, including price trends in various neighborhoods. She has an eye for style and made great recommendations for painting, flooring, etc… She is very highly recommended and is my go-to broker in the Salem-Keizer area.&quot;</p>
                        <br>
                        <p class="${"testimonialText"}">Devon, Keizer</p></div>`;
              }
            })}
                ${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "my-3 mt-0" }, {}, {
              default: () => {
                return `<div class="${"flexCenterH flexColumn testimonialContainer card"}"><i class="${"fa-solid fa-quote-left"}"></i>
                        <i class="${"fa-solid fa-quote-right"}"></i>
                        <p class="${"onehundo testimonialTextLong"}">&quot;Working with Evan was easy, fun, and extremely successful. We were first time home buyers that peppered Evan with questions ranging from details on particular houses to the process as a whole, all of which he patiently and thoroughly answered. Evan was always prepared and on time, if not early, for our appointments, and he readily accommodated our work schedules by meeting in the evening and over the weekend. He was present at every stage and gave us useful guidance on key decisions like the offer letter and outcomes of the home inspection. It&#39;s hard to overstate his response time to questions sent via voicemail, email, or text. Twice, we were the first party to tour a listing. We met Evan on a Wednesday and were submitting an offer the following Monday on the house we now call home.&quot;</p>
                        <p class="${"onehundo testimonialTextAbbr"}">&quot;Working with Evan was easy, fun, and extremely successful. We were first time home buyers that peppered Evan with questions ranging from details on particular houses to the process as a whole, all of which he patiently and thoroughly answered... We met Evan on a Wednesday and were submitting an offer the following Monday on the house we now call home.&quot;</p>
                        <br>
                        <p class="${"testimonialText"}">Anonymous Zillow User, Salem</p></div>`;
              }
            })}
                ${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "my-3 mt-0" }, {}, {
              default: () => {
                return `<div class="${"flexCenterH flexColumn testimonialContainer card"}"><i class="${"fa-solid fa-quote-left"}"></i>
                        <i class="${"fa-solid fa-quote-right"}"></i>
                        <p class="${"onehundo testimonialTextLong"}">&quot;Christine is the professional&#39;s professional. Excellent understanding of the market, solid marketing and sales efforts, trustworthy advice and expert at closing. Her communication skills are also superb, call backs within just a few minutes. We highly recommend Christine for any real estate need.&quot;</p>
                        <p class="${"onehundo testimonialTextAbbr"}">&quot;Christine is the professional&#39;s professional. Excellent understanding of the market, solid marketing and sales efforts, trustworthy advice and expert at closing. Her communication skills are also superb, call backs within just a few minutes. We highly recommend Christine for any real estate need.&quot;</p>
                        <br>
                        <p class="${"testimonialText"}">Anonymous Zillow User, Dallas</p></div>`;
              }
            })}
                ${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "my-3 mt-0" }, {}, {
              default: () => {
                return `<div class="${"flexCenterH flexColumn testimonialContainer card"}"><i class="${"fa-solid fa-quote-left"}"></i>
                        <i class="${"fa-solid fa-quote-right"}"></i>
                        <p class="${"onehundo testimonialTextLong"}">&quot;Christine was OUTSTANDING and so easy to work with! She did a great job helping us find the perfect home. She was extremely knowledgeable and super forthcoming with information. Christine digs into homes for you, getting the entire scoop and history... it meant so much that she went above and beyond for us.&quot;</p>
                        <p class="${"onehundo testimonialTextAbbr"}">&quot;Christine was OUTSTANDING and so easy to work with! She did a great job helping us find the perfect home. She was extremely knowledgeable and super forthcoming with information… It meant so much that she went above and beyond for us.&quot;</p>
                        <br>
                        <p class="${"onehundo testimonialText"}">Anonymous Zillow User, Salem</p></div>`;
              }
            })}`;
          }
        })}
            
            <div class="${"splide__arrows"}">
                <button class="${"splide__arrow splide__arrow--prev"}"><i class="${"fa-solid fa-caret-left"}"></i></button>
                <button class="${"splide__arrow splide__arrow--next"}"><i class="${"fa-solid fa-caret-right"}"></i></button></div>`;
      }
    }
  )}
            
        <br>
        <div class="${"col-12 center flexCenterH flexSpaceAroundH"}"><a href="${"https://www.zillow.com/profile/Christinefolz"}" target="${"_blank"}" rel="${"noreferrer"}"><button id="${"reviewsButton"}" class="${"button"}">See More Reviews On Zillow</button></a></div></div></section>

<div id="${"quoteSection"}" class="${"d-flex justify-content-center align-items-center flex-wrap svelte-two6uy"}"><div class="${"content-container d-flex justify-content-center align-items-center flex-wrap text-center"}">
        <h2 class="${"col-12 py-0 svelte-two6uy"}" id="${"quote"}">Work Hard. <b class="${"svelte-two6uy"}">Be Kind.</b></h2>
        
        </div></div>

<section id="${"theMarketAtAGlance"}" class="${"my-0 d-flex flex-wrap align-content-center svelte-two6uy"}"><div class="${"backgroundIMGContent1 content-section"}"><h2 class="${"whiteText"}">The Willamette Valley Market at a Glance</h2>
    <p class="${"sectionSubHeader"}">For the Month of January, 2023</p>
    <br>
    <div class="${"flexContainer flexLeft flexWrap flexSpaceAroundH col-11 center"}"><div class="${"col-6 col-md-3 maagItem svelte-two6uy"}"><i class="${"fa-solid fa-money-bill-1-wave iconHeader"}"></i>
            <h3 class="${"whiteText"}">Median Sales price</h3>
            <p class="${"maagValue"}">$404,529</p>
            <p><i class="${"fa-solid fa-arrow-up svelte-two6uy"}"></i> 1.1% from last month</p></div>
        <div class="${"col-6 col-md-3 maagItem svelte-two6uy"}"><i class="${"fa-solid fa-border-all iconHeader"}"></i>
            <h3 class="${"whiteText"}">Median Sales Price Per Square Foot</h3>
            <p class="${"maagValue"}">$263</p>
            <p><i class="${"fa-solid fa-arrow-up svelte-two6uy"}"></i> 3.3% from last month</p></div>
        <div class="${"col-6 col-md-3 maagItem svelte-two6uy"}"><i class="${"fa-solid fa-handshake iconHeader"}"></i>
            <h3 class="${"whiteText"}">Number of Closed Sales</h3>
            <p class="${"maagValue"}">252</p>
            <p><i class="${"fa-solid fa-arrow-down svelte-two6uy"}"></i> 46.7% from last month</p></div>
        <div class="${"col-6 col-md-3 maagItem svelte-two6uy"}"><i class="${"fa-solid fa-clock iconHeader"}"></i>
            <h3 class="${"whiteText"}">Median Days on the Market</h3>
            <p class="${"maagValue"}">86</p>
            <p><i class="${"fa-solid fa-arrow-up svelte-two6uy"}"></i> 78.1% from last month</p></div></div></div></section>

<section id="${"aboutUsSection"}" class="${"inViewport col-12 my-0 svelte-two6uy"}"><div class="${"col-12 d-flex justify-content-center align-items-center flex-wrap mb-5 svelte-two6uy"}"><div class="${"col-11 col-xl-10 d-flex justify-content-center justify-content-md-between align-items-center flex-wrap"}"><h2 class="${"col-12"}">About Us</h2>
            <div id="${"aboutTextContainer"}" class="${"textLeft col-12 col-md-6 d-flex justify-content-between align-items-center flex-wrap mx-0 px-4 order-1"}"><p>We are a small team of Real Estate Agents headquartered in Salem Oregon, who have a passion for helping others achieve their real estate goals. Our team was born and raised in the Salem/Keizer area, and as such offers insights into the market and neighborhoods that only decades of being imbedded in a community can provide.</p>
                <p></p>
                <a href="${"/about"}"><button id="${"aboutButton"}" class="${"button third center textCenter"}">Our Story</button></a></div>
            <img class="${"col-10 col-md-5 rounded-5 order-0 order-md-2 my-3"}"${add_attribute("src", about, 0)} alt="${"Group of people in business casual attire pretending to be doing various 'real estate agent' tasks (asnwering phones, on laptop, holding a 'sold' sign, etc) around a couch in an empty room."}">
            </div></div>
</section>`;
});
export {
  Page as default
};
