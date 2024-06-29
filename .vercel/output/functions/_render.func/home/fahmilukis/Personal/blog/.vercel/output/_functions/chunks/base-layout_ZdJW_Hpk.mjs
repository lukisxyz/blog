import { m as createAstro, n as createComponent, o as renderTemplate, p as maybeRenderHead, q as addAttribute, s as spreadAttributes, u as renderSlot, z as renderHead, t as renderComponent } from './astro/server_C_K00-1z.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from './consts_CfedXe0I.mjs';

const $$Astro$1 = createAstro("https://example.com");
const $$LinkHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LinkHeader;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const subpath = pathname.match(/[^\/]+/g);
  const isActive = href === pathname || href === `/${subpath?.[0]}`;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-mv5sbay6> ${renderSlot($$result, $$slots["default"])} </a> `;
}, "/home/fahmilukis/Personal/blog/src/components/link-header.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const today = /* @__PURE__ */ new Date();
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const {
    title = SITE_TITLE,
    description = SITE_DESCRIPTION,
    image = "/blog-placeholder-1.jpg"
  } = Astro2.props;
  const theme = Astro2.cookies.get("theme")?.value ?? "light";
  return renderTemplate`<html lang="en"${addAttribute(theme, "class")} data-astro-cid-xiqzpj5e> <head><!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>${renderHead()}</head> <body class="text-[#212121] bg-[#f5f5f5] dark:bg-[#212121] dark:text-[#f5f5f5]" data-astro-cid-xiqzpj5e> <header class="w-full flex items-center justify-between max-w-screen-md mx-auto p-6" data-astro-cid-xiqzpj5e> <nav class="w-full flex items-center justify-between gap-6" data-astro-cid-xiqzpj5e> ${renderComponent($$result, "LinkHeader", $$LinkHeader, { "href": "/", "data-astro-cid-xiqzpj5e": true }, { "default": ($$result2) => renderTemplate`Home` })} ${renderComponent($$result, "LinkHeader", $$LinkHeader, { "href": "/about", "data-astro-cid-xiqzpj5e": true }, { "default": ($$result2) => renderTemplate`About` })} ${renderComponent($$result, "LinkHeader", $$LinkHeader, { "href": "/blog", "data-astro-cid-xiqzpj5e": true }, { "default": ($$result2) => renderTemplate`Blog` })} <div class="w-full" data-astro-cid-xiqzpj5e></div> <button id="theme-toggle" type="button" title="Toggle dark mode" aria-label="Toggle dark mode" class="flex flex-shrink-0 justify-center items-center p-3 rounded-full text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-800" data-astro-cid-xiqzpj5e> <svg data-svg="" class="flex-shrink-0 size-5 hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-xiqzpj5e> <circle cx="12" cy="12" r="4" data-astro-cid-xiqzpj5e></circle> <path d="M12 2v2" data-astro-cid-xiqzpj5e></path> <path d="M12 20v2" data-astro-cid-xiqzpj5e></path> <path d="m4.93 4.93 1.41 1.41" data-astro-cid-xiqzpj5e></path> <path d="m17.66 17.66 1.41 1.41" data-astro-cid-xiqzpj5e></path> <path d="M2 12h2" data-astro-cid-xiqzpj5e></path> <path d="M20 12h2" data-astro-cid-xiqzpj5e></path> <path d="m6.34 17.66-1.41 1.41" data-astro-cid-xiqzpj5e></path> <path d="m19.07 4.93-1.41 1.41" data-astro-cid-xiqzpj5e></path> </svg> <svg data-svg="" class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-xiqzpj5e> <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" data-astro-cid-xiqzpj5e></path> </svg> </button> </nav> </header> <main class="max-w-screen-md mx-auto p-6" data-astro-cid-xiqzpj5e> ${renderSlot($$result, $$slots["default"])} </main> <footer class="text-center font-light text-sm mt-12 mb-6" data-astro-cid-xiqzpj5e>
&copy; ${today.getFullYear()} Fahmi. All rights reserved.
</footer>  </body> </html>`;
}, "/home/fahmilukis/Personal/blog/src/layouts/base-layout.astro", void 0);

export { $$BaseLayout as $ };
