<script>
    import FileEdit from "svelte-material-icons/FileEdit.svelte";
    import Delete from "svelte-material-icons/Delete.svelte";
    import Check from "svelte-material-icons/Check.svelte";
  
    let currentMemo = "기존 메모입니다.";
    let modifiedMemo = "-";
    let showUpdate = false;
    let showUpdateBtn = true;
  
    const handleBtnUpdate = () => {
      showUpdate = true;
      showUpdateBtn = false;
    };
  
    const clearMemo = () => {
      currentMemo = modifiedMemo;
      showUpdateBtn = false;
    };
  
    const modifyMemo = () => {
      const inputElement = document.getElementById("modifyMemo");
      if (inputElement) {
        inputElement.value = currentMemo;
      }
  
      showUpdate = false;
      showUpdateBtn = true;
    };
  </script>
  
  <div class="transaction-container">
    <div class="transaction-wrapper">
      <ul class="number">
        <p>1</p>
      </ul>
      <ul class="datetime">
        <p>2023/01/01 23:59:59</p>
      </ul>
      <ul class="transaction-type">
        <p>입금</p>
      </ul>
      <ul class="coin-name">
        <p>BTC</p>
      </ul>
      <ul class="coin-amount">
        <p>88888888.12345678</p>
      </ul>
      <ul class="withdrawal-memo">
        <p>{currentMemo}</p>
        {#if showUpdate}
          <div class="modify-section">
            <input
              type="text"
              bind:value={currentMemo}
              on:change={modifyMemo}
              id="modifyMemo"
              class="memo-modify"
              placeholder="메모를 입력하세요"
            />
            <button class="modify-clear" on:click={clearMemo}>
              <Delete width={14} height={14} color={"red"} />
            </button>
            <button class="modify-check" on:click={modifyMemo}>
              <Check width={14} height={14} color={"green"} />
            </button>
          </div>
        {/if}
      </ul>
      {#if showUpdateBtn}
        <div class="update-btn" on:click={handleBtnUpdate}>
          <FileEdit width={18} height={18} />
        </div>
      {/if}
    </div>
  </div>
  
  <style>
    .transaction-container {
      width: 1100px;
      height: 60px;
      position: relative;
      display: flex;
      margin: auto;
      margin-bottom: 12px;
      border-radius: 8px;
      box-shadow: 0 4px 4px -4px;
      align-items: center;
      justify-content: center;
      background-color: #f5f5f5;
    }
  
    .transaction-wrapper {
      margin: auto;
      text-align: center;
      font-size: 12px;
      margin-left: 12px;
    }
  
    .transaction-wrapper ul {
      display: block;
      float: left;
      margin-left: 10px;
    }
  
    .datetime {
      text-align: right;
    }
  
    .coin-name {
      font-weight: 550;
      margin-right: 12px;
    }
  
    .coin-amount {
      margin-left: 4px;
    }
  
    .txid {
      margin-right: 12px;
    }
    .withdrawal-memo {
      display: flex;
      white-space: nowrap;
      margin-left: 0px;
      margin-right: 28px;
    }
  
    .modify-section {
      position: absolute;
      float: right;
      white-space: nowrap;
      margin-top: -36px;
      margin-left: -26px;
    }
  
    input {
      width: 180px;
      height: 32px;
      border-radius: 8px;
      font-size: 12px;
      color: #b5b5b5;
    }
  
    .modify-section button {
      border: none;
    }
  
    .update-btn {
      position: absolute;
      box-sizing: border-box;
      width: 12px;
      height: 12px;
      float: right;
      margin: 0 auto;
      top: 22px;
      right: 36px;
    }
  </style>
  