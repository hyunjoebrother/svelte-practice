<script>
	import {Link, Route, Router} from "svelte-routing";
	import MainPage from "./routes/MainPage.svelte";
  	import HomePage from "./routes/HomePage.svelte";
	import Footer from "./components/Footer.svelte";
  import JoinStep1 from "./routes/JoinPage/JoinStep1.svelte";
  import JoinStep2 from "./routes/JoinPage/JoinStep2.svelte";
  import JoinStep3 from "./routes/JoinPage/JoinStep3.svelte";
  import JoinFinish from "./routes/JoinPage/JoinFinish.svelte";
  import LoginStep1 from "./routes/LoginPage/LoginStep1.svelte";
  import LoginStep2 from "./routes/LoginPage/LoginStep2.svelte";
  import LoginStep3 from "./routes/LoginPage/LoginStep3.svelte";
  import SelectDeposit from "./routes/SelectDeposit.svelte";
  import WithdrawalStep1 from "./routes/WithdrawalPage/WithdrawalStep1.svelte";
  import WithdrawalStep2_1 from "./routes/WithdrawalPage/WithdrawalStep2-1.svelte";
  import WithdrawalStep3_1 from "./routes/WithdrawalPage/WithdrawalStep3-1.svelte";
  import { component_subscribe } from "svelte/internal";
  import WithdrawalStep2_2 from "./routes/WithdrawalPage/WithdrawalStep2-2.svelte";
  import WithdrawalStep3_2_1 from "./routes/WithdrawalPage/WithdrawalStep3-2-1.svelte";
  import WithdrawalStep3_2_2 from "./routes/WithdrawalPage/WithdrawalStep3-2-2.svelte";
  import WithdrawalStep3_3_1 from "./routes/WithdrawalPage/WithdrawalStep3-3-1.svelte";
  import Transaction from "./routes/TransactionPage/Transaction.svelte";

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
	<Route path="/login" component={LoginStep1}/>
	<Route path="/login/step2" component={LoginStep2} />
	<Route path="/login/step3" component={LoginStep3} />

	<Route path="/join" component={JoinStep1} />
	<Route path="/join/step2" component={JoinStep2} />
	<Route path="/join/step3" component={JoinStep3} />
	<Route path="/join/finish" component={JoinFinish} />

	<Route path="/deposit" component={SelectDeposit} />

	<Route path="/withdrawal" component={WithdrawalStep1} />
	<Route path="/withdrawal/step2-1" component={WithdrawalStep2_1} />
	<Route path="/withdrawal/step2-2" component={WithdrawalStep2_2} />
	<Route path="/withdrawal/step3-1" component={WithdrawalStep3_1} />
	<Route path="/withdrawal/step3-2-1" component={WithdrawalStep3_2_1} />
	<Route path="/withdrawal/step3-2-2" component={WithdrawalStep3_2_2} />
	<Route path="/withdrawal/step3-3-1" component={WithdrawalStep3_3_1} />
	
	<Route path="/transaction" component={Transaction} />
</Router>

<Footer />