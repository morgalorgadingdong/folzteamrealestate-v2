import { c as create_ssr_component, d as add_attribute, e as escape, l as each } from "../../../../chunks/index.js";
import { b as blogs } from "../../../../chunks/blogs.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".blog-text.svelte-1bjucl2.svelte-1bjucl2{font-size:1.2rem;line-height:1.5rem;font-family:var(--bs-body-font-family)}.blog-img.svelte-1bjucl2.svelte-1bjucl2{object-fit:cover;margin:0;position:relative;left:0;top:0;aspect-ratio:1/1}.blogBanner.svelte-1bjucl2.svelte-1bjucl2{background-color:black;height:30vh;max-height:300px;position:relative;margin:auto}.blogBanner.svelte-1bjucl2>img.svelte-1bjucl2{width:100%;height:100%;object-fit:cover;margin:0;position:absolute;left:0;top:0}.blog-header.svelte-1bjucl2.svelte-1bjucl2{height:23vh}.blogDate.svelte-1bjucl2.svelte-1bjucl2{color:#afadac}.blog-header-divider.svelte-1bjucl2.svelte-1bjucl2{margin-bottom:40px}a.svelte-1bjucl2.svelte-1bjucl2{color:#05c3f9}.blog-highlight.svelte-1bjucl2.svelte-1bjucl2{font-size:1.5rem;font-weight:600;color:#05c3f9;font-style:italic;background-color:rgb(175, 173, 172, 0.1)}.blog-divider.svelte-1bjucl2.svelte-1bjucl2{border-top:#05c3f9 solid 2px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let blog;
  blogs.forEach((article) => {
    if (article.Title == data.blogTitle) {
      blog = article;
    }
  });
  let imgSrcBanner = `../img/blogs/${blog.Number}. ${blog.Title}/blog-${blog.Number}-banner.jpg`;
  blogs[1];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<section><div class="${"blogBanner col-12 px-0 svelte-1bjucl2"}"><img${add_attribute("src", imgSrcBanner, 0)}${add_attribute("alt", blog.BannerAlt, 0)} class="${"bannerImg svelte-1bjucl2"}"></div>
    <div id="${""}" class="${"d-flex flex-wrap justify-content-center content-container text-start center mb-5"}"><div class="${"col-12 blog-header d-flex align-content-center justify-content-start flex-wrap svelte-1bjucl2"}"><h2 class="${"col-12 text-left px-3 pb-1"}">${escape(blog.Title)}</h2>
            <p class="${"blogDate col-12 text-left px-3 svelte-1bjucl2"}">Published by ${escape(blog.Author)} on ${escape(blog.Date)}</p></div>
        <div class="${"col-12 px-3"}"><div class="${"blog-divider col-12 blog-header-divider svelte-1bjucl2"}"></div></div>
        <div class="${"col-12 d-flex justify-content-center flex-wrap mt-3 px-3"}">${each(blog.Sections, (Section) => {
    return `${Section.Type == "text" ? `<p class="${"col-12 text-left px-0 my-3 blog-text svelte-1bjucl2"}">${escape(Section.Content)}</p>` : `${Section.Type == "img" ? `<img src="${"../img/blogs/" + escape(blog.Number, true) + ". " + escape(blog.Title, true) + "/blog-" + escape(blog.Number, true) + "-" + escape(Section.Number, true) + ".jpg"}"${add_attribute("alt", Section.Alt, 0)} class="${"col-10 col-md-8 mt-5 blog-img svelte-1bjucl2"}">
                    <span class="${"col-12 text-center mb-5"}">${escape(Section.Caption)} <a${add_attribute("href", Section.Src, 0)} class="${"svelte-1bjucl2"}">source</a></span>` : `${Section.Type == "divider" ? `<div class="${"mt-5 pb-5 blog-divider col-8 svelte-1bjucl2"}"></div>` : `${Section.Type == "highlight" ? `<p class="${"text-center blog-highlight p-5 col-12 col-lg-8 my-5 svelte-1bjucl2"}">${escape(Section.Content)}</p>` : `${Section.Type == "heading" ? `<h4 class="${"text-start col-12 mt-3 mb-0"}">${escape(Section.Content)}</h4>` : ``}`}`}`}`}`;
  })}</div></div>
    <a href="${"/blog"}" class="${" svelte-1bjucl2"}"><div class="${"button my-5"}">Back to Blogs</div></a>
    
    </section>
 






    `;
});
export {
  Page as default
};
