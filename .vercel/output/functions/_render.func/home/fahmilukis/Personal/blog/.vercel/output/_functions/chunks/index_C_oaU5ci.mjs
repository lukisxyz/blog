/* empty css                         */
import { m as createAstro, n as createComponent, o as renderTemplate, t as renderComponent, p as maybeRenderHead } from './astro/server_C_K00-1z.mjs';
import 'kleur/colors';
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from './consts_CfedXe0I.mjs';
import { $ as $$BaseLayout } from './base-layout_ZdJW_Hpk.mjs';

const $$Astro = createAstro("https://example.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": SITE_TITLE, "description": SITE_DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="prose-lg"> <h1>🧑‍🚀 Hello, Astronaut!</h1> <p>
Welcome to the official <a href="https://astro.build/">Astro</a> blog
			starter template. This template serves as a lightweight, minimally-styled
			starting point for anyone looking to build a personal website, blog,
			or portfolio with Astro.
</p> <p>
This template comes with a few integrations already configured in
			your
<code>astro.config.mjs</code> file. You can customize your setup with
<a href="https://astro.build/integrations">Astro Integrations</a> to
			add tools like Tailwind, React, or Vue to your project.
</p> <p>Here are a few ideas on how to get started with the template:</p> <ul> <li>Edit this page in <code>src/pages/index.astro</code></li> <li>
Edit the site header items in <code>src/components/Header.astro</code> </li> <li>
Add your name to the footer in <code>src/components/Footer.astro</code> </li> <li>
Check out the included blog posts in <code>src/content/blog/</code> </li> <li>
Customize the blog post page layout in <code>src/layouts/BlogPost.astro</code> </li> </ul> <p>
Have fun! If you get stuck, remember to <a href="https://docs.astro.build/">read the docs
</a> or <a href="https://astro.build/chat">join us on Discord</a> to
			ask questions.
</p> <p>
Looking for a blog template with a bit more personality? Check out <a href="https://github.com/Charca/astro-blog-template">astro-blog-template
</a> by <a href="https://twitter.com/Charca">Maxi Ferreira</a>.
</p> </section> ` })}`;
}, "/home/fahmilukis/Personal/blog/src/pages/index.astro", void 0);

const $$file = "/home/fahmilukis/Personal/blog/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
