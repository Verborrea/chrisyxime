<script>
	import escudo from '$lib/assets/escudo.avif';
</script>

<footer class="relative drop-shadow-xl">
	<div class="deco-top"></div>
	<article
		class="flex flex-col items-center gap-10 bg-purple-light px-6 pt-20 pb-20 text-center text-purple-dark sm:text-lg md:gap-20"
	>
		<div class="h-px w-30 bg-purple-dark"></div>
		<p class="max-w-sm italic">Porque el amor se celebra mejor en compañía, los esperamos.</p>
		<section class="flex flex-col items-center gap-4">
			<img src={escudo} alt="Escudo de los novios" class="max-w-24" />
			<p class="text-xl font-medium">2 0 . 0 6 . 2 0 2 6</p>
		</section>
		<div class="italic">
			<p>
				Ilustraciones por <a
					href="https://www.instagram.com/marideih/"
					class="link"
					target="_blank"
					rel="noopener noreferrer">@marideih</a
				>
			</p>
			<p>
				Página web diseñada por: <a
					href="https://www.instagram.com/markit_latam/"
					class="link"
					target="_blank"
					rel="noopener noreferrer">Mark It Latam</a
				>
			</p>
		</div>
	</article>
</footer>

<style>
	.deco-top {
		background-image: url("data:image/svg+xml;utf8,<svg width='48' height='20' viewBox='0 0 48 20' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M24 0C12 0 12 20 0 20H48C36 20 36 0 24 0Z' fill='%23c6c8e9'/></svg>");
		background-repeat: repeat-x;
		background-size: auto 100%;
		height: 20px;
		width: 100vw;
	}
</style>
