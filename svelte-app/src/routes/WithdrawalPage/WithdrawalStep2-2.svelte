<script>
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";
      import Modal from "../../components/Modal.svelte";
  
    let withdrawalAddress = "";
    let withdrawalMemo = "";
    let isFormValid = false;
    let modal;
  
    const handleBack = () => {
      navigate("/withdrawal/step2-1");
    };
  
    const handleNext = () => {
      navigate("/dashboard");
    };
  </script>
  
  <div class="page-container">
    <h3 class="page-title">출금 요약 - 수량 100 미만</h3>
    <div class="summary-section">
      <p class="withdrawal-asset">
        출금 자산
        <span>BTC</span>
      </p>
      <p class="withdrawal-address">출금 주소
          <span>dw2e3434d</span>
      </p>
      <p class="withdrawal-amount">출금 수량
          <span>1234.6565</span>
      </p>
      <p class="withdrawal-fee">출금 수수료
          <span>0.001BTC</span>
      </p>
      <p class="withdrawal-balance">거래 후 잔액
          <span>17.980831BTC</span>
      </p>
      <p class="withdrawal-memo">출금 요약 (옵션)
          <span>출금파이팅입니다</span>
      </p>
    </div>
  
    <div class="button-section">
      <ul>
        <li>
          <button on:click={handleBack}>이전</button>
        </li>
        <li>
          <button on:click={() => modal.show()}>다음</button>
        </li>
      </ul>
    </div>
  </div>
  
  <Modal bind:this={modal}>
      <div class="popup-title">출금 완료</div>
    <div class="text-section">
      출금 완료!<br />
      대시보드로 이동합니다.
    </div>
    <div class="modal-button-section">
      <button on:click={() => modal.hide()}>취소</button>
      <button on:click={handleNext}>확인</button>
    </div>
  </Modal>
  
  
  <style>
    .page-container {
      top: 44%;
      left: 50%;
      width: 320px;
      height: 480px;
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
      margin-bottom: 32px;
    }
  
    .summary-section {
      width: 90%;
      height: 240px;
      padding: 16px;
    }
  
    p {
      font-size: 12px;
      font-weight: 500;
      text-align: left;
      margin-left: 16px;
      margin-bottom: 24px;
    }
  
    span {
      color: #f9d133;
      font-weight: 550;
      margin-right: 16px;
      float: right;
      text-align: right;
    }
  
    .button-section li {
      list-style: none;
      display: block;
      float: left;
      margin: 10px;
    }
  
    .button-section button {
      width: 100px;
      height: 40px;
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
      margin-bottom: 36px;
      text-align: center;
      font-size: 14px;
      font-weight: 450;
    }
  
  
    .modal-button-section {
      margin-top: 60px;
      text-align: center;
    }
  
    .modal-button-section button {
      width: 180px;
      margin: 10px;
    }
  
  </style>
  