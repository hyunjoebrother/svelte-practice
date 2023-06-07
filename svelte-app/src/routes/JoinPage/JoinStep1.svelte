<script>
  import { navigate } from "svelte-routing";

  const handleNext = () => {
    // 유효성 검사 등 필요한 로직 수행

    // 다음 페이지로 이동
    navigate("/join/step2");
  };
</script>

<div class="page-container">
  <h3 class="page-title">회원 종류</h3>
  <div class="member-section">
      <ul>
          <li>
              <button on:click={handleNext}>개인</button>
          </li>
          <li>
              <button on:click={handleNext}>기업</button>
          </li>
      </ul>
  </div>
  <p class="login-section">계정이 있으신가요?   <a href="/login">로그인</a>하기</p>
</div>


<style>
  .page-container {
        top: 40%;
        left: 50%;
        width: 360px;
        height: 440px;
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
        margin-top: 20px;
        margin-bottom: 80px;
    }

    .member-section {
      position: absolute;
      margin-top: auto;
      width: 90%;
      height: 60px;
      align-items: center;
      text-align: center;
    }

    .member-section li {
      list-style: none;
      display: block;
      float: left;
      margin: 10px;
    }

    .member-section button {
      width: 120px;
      height: 80px;
      border: 1.6px solid #c89e50;
      background-color: #fff;
      border-radius: 10px;
    }

    .member-section button:hover {
      background-color: #c89e50;
      color: #fff;
    }

    .login-section {
      position: absolute;
      width: 90%;
      margin-top: 280px;
      font-size: 12px;
    }
    
</style>
      
