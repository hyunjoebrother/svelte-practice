<script>
	import {Link, Route, Router} from "svelte-routing";
	import MainPage from "./routes/MainPage.svelte";
  	import HomePage from "./routes/HomePage.svelte";
	import Footer from "./components/Footer.svelte";
	import LoginPage from "./routes/LoginPage.svelte";
  import JoinStep1 from "./routes/JoinPage/JoinStep1.svelte";
  import JoinStep2 from "./routes/JoinPage/JoinStep2.svelte";
  import JoinStep3 from "./routes/JoinPage/JoinStep3.svelte";
  import JoinFinish from "./routes/JoinPage/JoinFinish.svelte";

	export let url="";
</script>


하이

<Router {url}>
	<nav>
		<Link to="/">메인</Link>
		<Link to="/home">홈</Link>
		<Link to="/login">로그인</Link>
	</nav>

	<Route path="/" component={MainPage} />
	<Route path="/home" component={HomePage} />
	<Route path="/login" component={LoginPage}/>

	<Route path="/join" component={JoinStep1} />
	<Route path="/join/step2" component={JoinStep2} />
	<Route path="/join/step3" component={JoinStep3} />
	<Route path="/join/finish" component={JoinFinish} />
</Router>

<Footer />