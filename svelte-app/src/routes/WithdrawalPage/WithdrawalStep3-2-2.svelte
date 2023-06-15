<script>
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";
    import Modal from "../../components/Modal.svelte";
  
    let isChecked = false
    let isFormValid = false;
    let modal;
  
    const handleBack = () => {
      navigate("/withdrawal/step3-2-1");
    };
  
    const handleNext = () => {
      navigate("/dashboard");
    };
  
    const handleCheckbox = () => {
      validateForm();
    };
  
    const validateForm = () => {
      isFormValid = isChecked === true;
  
      onMount(() => {
          validateForm()
      })
    }
  </script>
  
  <div class="page-container">
    <h3 class="page-title">출금 요약 - 수량 100 이상 개인</h3>
    <div class="summary-section">
      <p class="withdrawal-asset">
        출금 자산
        <span>BTC</span>
      </p>
      <p class="withdrawal-address">
        출금 주소
        <span>dw2e3434d</span>
      </p>
      <p class="withdrawal-exchange">
        출금 거래소
        <span>업비트</span>
      </p>
      <p class="withdrawal-memo">
        출금 요약 (옵션)
        <span>출금파이팅입니다</span>
      </p>
    </div>
  
    <div class="check-section">
      <input type="checkbox" class="checkbox" bind:checked={isChecked} on:change={handleCheckbox}>
      <span class="check-text">아래 출금 주의사항을 확인하였습니다.</span>
      <input type="text" class="memo-value" placeholder="주의사항 내용입니다" disabled/>
    </div>
  
    <div class="button-section">
      <ul>
        <li>
          <button on:click={handleBack}>이전</button>
        </li>
        <li>
          <button on:click={() => modal.show()} disabled={!isFormValid}>다음</button>
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
      height: 612px;
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
      height: 320px;
      padding: 16px;
  
      box-shadow: 0 4px 4px -4px;
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
  
    .check-section {
      width: 90%;
      padding: 16px;
      margin-top: 4px;
    }
  
    .checkbox {
      width: 14px;
      margin-left: 20px;
    }
    .check-text {
      color: #b5b5b5;
      font-size: 12px;
      font-weight: 550;
      text-align: center;
      margin-right: 60px;
    }
  
    .memo-value {
      height: 60px;
      overflow-y: scroll;
      width: 260px;
      height: 60px;
      border-radius: 8px;
      font-size: 12px;
      color: #b5b5b5;
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
      margin-top: -10px;
      margin-bottom: 10px;
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
  