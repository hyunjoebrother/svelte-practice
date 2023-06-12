<script>
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";
    import Modal from "../../components/Modal.svelte";

    let modal;
    let password = "";
    let confirmPassword = "";
    let passwordMsg = "";
    let confirmPwdMsg = "";
    let isFormValid = false;
  
    const validateForm = () => {
      // Password validation
      const passwordRegex =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/;
      const isPasswordValid = passwordRegex.test(password);
      passwordMsg = isPasswordValid
        ? "가능"
        : "비번은 6글자 이상, 소문자 대문자 특수문자 숫자 하나씩 포함";
  
      // Password confirmation validation
      const isPasswordConfirmed = password === confirmPassword;
      confirmPwdMsg = isPasswordConfirmed ? "일치" : "다름";
  
      isFormValid = isPasswordValid && isPasswordConfirmed;
  
      onMount(() => {
        validateForm();
      });
    };
  
    const handlePasswordChange = () => {
      validateForm();
    };
  
    const handleConfirmPwdChange = () => {
      validateForm();
    };
  
    const handleVerify = () => {
      navigate("/login");
    };
  </script>
  
  <div class="page-container">
    <h3 class="page-title">비밀번호 재설정</h3>
    <label for="password">신규 비밀번호</label>
    <input
      type="password"
      id="password"
      bind:value={password}
      on:input={handlePasswordChange}
      placeholder="비밀번호를 입력하세요."
    />
    <p class="password-msg">{passwordMsg}</p>
    <label for="confirmPassword" class="confirm-password">비밀번호 확인</label>
    <input
      type="password"
      id="confirmPassword"
      bind:value={confirmPassword}
      on:input={handleConfirmPwdChange}
      placeholder="비밀번호를 다시 입력하세요."
    />
    <p class="password-msg">{confirmPwdMsg}</p>
    <button
      class="password-verify-btn"
      disabled={!isFormValid}
      on:click={() => modal.show()}>다음</button
    >
    <p class="login-section">
      계정이 있으신가요? <a href="/login">로그인</a>하기
    </p>
  </div>
  
  <Modal bind:this={modal}>
    <div class="popup-title">비밀번호 재설정 완료</div>
    <div class="text-section">
      비밀번호가 재설정되었습니다. <br />
      다시 로그인을 시도해주세요.
    </div>
    <div class="button-section">
      <button on:click={handleVerify}>확인</button>
    </div>
  </Modal>
  
  
  <style>
    .page-container {
      top: 44%;
      left: 50%;
      width: 360px;
      height: 400px;
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
      margin-bottom: 48px;
    }
  
    label {
      text-align: left;
      margin-left: 56px;
      margin-bottom: 4px;
      font-size: 14px;
    }
  
    .confirm-password {
      margin-top: 14px;
    }
  
    input {
      width: 260px;
      height: 32px;
      border-radius: 8px;
      font-size: 12px;
      color: #b5b5b5;
      margin-bottom: 10px;
    }
  
    .password-msg {
      font-size: 12px;
      font-weight: 550;
      color: #f9d133;
      margin: 0;
    }
  
    .password-verify-btn {
      width: 240px;
      height: 40px;
      margin-top: 48px;
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
      margin-top: 48px;
      margin-bottom: 24px;
      text-align: center;
      font-size: 14px;
      font-weight: 450;
    }
  
    .button-section {
      margin-top: 28px;
      text-align: center;
    }
  
    .button-section button {
      width: 180px;
      margin: 10px;
    }
  </style>
  