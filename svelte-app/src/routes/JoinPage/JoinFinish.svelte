<script>
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";
    import Background from "../../components/Background.svelte";
  
    const handleSubmit = () => {
      // 유효성 검사 등 필요한 로직 수행
  
      // 다음 페이지로 이동
      navigate("/login");
    };
  </script>
  
  <div class="page-container">
    <h3 class="page-title">회원가입 완료</h3>
    <div class="text-section">
      <p>회원가입이 완료되었습니다.</p>
      <p>축축</p>
    </div>
    <button on:click={handleSubmit}>확인</button>
  </div>
  
  <Background />
  
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
      margin-bottom: 30px;
    }

    .text-section {
        padding: 20px;
        margin-bottom: 20px;
    }
  
    p {
      font-size: 12px;
      text-align: left;
      margin-left: 12px;
    }
  
    button {
      width: 240px;
      height: 40px;
      margin-top: 20px;
      font-size: 12px;
    }
  </style>
  