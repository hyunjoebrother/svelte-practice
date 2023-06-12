<script>
    import { navigate } from "svelte-routing";
    import Modal from "../../components/Modal.svelte";

  let modal;
    let email = ""
  
    let emailVerfiyCode = "";
    let emailVerfiyCodeMsg = "";
  
    const handleVerify = () => {
      navigate("/login/step3");
    };
  
  </script>
  
  <div class="page-container">
    <h3 class="page-title">비밀번호 재설정</h3>
    <label for="email">이메일</label>
    <input type="email" id="email" bind:value={email} placeholder="이메일을 입력하세요.">
    <button class="email-verify-btn" on:click={() => modal.show()}>다음</button>
    <p class="login-section">
      계정이 있으신가요? <a href="/login">로그인</a>하기
    </p>
  </div>
  
  <Modal bind:this={modal}>
      <div class="popup-title">인증하기</div>
      <div class="text-section">
        여기 메일로 인증코드를 전송하였습니다.<br />
        전송된 코드를 입력해주세요
      </div>
      <div class="input-section">
        <label for="">인증코드</label>
        <input
          type="text"
          id="emailVerifyCode"
          bind:value={emailVerfiyCode}
          required
          placeholder="인증코드를 입력하세요"
        />
        <a href="">재전송</a>
        <p>{emailVerfiyCodeMsg}</p>
      </div>
      <!-- on:input={handleEmailVerifyCode} -->
      <div class="button-section">
        <button on:click={() => modal.hide()}>취소</button>
        <button on:click={handleVerify}>확인</button>
      </div>
    </Modal>
  
  <style>
    .page-container {
      top: 44%;
      left: 50%;
      width: 360px;
      height: 280px;
      margin: 0;
      padding: 20px;
      transform: translate(-50%, -50%);
      position: absolute;
      overflow: auto;
      margin-bottom: 120px;
      align-items: center;
      justify-content: center;
      text-align: center;
      background-color: #fff;
      opacity: 0.8;
      box-shadow: 0 0 10px;
    }
  
    .page-title {
      margin-top: 16px;
      margin-bottom: 44px;
    }
  
    label {
      text-align: left;
      margin-left: 56px;
      margin-bottom: 4px;
      font-size: 14px;
    }
  
    input {
      width: 260px;
      height: 32px;
      border-radius: 8px;
      font-size: 12px;
      color: #b5b5b5;
      margin-bottom: 10px;
    }
  
  
    button {
      width: 240px;
      height: 40px;
      margin-top: 32px;
      font-size: 12px;
    }
  
    .login-section {
      position: absolute;
      width: 90%;
      margin-top: 20px;
      font-size: 12px;
    }
  
  
    .popup-title {
      /* 컨테이너 내부 중앙정렬 */
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 36px;
      font-size: 18px;
      font-weight: 600;
      box-shadow: 0 4px 4px -4px;
    }
  
    .text-section {
      width: 90%;
      height: 28px;
      padding-left: 16px;
      margin-top: 16px;
      text-align: left;
      font-size: 14px;
      font-weight: 450;
    }
  
    .input-section {
      padding-left: 16px;
      margin-top: 32px;
    }
  
    .input-section label {
      font-size: 14px;
      margin: 0;
      margin-left: 6px;
      margin-bottom: 4px;
      text-align: left;
    }
  
    .input-section input {
      width: 260px;
      height: 32px;
      border-radius: 8px;
      font-size: 12px;
      color: #b5b5b5;
    }
  
    .input-section a {
      font-size: 12px;
      margin-left: 4px;
    }
  
    .input-section p {
      font-size: 12px;
      font-weight: 550;
      color: #f9d133;
    }
  
    .button-section {
      margin-top: 28px;
      text-align: center;
    }
  
    .button-section button {
      width: 180px;
      margin: 10px;
    }
  
    .email-verify-btn {
      margin-top: 4px;
    }
  
  </style>
  