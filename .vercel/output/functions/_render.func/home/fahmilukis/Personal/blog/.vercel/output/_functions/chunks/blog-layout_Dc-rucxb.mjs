import { m as createAstro, n as createComponent, o as renderTemplate, p as maybeRenderHead, q as addAttribute, t as renderComponent, u as renderSlot } from './astro/server_C_K00-1z.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$BaseLayout } from './base-layout_ZdJW_Hpk.mjs';

const $$Astro$1 = createAstro("https://example.com");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time>`;
}, "/home/fahmilukis/Personal/blog/src/components/formatted-date.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$BlogLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogLayout;
  const { title, description, pubDate, updatedDate, heroImage } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="prose-lg prose-ul:list-disc prose-gray w-full dark:prose-invert"> <div class="hero-image"> ${heroImage && renderTemplate`<img${addAttribute(1020, "width")}${addAttribute(510, "height")}${addAttribute(heroImage, "src")} class="shadow-sm border rounded-md" alt="">`} </div> <div> ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": pubDate })} ${updatedDate && renderTemplate`<div class="last-updated-on">
Last updated on ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": updatedDate })} </div>`} <h1 class="my-3">${title}</h1> ${renderSlot($$result2, $$slots["default"])} </div> </article> ` })}`;
}, "/home/fahmilukis/Personal/blog/src/layouts/blog-layout.astro", void 0);

export { $$BlogLayout as $ };
