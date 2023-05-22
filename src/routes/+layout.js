// Page Transition
// https://github.com/joysofcode/sveltekit-for-beginners/commit/62db9036917eed853b3fac0957b97079fbd0e3e8?diff=unified
// https://github.com/joysofcode/sveltekit-for-beginners/blob/62db9036917eed853b3fac0957b97079fbd0e3e8/src/routes/%2Blayout.ts
export const load = ({ url }) => {
	return {
		url: url.pathname
	};
};

// https://kit.svelte.dev/docs/page-options#trailingslash
export const trailingSlash = 'always';

// https://kit.svelte.dev/docs/page-options#prerender
// after discussion with matia I turn prerender off for entire site and use ssr and caching
// https://discord.com/channels/525725325007650828/1073375239288922132/1077576952958963873
export const prerender = false;
