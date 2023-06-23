<script>
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";
  
    let selectedCoin = "coin-asset-null";
    let selectedExchange = "exchange-asset-null";
    let exchangeOption = "";
    let isMember = "personal";
  
    var selectEth = [
      "빗썸",
      "업비트",
      "바이낸스",
      "코인베이스",
      "메타마스크",
      "개인지갑",
      "해외지갑",
    ];
    var selectUsdt = [
      "바이낸스",
      "코인베이스",
      "메타마스크",
      "개인지갑",
      "해외지갑",
    ];
    var selectTrx = [
      "빗썸",
      "업비트",
      "바이낸스",
      "코인베이스",
      "메타마스크",
      "개인지갑",
      "해외지갑",
    ];
  
    const handleCoin = (event) => {
      selectedCoin = event.target.value;
  
      if (selectedCoin === "coin-asset-eth") {
        exchangeOption = selectEth;
      } else if (selectedCoin === "coin-asset-usdt") {
        exchangeOption = selectUsdt;
      } else if (selectedCoin === "coin-asset-trx") {
        exchangeOption = selectTrx;
      } else {
        exchangeOption = [];
      }
    };
  
    const handleExchange = (event) => {
      selectedExchange = event.target.value;
    };
  
    const handleMember = (member) => {
      isMember = member;
    };
  
    const handleBack = () => {
      navigate("/dashboard");
    };
  
    const handleSubmit = () => {
      navigate("/dashboard");
    };
    let file = null;
  
    function handleFileSelect(event) {
      const selectedFile = event.target.files[0];
      file = selectedFile;
    }
  
    function handleFileDrop(event) {
      event.preventDefault();
  
      const droppedFile = event.dataTransfer.files[0];
      file = droppedFile;
    }
  
    function handleFileDragOver(event) {
      event.preventDefault();
    }
    const validateForm = () => {
      onMount(() => {
        validateForm();
      });
    };
  </script>
  
  <div class="page-container">
    <h3 class="page-title">주소 등록</h3>
    <div class="select-section">
      <p class="select-title">가상 자산</p>
      <select
        name="coin-asset"
        id="select-coin-asset"
        bind:value={selectedCoin}
        on:change={handleCoin}
      >
        <option value="coin-asset-null" selected>자산종류 선택</option>
        <option value="coin-asset-eth">이더리움</option>
        <option value="coin-asset-btc">비트코인</option>
        <option value="coin-asset-sol">솔라나</option>
        <option value="coin-asset-xrp">리플</option>
        <option value="coin-asset-usdt">테더</option>
        <option value="coin-asset-trx">트론</option>
      </select>
  
      <label for="" class="label-title">주소 이름</label>
      <input type="text" placeholder="지갑 이름 입력" />
  
      <label for="" class="label-title">출금 주소</label>
      <input type="text" placeholder="주소 입력" />
  
      <p class="select-title">거래소</p>
      <select
        name="exchange-asset"
        id="select-exchange-asset"
        bind:value={selectedExchange}
        on:change={handleExchange}
      >
        <option value="exchange-asset-null" selected>거래소 선택</option>
        {#each exchangeOption as option}
          <option value={option}>{option}</option>
        {/each}
      </select>
    </div>
  
    {#if selectedExchange !== "exchange-asset-null"}
      <div class="type-section">
        <p class="type-title">유형</p>
        <ul>
          <li>
            <button
              on:click={() => handleMember("personal")}
              class={isMember === "personal" ? "active" : ""}>개인</button
            >
          </li>
          <li>
            <button
              on:click={() => handleMember("corporate")}
              class={isMember === "corporate" ? "active" : ""}>법인</button
            >
          </li>
        </ul>
      </div>
      {#if isMember === "personal" && (selectedExchange === "빗썸" || selectedExchange === "업비트")}
        <div class="type-section">
          <p class="type-title">소유 구분</p>
          <ul>
            <li>
              <button>본인</button>
            </li>
            <li>
              <button>타인</button>
            </li>
          </ul>
        </div>
        <p>성명</p>
        <input placeholder="이름을 입력하세요." />
      {:else if isMember === "personal" && selectedExchange !== "빗썸" && selectedExchange !== "업비트"}
        <div class="type-section">
          <p class="type-title">소유 구분</p>
          <ul>
            <li>
              <button>본인</button>
            </li>
            <li>
              <button disabled>타인</button>
            </li>
          </ul>
        </div>
        <p>영문 성명</p>
        <input placeholder="이름을 입력하세요." />
        
        <p>자료 업로드</p>
        <div
          class="dropfile-section"
          on:drop={handleFileDrop}
          on:dragover={handleFileDragOver}
        >
  
  
          {#if file}
            <p>첨부된 파일: {file.name}</p>
          {:else}
          <label for="dropfile-upload" class="dropfile-label">
            <p>Drag and Drop a File Here</p></label>
          {/if}
  
          <input
            class="dropfile-input"
            type="file"
            accept="image/*"
            on:change={handleFileSelect}
            id="dropfile-upload"
          />
  
        </div>
  
      <div class="button-section">
        <ul>
          <li>
            <button on:click={handleBack}>취소</button>
          </li>
          <li>
            <button type="submit" on:click={handleSubmit}>등록하기</button>
          </li>
        </ul>
      </div>
    {/if}
  </div>
  
  <style>
    .page-container {
      top: 54%;
      left: 50%;
      width: 360px;
      height: 580px;
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
  
    p,
    label {
      font-size: 12px;
      text-align: left;
      margin-left: 60px;
      margin-bottom: 6px;
    }
  
    .label-title {
      margin-top: 14px;
    }
  
    .select-section {
    }
  
    select {
      width: 240px;
      height: 32px;
      border-radius: 8px;
      font-size: 12px;
      color: #b5b5b5;
    }
  
    input {
      width: 240px;
      height: 32px;
      border-radius: 8px;
      font-size: 12px;
      color: #b5b5b5;
    }
  
    .type-section {
      position: relative;
      margin-top: 18px;
      width: 100%;
      height: 100px;
      margin: auto;
      align-items: center;
      text-align: center;
    }
  
    .type-section ul {
      margin-left: 16px;
      margin-top: 0px;
    }
  
    .type-section li {
      list-style: none;
      display: block;
      float: left;
      margin: 10px;
    }
    .type-section button {
      width: 108px;
      height: 30px;
      font-size: 10px;
    }
  
    .type-section button.active {
      background-color: #e0e0e0;
    }
  
    .dropfile-section {
      position: relative;
      margin: 0 auto;
      margin-bottom: 20px;
      width: 240px;
      height: 180px;
      border: 2px dashed gray;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      cursor: pointer;
    }
  
    .dropfile-input {
      display: none;
    }
  
    .dropfile-label {
      margin-top: 10px;
      margin: auto;
      margin-right: 40px;
      text-align: center;
      cursor: pointer;
  
    }
  
    .button-section {
      position: relative;
      width: 100%;
      margin-top: 28px;
      align-items: center;
      text-align: center;
      display: flex;
      margin: 0 auto;
    }
  
    .button-section ul {
      margin-left: 16px;
      margin-top: 0px;
    }
  
    .button-section li {
      list-style: none;
      display: block;
      float: left;
      margin: 10px;
    }
  
    .button-section button {
      width: 108px;
      height: 30px;
      font-size: 10px;
    }
  </style>
  