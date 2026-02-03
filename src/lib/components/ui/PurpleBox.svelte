<script>
	let { children } = $props();
</script>

<article class="mx-auto max-w-xl pt-10">
	<div
		class="relative flex flex-col items-center gap-12 bg-purple-light px-8 py-18 text-center text-purple-black md:py-24"
	>
		<div
			class="absolute -top-10 left-1/2 size-24 -translate-x-1/2 rounded-full bg-purple-light"
		></div>
		{@render children?.()}
	</div>
	<div class="deco"></div>
</article>

<style>
	.deco {
		background-image: url("data:image/svg+xml;utf8,<svg width='36' height='16' viewBox='0 0 36 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M18 16C9 16 9 0 0 0H36C27 0 27 16 18 16Z' fill='%23C6C8E8'/></svg>");
		background-repeat: repeat-x;
		background-size: auto 100%;
		height: 16px;
		width: 100%;
	}
</style>
