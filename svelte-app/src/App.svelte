<script>
	import {Link, Route, Router} from "svelte-routing";
	import MainPage from "./routes/MainPage.svelte";
  	import HomePage from "./routes/HomePage.svelte";
	import Footer from "./Components/Footer.svelte";

	export let url="";
</script>

<Router {url}>
	<nav>
		<Link to="/">메인</Link>
		<Link to="/home">홈</Link>
	</nav>

	<Route path="/" component={MainPage} />
	<Route path="/home" component={HomePage} />
</Router>

<Footer />