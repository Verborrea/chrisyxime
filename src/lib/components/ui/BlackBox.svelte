<script>
	let { children } = $props();
</script>

<article class="relative flex flex-col items-center gap-12 border border-black text-center">
	{@render children?.()}
</article>
