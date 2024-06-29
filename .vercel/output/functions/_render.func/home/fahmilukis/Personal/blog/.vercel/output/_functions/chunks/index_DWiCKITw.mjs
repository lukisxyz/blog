/* empty css                         */
import { n as createComponent, o as renderTemplate, t as renderComponent, p as maybeRenderHead, q as addAttribute } from './astro/server_C_K00-1z.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './base-layout_ZdJW_Hpk.mjs';
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from './consts_CfedXe0I.mjs';
import { g as getCollection } from './_astro_content_8OiEVGud.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": SITE_TITLE, "description": SITE_DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div class="text-left mx-auto mb-8"> <h2 class="font-bold text-4xl md:leading-tight dark:text-white">
The Blog
</h2> <p class="mt-1 text-lg text-gray-600 dark:text-neutral-400">
The blog contains about technology and everyday life
</p> </div> <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4"> ${posts.map((post) => renderTemplate`<li> <a class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"${addAttribute(`/blog/${post.slug}`, "href")}> <div class="aspect-w-16 aspect-h-9"> <img class="w-full object-cover rounded-t-xl"${addAttribute(post.data.heroImage, "src")}${addAttribute(post.data.title, "alt")}> </div> <div class="p-3 md:p-4"> <h3 class="mt-2 text-base font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white"> ${post.data.title} </h3> </div> </a> </li>`)} </ul> </section> ` })}`;
}, "/home/fahmilukis/Personal/blog/src/pages/blog/index.astro", void 0);

const $$file = "/home/fahmilukis/Personal/blog/src/pages/blog/index.astro";
const $$url = "/blog";

export { $$Index as default, $$file as file, $$url as url };
