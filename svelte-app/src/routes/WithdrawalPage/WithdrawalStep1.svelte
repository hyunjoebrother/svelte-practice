<script>
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";
  
    let withdrawalAmount = "";
    let selectedWallet = "withdrawal-null";
    let isFormValid = false;
  
    const changeWallet = () => {
      selectedWallet = document.getElementById("select-withdrawal-asset").value;
    };
  
    const handleBack = () => {
      navigate("/dashboard");
    };
  
    const handleSubmit = () => {
      if(withdrawalAmount >= 100) {
          navigate("/withdrawal/step3-1");
      } else {
          navigate("/withdrawal/step2-1");
      }
    };
  
    const handleAmountChange = () => {
      validateForm();
    };
  
    const validateForm = () => {
      const isValidAmount = withdrawalAmount > 0;
      isFormValid = isValidAmount;
  
      onMount(() => {
        validateForm();
      });
    };
  </script>
  
  <div class="page-container">
    <h3 class="page-title">출금하기</h3>
    <span class="back" on:click={handleBack}>대시보드로</span>
    <div class="select-section">
      <p class="select-title">출금 자산</p>
      <select
        name="withdrawal-asset"
        id="select-withdrawal-asset"
        bind:value={selectedWallet}
        on:change={changeWallet}
      >
        <option value="withdrawal-null" selected>출금자산을 선택하세요.</option>
        <option value="withdrawal-btc">비트코인 - BTC</option>
        <option value="withdrawal-eth">이더리움 - ETH</option>
        <option value="withdrawal-eos">이오스 - EOS</option>
      </select>
    </div>
  
    {#if selectedWallet !== "withdrawal-null"}
      <div class="amount-section">
        <p class="amount-title">출금 수량</p>
        <input
          type="text"
          id="withdrawalAmount"
          bind:value={withdrawalAmount}
          on:input={handleAmountChange}
          class="withdrawal-amount"
          placeholder="수량을 입력하세요"
        />
  
        <p class="able-amount-title">
          출금 가능 수량:
          {#if selectedWallet === "withdrawal-btc"}
            <span id="withdrawal-btc" class="select-wallet">123.1111 btc</span>
          {:else if selectedWallet === "withdrawal-eth"}
            <span id="withdrawal-eth" class="select-wallet">456.1111 eth</span>
          {:else if selectedWallet === "withdrawal-eos"}
            <span id="withdrawal-eos" class="select-wallet">789.1111 eos</span>
          {/if}
        </p>
      </div>
  
      <button
        type="submit"
        class="submit-btn"
        on:click={handleSubmit}
        disabled={!isFormValid}
      >
        다음
      </button>
    {/if}
  </div>
  
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
      margin-bottom: 48px;
    }
  
    .back {
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
  
    .select-section {
    }
  
    select {
      width: 260px;
      height: 32px;
      border-radius: 8px;
      font-size: 12px;
      color: #b5b5b5;
    }
  
    .amount-section {
      margin-top: 20px;
      margin-bottom: 40px;
    }
  
    .able-amount-title {
      float: left;
      margin-left: 56px;
      margin-top: 0px;
      font-size: 8px;
      color: #8a8a8a;
    }
  
    .select-wallet {
      width: 120px;
      height: 120px;
      margin: 0 auto;
      margin-top: 12px;
      margin-bottom: 20px;
    }
  
    input {
      width: 260px;
      height: 32px;
      border-radius: 8px;
      font-size: 12px;
      color: #b5b5b5;
    }
  
    .submit-btn {
      width: 240px;
      height: 40px;
      margin-top: 32px;
      font-size: 12px;
    }
  </style>
  