<script>
  import { onMount } from "svelte";
    import { navigate } from "svelte-routing";
  
    let email = "";
    let password = "";
    let confirmPassword = "";
    let allChecked = false;
    let serviceChecked = false;
    let privacyChecked = false;
    let isFormValid = false;

    let emailMsg = ''
    let passwordMsg = ''
    let confirmPwdMsg = ''
  
    const validateForm = () => {
      // 유효성 검사 등 필요한 로직 수행
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isEmailValid = emailRegex.test(email);
      emailMsg = isEmailValid ? "가능" : "이메일 형식이 틀림";


      // Password validation
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/;
      const isPasswordValid = passwordRegex.test(password);
      passwordMsg = isPasswordValid ? "가능" : "비번은 6글자 이상, 소문자 대문자 특수문자 숫자 하나씩 포함";

      // Password confirmation validation
      const isPasswordConfirmed = password === confirmPassword;
      confirmPwdMsg = isPasswordConfirmed ? "일치" : "다름"

      // Checkboxes validation
      const areCheckboxesChecked = serviceChecked && privacyChecked;
      if(serviceChecked === true && privacyChecked === true) {
        allChecked = true;
      }

      // Form validation
      isFormValid = isEmailValid && isPasswordValid && isPasswordConfirmed && areCheckboxesChecked;
  
      onMount(() => {
        validateForm();
      });
    };

    

    const handleEmailChange = () => {
        validateForm();
    };

    const handlePasswordChange = () => {
        validateForm();
    };

    const handleConfirmPwdChange = () => {
      validateForm();
    }

    const handleCheckboxChange = () => {
        validateForm();
    };

    const handleCheckAll = () => {
        serviceChecked = privacyChecked = allChecked;
        validateForm();
    };

    const handleSubmit = () => {
        // 유효성 검사 등 필요한 로직 수행
      
        // 다음 페이지로 이동
        navigate("/join/step3");
    };

</script>

<div class="page-container">
  <div class="page-title">회원가입</div>
  <form method="post" class="signup-section">
      <div class="info-section">
          <label for="email">이메일</label>
          <input type="email" id="email" bind:value={email} on:input={handleEmailChange} required placeholder="이메일을 입력하세요">
          <p>{emailMsg}</p>
          <label for="password">비밀번호</label>
          <input type="password" id="password" bind:value={password} on:input={handlePasswordChange} required placeholder="비밀번호를 입력하세요">
          <p>{passwordMsg}</p>
          <label for="confirmPassword">비밀번호 확인</label>
          <input type="password" id="confirmPassword" bind:value={confirmPassword} on:input={handleConfirmPwdChange} required placeholder="비밀번호를 다시 입력하세요">
          <p>{confirmPwdMsg}</p>
        </div>
      <div class="terms-section">
        <label for="allChecked">
          <input type="checkbox" bind:checked={allChecked} on:change={handleCheckAll}>
          <h3>전체 동의</h3>
        </label>
        <label for="serviceChecked">
        <input type="checkbox" bind:checked={serviceChecked} on:change={handleCheckboxChange}>
        서비스이용약관
        <p>자세히</p>
        </label>
        <label for="privacyChecked">
        <input type="checkbox" bind:checked={privacyChecked} on:change={handleCheckboxChange}>
        개인정보수집 및 이용동의
        <p>자세히</p>
      </label>
      </div>  
  </form>
  <button type="submit" disabled={!isFormValid} on:click={handleSubmit}>다음</button>
  <p class="login-section">계정이 있으신가요?   <a href="/login">로그인</a>하기</p>
</div>


<style>
  .page-container {
          top: 44%;
          left: 50%;
          width: 360px;
          height: 524px;
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
          opacity: .8;
          box-shadow: 0 0 10px;
      }

      .page-title {
          margin-top: 16px;
          margin-bottom: 40px;
      }
  
      label {
          text-align: left;
          margin-left: 36px;
          margin-bottom: 4px;
          font-size: 14px;
      }
  
      .info-section input {
          width: 260px;
          height: 32px;
          border-radius: 8px;
          font-size: 12px;
          color: #b5b5b5;
          margin-bottom: 10px;
      }

      .info-section p {
        font-size: 12px;
        font-weight: 550;
        color: #c89e50;
        margin: 0;
      }

      .terms-section {
        margin-top: 28px;
      }

      .terms-section input {
        width: 36px
      }


      .terms-section h3 {
        display: inline;
        font-size: 14px;
        font-weight: 600;
        color: #ac2525
      }

      .terms-section p {
        display: inline;
        font-size: 12px;
        color: #ac2525
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

</style>