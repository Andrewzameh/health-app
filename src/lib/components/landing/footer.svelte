<script lang="ts">
	import { enhance } from '$app/forms'
	import { AppBar } from '@skeletonlabs/skeleton'
	import { Twitter } from 'lucide-svelte'
	import { Facebook } from 'lucide-svelte'
	import { Instagram } from 'lucide-svelte'
	import { Linkedin } from 'lucide-svelte'
	import { Github } from 'lucide-svelte'

	export { AppBar as Footer }
</script>

<div
	class="mx-auto px-4 pt-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8"
>
	<div class="flex flex-col justify-between pb-10 pt-5 sm:flex-row">
		<p class="text-sm text-gray-600">
			© Copyright 2023 Medical History. All rights reserved.
		</p>
		<div class="mt-4 flex items-center space-x-4 sm:mt-0">
			<a
				href="/"
				class="hover:text-deep-purple-accent-400 text-gray-500 transition-colors duration-300"
			>
				<Facebook />
			</a>
			<a
				href="/"
				class="hover:text-deep-purple-accent-400 text-gray-500 transition-colors duration-300"
			>
				<Instagram />
			</a>
			<a
				href="/"
				class="hover:text-deep-purple-accent-400 text-gray-500 transition-colors duration-300"
			>
				<Twitter />
			</a>
			<a
				href="/"
				class="hover:text-deep-purple-accent-400 text-gray-500 transition-colors duration-300"
			>
				<Linkedin />
			</a>
			<a
				href="/"
				class="hover:text-deep-purple-accent-400 text-gray-500 transition-colors duration-300"
			>
				<Github />
			</a>
		</div>
	</div>
</div>
