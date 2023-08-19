<script lang="ts">
	import { page } from '$app/stores'
	import { base } from '$app/paths'
	import { PUBLIC_APP_ASSETS, PUBLIC_APP_NAME } from '$env/static/public'
    import {modeCurrent} from '@skeletonlabs/skeleton'
	export let classNames = ''

	$: mode = $modeCurrent ? 'black' : 'color';
	console.log("mode: " + mode);

</script>

<img
	class={classNames}
	src="{$page.url.origin}{base}/{PUBLIC_APP_ASSETS}/logoX-{mode}.svg"
	alt={PUBLIC_APP_NAME}
	height="30px"
	width="110px"
/>