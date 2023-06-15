<script>
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";
  
    let withdrawalAddress = "";
    let withdrawalMemo = "";
    let isFormValid = false;
    let selectedWallet = "withdrawal-null";
  
    const handleWallet = () => {
      navigate("/dashboard");
    };
  
    const handleBack = () => {
      navigate("/withdrawal/step3-1");
    };
  
    const handleNext = () => {
      navigate("/withdrawal/step3-3-2");
    };
  
    const handleAddressChange = () => {
      selectedWallet = document.getElementById("select-withdrawal-asset").value;
    };
  
    const handleMemoChange = () => {
      validateForm();
    };
  
    const validateForm = () => {
      const isValidAddress = withdrawalAddress !== 0;
      isFormValid = isValidAddress;
  
      onMount(() => {
        validateForm();
      });
    };
  </script>
  
  <div class="page-container">
    <h3 class="page-title">수량 100 이상 법인</h3>
  
    <span class="handle-wallet" on:click={handleWallet}>지갑관리</span>
    <div class="withdrawal-section">
      <p class="withdrawal-address">출금 주소</p>
      <select
        name="withdrawal-address"
        id="select-withdrawal-asset"
        bind:value={selectedWallet}
        on:change={handleAddressChange}
      >
        <option value="withdrawal-null" selected>출금주소를 선택하세요.</option>
        <option value="withdrawal-btc">비트코인 - BTC</option>
        <option value="withdrawal-eth">이더리움 - ETH</option>
        <option value="withdrawal-eos">이오스 - EOS</option>
      </select>
  
      <p class="withdrawal-exchange">출금 거래소</p>
      <input
        type="text"
        id="withdrawalExchange"
        class="withdrawal-fixed"
        placeholder="업비트"
      />
  
      <div class="radio-section">
        <span class="withdrawal-name">법인명 (국문)</span>
        
        <div class="radio-buttons">
          <label for="radio-personal" class="radio-label">
            <input
              type="radio"
              class="name-radio"
              value="개인"
              onclick="return(false)"
            />개인
          </label>
          <label for="radio-coporate" class="radio-label">
            <input
              type="radio"
              class="name-radio"
              value="법인"
              checked="checked"
            />법인
          </label>
        </div>
  
      </div>
        <input
          type="text"
          id="withdrawalName"
          class="withdrawal-fixed"
          placeholder="마인드"
        />
      <p class="withdrawal-memo">출금 요약 (옵션)</p>
      <input
        type="text"
        id="withdrawalMemo"
        bind:value={withdrawalMemo}
        on:input={handleMemoChange}
        class="withdrawal-memo"
        placeholder="메모를 입력하세요"
      />
    </div>
  
    <div class="button-section">
      <ul>
        <li>
          <button on:click={handleBack}>이전</button>
        </li>
        <li>
          <button on:click={handleNext}>다음</button>
        </li>
      </ul>
    </div>
  </div>
  
  <style>
    .page-container {
      top: 50%;
      left: 50%;
      width: 360px;
      height: 680px;
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
  
    .handle-wallet {
      margin-right: 56px;
      font-size: 12px;
      color: #f9d133;
      font-weight: 550;
      cursor: pointer;
      float: right;
    }
  
    p {
      font-size: 12px;
      text-align: left;
      margin-left: 12px;
    }
  
    select {
      width: 260px;
      height: 32px;
      border-radius: 8px;
      font-size: 12px;
      color: #b5b5b5;
    }
  
    input {
      width: 260px;
      height: 32px;
      border-radius: 8px;
      font-size: 12px;
      color: #b5b5b5;
    }
  
    .withdrawal-fixed {
      background-color: #b5b5b5;
      color: #fff;
    }
  
    .radio-section {
      width: 80px;
      height: 30px;
      font-size: 10px;
      display: flex;
      align-items: center;
      margin-top: 10px;
    }
  
    .withdrawal-name {
      font-size: 12px;
      margin-left: 12px;
     
      white-space: nowrap; /* 수직정렬된 걸 수평으로 */
    }
  
    .radio-section label {
      display: flex;
      align-items: center;
      white-space: nowrap;
    }
  
    #withdrawalName {
      align-items: center;
      justify-content: center;
    }
  
    .radio-section .radio-buttons {
      gap: 8px;
      display: flex;
      align-items: center;
      margin-left: 166px;
      accent-color: #7f7d7d; /* radio 색상 */
    }
  
    .name-radio {
      width: 12px;
      display: flex;
      text-align: right;
      float: right;
      margin-right: 4px;
    }
  
    .button-section li {
      list-style: none;
      display: block;
      float: left;
      margin: 10px;
    }
  
    .button-section button {
      width: 120px;
      height: 40px;
      margin-top: 0px;
      margin-bottom: 10px;
      font-size: 12px;
    }
  </style>
  