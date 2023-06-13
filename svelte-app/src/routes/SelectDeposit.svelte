<script>
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";
  
    let walletValue = "";
    let copied = false;
    let selectedWallet = "deposit-null";
    let eosMemo = "";
  
    const copyEOSmemo = () => {
      const input = document.getElementById("eosMemo");
  
      if (input) {
        input.select();
        document.execCommand("copy");
        input.blur();
        copied = true;
      }
    };
  
    const changeWallet = () => {
      selectedWallet = document.getElementById("select-deposit-asset").value;
    };
  
    const copyQRCode = () => {
      const input = document.getElementById("walletValue");
  
      if (input) {
        input.select();
        document.execCommand("copy");
        input.blur();
        copied = true;
      }
    };
  
    const handleBack = () => {
      navigate("/dashboard")
    }
  
    const handleSubmit = () => {
      // 유효성 검사 등 필요한 로직 수행
  
      // 다음 페이지로 이동
      navigate("/join/finish");
    };
  
    onMount(() => {
      copied = false;
    });
  </script>
  
  <div class="page-container">
    <h3 class="page-title">입금하기</h3>
    <span class="back" on:click={handleBack}>대시보드로</span>
    <div class="select-section">
      <p class="select-title">입금 자산</p>
      <select
        name="deposit-asset"
        id="select-deposit-asset"
        bind:value={selectedWallet}
        on:change={changeWallet}
      >
        <option value="deposit-null" selected>입금자산을 선택하세요.</option>
        <option value="deposit-btc">비트코인 - BTC</option>
        <option value="deposit-eth">이더리움 - ETH</option>
        <option value="deposit-eos">이오스 - EOS</option>
      </select>
    </div>
  
    {#if selectedWallet !== "deposit-null"}
      <div class="wallet-section">
        <p class="wallet-title">입금 주소</p>
        {#if selectedWallet === "deposit-btc"}
          <div id="deposit-btc" class="select-wallet">btc 지갑 주소</div>
        {:else if selectedWallet === "deposit-eth"}
          <div id="deposit-eth" class="select-wallet">eth 지갑 주소</div>
        {:else if selectedWallet === "deposit-eos"}
          <div id="deposit-eos" class="select-wallet">eos 지갑 주소</div>
          <input
            type="text"
            id="eosMemo"
            bind:value={eosMemo}
            class="eos-memo"
            placeholder="EOS 고정 메모"
          />
          <button on:click={copyEOSmemo}>복사</button>
        {/if}
        <input
          type="text"
          id="walletValue"
          bind:value={walletValue}
          class="wallet-value"
          placeholder="지갑 주소 값"
        />
        <button on:click={copyQRCode}>복사</button>
      </div>
  
      {#if copied}
        <p class="copy-msg">QR코드를 복사했습니다!</p>
      {/if}
  
      <div class="memo-section">
        <p class="memo-title">입금 시 유의사항</p>
        <input type="text" class="memo-value" placeholder="유의사항 입력하세요" />
      </div>
    {/if}
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
      opacity: 0.8;
      box-shadow: 0 0 10px;
    }
  
    .page-title {
      margin-top: 16px;
      margin-bottom: 24px;
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
  
    .wallet-section {
      margin-bottom: 20px;
    }
  
    .wallet-title {
      margin-top: 20px;
    }
  
    .wallet-value {
      background-color: #b5b5b5;
      color: #fff;
    }
  
    .select-wallet {
      width: 120px;
      height: 120px;
      background-color: #978f8f;
      margin: 0 auto;
      margin-top: 12px;
      margin-bottom: 20px;
    }
  
    .copy-msg {
      color: #f9d133;
      font-weight: 550;
    }
  
    .wallet-section button {
      font-size: 10px;
      margin-left: 4px;
      width: 30px;
      height: 20px;
    }
  
    .memo-section {
    }
  
    .memo-section p {
      margin-bottom: 20px;
    }
  
    .memo-title {
      margin-bottom: 0;
    }
  
    input {
      width: 260px;
      height: 32px;
      border-radius: 8px;
      font-size: 12px;
      color: #b5b5b5;
    }
  
    .eos-memo {
      background-color: #b5b5b5;
      color: #fff;
    }
  
    .memo-value {
      height: 60px;
      overflow-y: scroll;
    }
  </style>
  