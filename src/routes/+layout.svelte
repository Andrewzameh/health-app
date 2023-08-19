<script lang="ts">
	
	// SvelteKit Imports
	import type { ComponentEvents } from 'svelte'
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';

	// Components
	import Heading from '../lib/components/landing/heading.svelte'
	import AppRail from '../lib/components/landing/rail.svelte'
	import Footer from '../lib/components/landing/footer.svelte'
	import DocsFooter from '$lib/components/DocsFooter/DocsFooter.svelte';
	import DocsAppBar from '$lib/components/DocsAppBar/DocsAppBar.svelte';
	import DocsDrawer from '$lib/components/DocsDrawer/DocsDrawer.svelte';
	import DocsSidebar from '$lib/components/DocsSidebar/DocsSidebar.svelte';

	//Skeleton
	import '@skeletonlabs/skeleton/themes/theme-crimson.css'
	import { AppShell, Toast } from '@skeletonlabs/skeleton'
	// import '../theme.postcss'
	import '@skeletonlabs/skeleton/styles/skeleton.css'
	import '@skeletonlabs/skeleton/styles/all.css'

	//CSS
	import '../app.postcss'

	//Floating UI
	import {
		computePosition,
		autoUpdate,
		offset,
		shift,
		flip,
		arrow,
	} from '@floating-ui/dom'
	import { storePopup } from '@skeletonlabs/skeleton'
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow })

	// SEO Meta tags
	const metaDefaults = {
		title: 'Skeleton — UI Toolkit for Svelte + Tailwind',
		description: 'Skeleton is a fully featured UI Toolkit for building reactive interfaces quickly using Svelte and Tailwind.',
		image: 'https://user-images.githubusercontent.com/1509726/212382766-f29b9c9a-82e3-44c2-b911-b17a9197e5b9.jpg'
	};
	const meta = {
		title: metaDefaults.title,
		description: metaDefaults.description,
		image: metaDefaults.image,
		// Article
		article: { publishTime: '', modifiedTime: '', author: '' },
		// Twitter
		twitter: {
			title: metaDefaults.title,
			description: metaDefaults.description,
			image: metaDefaults.image
		}
	};



	function scrollHandler(event: ComponentEvents<AppShell>['scroll']) {
		console.log(event.currentTarget.scrollTop)
	}
	function matchPathWhitelist(pageUrlPath: string): boolean {
		// If homepage route
		if (pageUrlPath === '/') return true;
		if (pageUrlPath === '/pricing') return true;
		if (pageUrlPath === '/about') return true;
		if (pageUrlPath === '/') return true;
		// If any blog route
		if (pageUrlPath.includes('/blog')) return true;
		return false;
	}
	// Scroll heading into view
	function scrollHeadingIntoView(): void {
		if (!window.location.hash) return;
		const elemTarget: HTMLElement | null = document.querySelector(window.location.hash);
		if (elemTarget) elemTarget.scrollIntoView({ behavior: 'smooth' });
	}

	// Lifecycle
	afterNavigate((params: any) => {
		// Scroll to top
		const isNewPage: boolean = params.from && params.to && params.from.route.id !== params.to.route.id;
		const elemPage = document.querySelector('#page');
		if (isNewPage && elemPage !== null) {
			elemPage.scrollTop = 0;
		}
		// Scroll heading into view
		scrollHeadingIntoView();
	});

	page.subscribe((page) => {
		// Restore Page Defaults
		meta.title = metaDefaults.title;
		meta.description = metaDefaults.description;
		meta.image = metaDefaults.image;
		// Restore Twitter Defaults
		meta.twitter.title = metaDefaults.title;
		meta.twitter.description = metaDefaults.description;
		meta.twitter.image = metaDefaults.image;
	});
	$: slotSidebarLeft = matchPathWhitelist($page.url.pathname) ? 'w-0' : 'bg-surface-50-900-token lg:w-auto';

</script>

<svelte:head>
	<title>{meta.title}</title>
	<!-- Meta Tags -->
	<meta name="title" content={meta.title} />
	<meta name="description" content={meta.description} />
	<meta name="keywords" content="website, " />
	<meta name="theme-color" content="#242c46" />
	<meta name="author" content="website" />
	<!-- Open Graph - https://ogp.me/ -->
	<meta property="og:site_name" content="website" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.website.dev{$page.url.pathname}" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:image" content={meta.image} />
	<meta property="og:image:secure_url" content={meta.image} />
	<meta property="og:image:type" content="image/jpg" />
	<meta property="og:image:width" content="1707" />
	<meta property="og:image:height" content="1233" />

	<!-- Open Graph: Twitter -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@website" />
	<meta name="twitter:creator" content="@website" />
	<meta name="twitter:title" content={meta.twitter.title} />
	<meta name="twitter:description" content={meta.twitter.description} />
	<meta name="twitter:image" content={meta.twitter.image} />
</svelte:head>

<Toast />
<DocsDrawer />


<AppShell on:scroll={scrollHandler} {slotSidebarLeft} regionPage="overflow-y-scroll" slotFooter="bg-black p-4">
	<svelte:fragment slot="header">
		<DocsAppBar/>
	<!-- <Heading /> -->
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<!-- <div id="sidebar-left" class="hidden h-full lg:block">
			<AppRail />
		</div> -->
		<DocsSidebar class="hidden lg:grid overflow-hidden" />
	</svelte:fragment>
	<!-- (sidebarRight) -->
	<svelte:fragment slot="pageHeader" />
	<!-- Router Slot -->
		<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">
		<!-- <Footer /> -->
		<DocsFooter />

	</svelte:fragment>
	<!-- <svelte:fragment slot="footer"></svelte:fragment> -->
</AppShell>
