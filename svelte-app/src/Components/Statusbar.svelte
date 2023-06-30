<script>
    import { onMount } from "svelte";
  import {statusStore} from "../stores/statusStore"

  let currentMember = null;
  let currentStateIcon = null;
  let currentState1 = null;
  let currentState2 = null;

  // 상태 구독
  onMount(() => {
    const unsubscribe = statusStore.subscribe((state) => {
      currentMember = state.memberState;
      currentStateIcon = state.stateIcon;
      currentState1 = state.state1;
      currentState2 = state.state2;
    });

    // 컴포넌트가 파기될 때 구독 해제하기
    return unsubscribe;
  });

  statusStore.setAccountStatus("member1");
</script>

<div class ="account-state-container">
    <ul class="1_state">
        <p>Icon {currentStateIcon}</p>
        <p>1 Verfication {currentState1}</p>
    </ul>
    <ul class="2_state">
        <p>2 Security {currentState2}</p>
    </ul>
    <ul class="last-login">
        <p>마지막 로그인 일시 </p>
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