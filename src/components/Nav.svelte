<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	// Navigation Menu Items
	const navItems = [
		{ label: '1', href: '/1/' },
		{ label: '2', href: '/2/' },
		{ label: '3', href: '/3/' },
		{ label: '4', href: '/4/' },
		{ label: '5', href: '/5/' },
		{ label: '6', href: '/6/' },
		{ label: '7', href: '/7/' },
		{ label: '8', href: '/8/' },
		{ label: '9', href: '/9/' }
		// { label: '10', href: '/10/' }
	];

	// Navigation Menu
	let nav;
	let showMenu = false;

	function toggleMenu(e) {
		// console.log(e);
		// console.log(window.innerWidth);
		if (window.innerWidth < 768) {
			nav.classList.add('transform');
			if (!nav.classList.contains('down')) {
				nav.classList.add('down');
			} else {
				nav.classList.add('up');
				nav.classList.remove('down');
				nav.classList.remove('transform');
			}
		}
	}

	function toggleMenuOnLogo(e) {
		// console.log(e);
		if (window.innerWidth < 768 && nav.classList.contains('down')) {
			nav.classList.add('up');
			nav.classList.remove('down');
			nav.classList.remove('transform');
		}
	}

	function onTransitionEnd() {
		nav.classList.remove('up');
	}

	onMount(() => {
		nav.addEventListener('transitionend', onTransitionEnd, false);
		return () => nav.removeEventListener('transitionend', onTransitionEnd, false);
	});

	/*
	https://jsfiddle.net/2k9L5eyo/
	vertically center text inside a href element
	w-full h-full flex justify-center items-center
	*/

	// https://kit.svelte.dev/docs/link-options#data-sveltekit-preload-data
	// during development remove data-sveltekit-prefetch from header > div > a
	// and data-sveltekit-preload-data="hover" from nav > ul
</script>

<header class="bg-gray-800 relative w-full 140:h-[140px] 240:h-[80px] 768:flex 768:px-4">
	<div
		class="bg-blue-900 text-4xl flex flex-col z-20 absolute w-full 140:h-[140px] 240:flex-row 240:h-[80px] 768:static 768:w-1/6 768:text-3xl 1024:text-4xl"
	>
		<a
			href="/"
			class:active="{$page.url.pathname === '/'}"
			class="text-4xl w-full h-full flex items-center justify-center 768:text-3xl"
			on:click="{toggleMenuOnLogo}">Let's go</a
		>
		<button class="w-full h-full 768:hidden" on:click="{toggleMenu}">Menu</button>
	</div>
	<nav
		class="z-10 absolute w-full translate-y-nav opacity-1 break-words text-center 140:top-[140px] 240:top-[80px] 768:w-5/6 768:ml-auto 768:static 768:opacity-100 768:transform-none 768:transition-none 1440:w-2/3"
		bind:this="{nav}"
		class:transform="{showMenu}"
		class:down="{showMenu}"
		class:up="{showMenu}"
	>
		<ul class="w-full flex flex-col 768:flex-row 768:justify-between">
			{#each navItems as item}
				<li class="list-none">
					<a
						class="bg-blue-800 text-4xl w-full hover:underline h-[64px] flex items-center justify-center 768:h-[80px] 768:text-3xl 768:px-2 1024:text-4xl 1024:px-4"
						class:active="{$page.url.pathname === item.href}"
						href="{item.href}"
						on:click="{toggleMenu}"
						>{item.label}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	/* ===================================================== */
	/* Navigation Menu Active Link Class */
	.active {
		/* background-color: blue; */
		background-color: #031d44;
		background-color: green;
	}
	/* ===================================================== */
	/* Navigation Menu Animation */
	.transform {
		transform: none;
	}
	/* ===================================================== */
	/* with opacity */
	/* .down {
		transition: opacity 225ms ease-out, transform 225ms;
		opacity: 1;
	}
	.up {
		transition: opacity 195ms ease-in, transform 195ms;
		opacity: 0;
	} */

	/* ===================================================== */
	/* without opacity
	make sure to set tailwind opacity-1 on nav */
	.down {
		transition: transform 225ms ease-out;
	}
	.up {
		transition: transform 195ms ease-in;
	}

	/* ===================================================== */
	/* during development */
	/* .down {
		transition: transform 2000ms ease-out;
	}
	.up {
		transition: transform 2000ms ease-in;
	}
	nav {
		border-bottom: 2px solid gold;
	} */
</style>
