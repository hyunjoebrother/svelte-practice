<script>
	import Footer from '../components/Footer.svelte';
    import Header from '../components/Header.svelte'
    import Profilecard from '../components/Profilecard.svelte';
</script>


<main>
    <Header />
    <Profilecard />
    <Profilecard />
    <Profilecard />
    <Profilecard />
    <Footer />
</main>


<style>
	main {
		padding: 85px 3% 0;
		position: relative;
		margin: 0 auto;
		min-height: calc(100vh-85px);
	}
	@media (max-width: 992px) {
		main {
			padding: 85px 2% 0;
		}
	}
	@media (min-width: 560px) {
		main {
			padding: 85px 1% 0;
		}
	}
</style>