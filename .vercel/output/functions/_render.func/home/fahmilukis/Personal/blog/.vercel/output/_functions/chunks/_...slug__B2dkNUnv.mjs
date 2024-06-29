/* empty css                         */
import { m as createAstro, n as createComponent, o as renderTemplate, t as renderComponent } from './astro/server_C_K00-1z.mjs';
import 'kleur/colors';
import { g as getCollection } from './_astro_content_8OiEVGud.mjs';
import { $ as $$BlogLayout } from './blog-layout_Dc-rucxb.mjs';

const $$Astro = createAstro("https://example.com");
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const posts = await getCollection("blog");
  const { slug } = Astro2.params;
  const post = posts.find((page) => page.slug === slug);
  if (!post) return Astro2.redirect("/404");
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogLayout, { ...post.data }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/home/fahmilukis/Personal/blog/src/pages/blog/[...slug].astro", void 0);

const $$file = "/home/fahmilukis/Personal/blog/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

export { $$ as default, $$file as file, $$url as url };
