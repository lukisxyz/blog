import rss from '@astrojs/rss';
import { g as getCollection } from './_astro_content_8OiEVGud.mjs';
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from './consts_CfedXe0I.mjs';

async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}

export { GET };
