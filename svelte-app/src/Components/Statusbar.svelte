<script>
    export let state1;
    export let state2;
    export let last_login;
</script>

<div class ="account-state-container">
    <ul class="1_state">
        <p>1 Verfication {state1}</p>
    </ul>
    <ul class="2_state">
        <p>2 Security {state2}</p>
    </ul>
    <ul class="last-login">
        <p>마지막 로그인 일시 {last_login}</p>
    </ul>
</div>

<style>
    .account-state-container {
        width: 100%;
        height: 30px;
        background-color: #fff;
        box-shadow: 0 4px 4px -4px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .account-state-container ul li {
        display: block;
        float: left;
    }
    ul p {
        font-size: 14px;
        font-weight: 500;
        margin-left: 120px;
    }

    .last-login {
        margin-left: 120px;
        margin-right: 60px;;
    }

    .last-login p {
        font-size: 12px;
        font-weight: 400;
    }
</style>