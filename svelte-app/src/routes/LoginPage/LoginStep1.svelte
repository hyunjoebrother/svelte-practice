<script>
      let email = ""
      let password = ""
      let token =""
  
      async function handleLogin() {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            withCredentials: true,
            body: JSON.stringify({ 'email':email, 'password': password })
        });
  
        if (response.ok) {
            console.log('로그인 입력 성공');
        } else {
            console.log('로그인 입력 실패');
        }
    }
  </script>
  
  <div class="page-container">
      <form class="login-section" on:submit|preventDefault={handleLogin}>
          <h3 class="page-title">로그인 페이지</h3>
          <div class="email-section">
              <label for="user_email">이메일</label>
              <input type="email" name="user_email" id="email" bind:value={email} placeholder="이메일을 입력하세요">
          </div>
          <div class="password-section">
              <label for="user_pwd">비밀번호</label>
              <input type="password" name="user_pwd" id="password" bind:value={password} placeholder="비밀번호를 입력하세요">
          </div>
          <button type="submit">로그인</button>
      </form>
      <div class="login-option-section">
        <ul>
            <li>
              <a href="/login/step2">비밀번호 재설정</a>
            </li>
            <li>
                <a href="/join">회원가입</a>
            </li>
            <li>2FA 재설정</li>
        </ul>
      </div>
  </div>
  
  <style>
      .page-container {
          top: 40%;
          left: 50%;
          width: 360px;
          height: 440px;
          margin: 0;
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
  
      .login-section {
          padding: 20px;
      }
  
      .page-title {
          margin-top: 20px;
          margin-bottom: 60px;
      }
      
      .login-section div {
          margin-top: 20px;
      }
  
      label {
          text-align: left;
          margin-left: 36px;
          margin-bottom: 6px;
          font-size: 14px;
      }
  
      input {
          width: 260px;
          height: 32px;
          border-radius: 8px;
          font-size: 12px;
          color: #b5b5b5
      }
  
      button {
          width: 80px;
          height: 30px;
          margin-top: 32px;
          font-size: 12px;
      }
  
      .login-option-section {
        position: absolute;
        margin-top: auto;
        width: 100%;
        height: 48px;
        align-items: center;
        text-align: center;
      }
  
      .login-option-section ul {
      }
  
      .login-option-section li {
        list-style: none;
        float: left;
        font-size: 12px;
        color: #807d7d;
        margin-left: 24px;
      }
  </style>