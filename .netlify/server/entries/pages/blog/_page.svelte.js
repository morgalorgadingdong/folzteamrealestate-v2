import { c as create_ssr_component, d as add_attribute, e as escape, l as each, v as validate_component } from "../../../chunks/index.js";
import { b as blogs } from "../../../chunks/blogs.js";
const BlogCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "a.svelte-zapoqa.svelte-zapoqa{text-decoration:none;color:black}.card.svelte-zapoqa.svelte-zapoqa{margin:1rem}.card-body.svelte-zapoqa.svelte-zapoqa{padding:0}.card-img-top.svelte-zapoqa.svelte-zapoqa{width:100%;height:15rem;padding:0;background-size:cover;background-position:center;border-bottom:solid 4px #05c3f9}.card-img-top.svelte-zapoqa>img.svelte-zapoqa,.card-img-left.svelte-zapoqa>img.svelte-zapoqa{width:100%;height:100%;object-fit:cover;margin:0}.card-img-left.svelte-zapoqa.svelte-zapoqa{aspect-ratio:3/2;padding:0;background-size:cover;background-position:center}.blogDate.svelte-zapoqa.svelte-zapoqa{color:#afadac}.blogDescription.svelte-zapoqa.svelte-zapoqa{white-space:nowrap;padding:0;overflow:hidden;word-wrap:break-word;text-overflow:ellipsis;font-size:14px}.card-title-container.svelte-zapoqa.svelte-zapoqa{border-bottom:solid 2px #05c3f9}",
  map: null
};
const BlogCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { blog } = $$props;
  let imgSrc = `./img/blogs/${blog.Number}. ${blog.Title}/blog-${blog.Number}-banner.jpg`;
  console.log(imgSrc);
  if ($$props.blog === void 0 && $$bindings.blog && blog !== void 0)
    $$bindings.blog(blog);
  $$result.css.add(css$1);
  return `<a${add_attribute("href", "./blog/" + blog.Title, 0)} class="${"col-12 col-md-5 d-lg-none my-3 svelte-zapoqa"}" data-sveltekit-preload-data="${"hover"}"><div class="${"col-12 card mx-0 svelte-zapoqa"}"><div class="${"card-body svelte-zapoqa"}"><div class="${"card-img-top svelte-zapoqa"}"><img${add_attribute("src", imgSrc, 0)}${add_attribute("alt", blog.Title, 0)} class="${"svelte-zapoqa"}">
                
                
                </div>
            
            <div class="${"col-12 px-2"}"><h5 class="${"card-title pt-3"}">${escape(blog.Title)}</h5>
                <p class="${"blogDate col-12 text-left px-0 svelte-zapoqa"}">${escape(blog.Date)}</p>
                <p class="${"blogDescription col-12 text-left px-0 svelte-zapoqa"}">${escape(blog.Sections[0].Content)}</p>
                <a${add_attribute("href", "./blog/" + blog.Title, 0)} class="${"svelte-zapoqa"}">Read More</a></div></div></div></a>

<a${add_attribute("href", "./blog/" + blog.Title, 0)} class="${"col-12 d-none d-lg-inline my-5 svelte-zapoqa"}" data-sveltekit-preload-data="${"hover"}"><div class="${"col-12 d-flex flex-wrap"}"><div class="${"card-img-left col-4 svelte-zapoqa"}"><img${add_attribute("src", imgSrc, 0)}${add_attribute("alt", blog.Title, 0)} class="${"svelte-zapoqa"}">
            
            
            </div>
        
        <div class="${"col-8 px-2 d-flex align-content-center justify-content-start flex-wrap px-3"}"><div class="${"col-12 d-flex justify-content-start card-title-container svelte-zapoqa"}"><h5 class="${"card-title text-left py-1"}">${escape(blog.Title)}</h5></div>
            <p class="${"blogDate col-12 text-start px-0 svelte-zapoqa"}">${escape(blog.Date)}</p>
            <p class="${"blogDescription col-12 text-left px-0 svelte-zapoqa"}">${escape(blog.Sections[0].Content)}</p>
            <a class="${"col-12 text-center d-none d-lg-inline svelte-zapoqa"}"${add_attribute("href", "./blog/" + blog.Title, 0)}>Read More</a></div></div>
</a>`;
});
const BlogsContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"col-12 d-flex justify-content-around flex-wrap content-container"}">${each(blogs, (blog) => {
    return `${blog.Published == true ? `${validate_component(BlogCard, "BlogCard").$$render($$result, { blog }, {}, {})}` : ``}`;
  })}
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-r4saao{min-height:80vh}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"svelte-r4saao"}"><div class="${"content-container"}"><div class="${"col-12 d-flex justify-content-center flex-wrap"}">${validate_component(BlogsContainer, "BlogsContainer").$$render($$result, {}, {}, {})}</div></div>
</section>`;
});
export {
  Page as default
};
