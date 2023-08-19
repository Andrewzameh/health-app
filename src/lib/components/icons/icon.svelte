<script lang="ts">
	import { page } from '$app/stores'
	import { base } from '$app/paths'
	import { PUBLIC_APP_ASSETS, PUBLIC_APP_NAME } from '$env/static/public'
	export let classNames = ''
    import {modeCurrent} from '@skeletonlabs/skeleton'

	$: modeX = $modeCurrent ? 'grey' : 'color';
	console.log("modeX: " + modeX);

</script>

<img
	class={classNames}
	src="{$page.url.origin}{base}/{PUBLIC_APP_ASSETS}/icon.svg"
	alt={PUBLIC_APP_NAME}
	height="65px"
	width="60px"
/>
