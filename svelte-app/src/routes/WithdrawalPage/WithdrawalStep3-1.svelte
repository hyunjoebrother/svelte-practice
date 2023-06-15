<script>
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";
    import Background from "../../components/Background.svelte";
  
    const handlePersonal = () => {
      navigate("/withdrawal/step3-2-1");
    };
  
    const handleCorporate = () => {
      navigate("/withdrawal/step3-3-1");
    };
  </script>
  
  <div class="page-container">
    <h3 class="page-title">수량 100 이상 (회원 구분 테스트 페이지)</h3>
    <div class="member-section">
      <ul>
        <li>
          <button on:click={handlePersonal}>개인</button>
        </li>
        <li>
          <button on:click={handleCorporate}>기업</button>
        </li>
      </ul>
    </div>
  </div>
  <Background />
  
  <style>
    .page-container {
      top: 44%;
      left: 50%;
      width: 360px;
      height: 380px;
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
      margin-bottom: 40px;
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
      border: 1.6px solid #f9d133;
      background-color: #fff;
      border-radius: 10px;
    }
  
    .member-section button:hover {
      background-color: #f9d133;
      color: #fff;
    }
  
  </style>
  