<script>
    let activeTab = "tab1";
  
    const setActiveTab = (tab) => {
      activeTab = tab;
    };
  
    const handleCreate = () => {};
  </script>
  
  
  <div class="page-container">
    <section class="dashboard-section">
      <h3 class="page-title">
        지갑 관리
        <button on:click={handleCreate}>신규 지갑 추가</button>
      </h3>
      <div class="tab-container">
        <div class="tab-buttons">
          <button
            class={activeTab === "tab1" ? "active" : ""}
            on:click={() => setActiveTab("tab1")}
          >
            대기중
          </button>
          <button
            class={activeTab === "tab2" ? "active" : ""}
            on:click={() => setActiveTab("tab2")}
          >
            승인완료
          </button>
        </div>
        <div class="tab-content">
          {#if activeTab === "tab1"}
            <div class="tab1-content">
              첫번째 탭입니다아아ㅏ
            </div>
          {:else if activeTab === "tab2"}
            <div class="tab2-content">
              두번째 탭입니다!!!
              여기에 대충 컴포넌트 단위로 배치 가능
            </div>
          {/if}
        </div>
      </div>
    </section>
  </div>
  
  
  <style>
    .page-container {
      top: 92px;
      left: 170px;
      height: 90%;
      width: 1240px;
      margin: 0;
      position: absolute;
      background-color: #fff;
      box-shadow: 0 0 10px;
      overflow: auto;
    }
  
    .page-title {
      margin-left: 10px;
      margin-top: 12px;
      margin-bottom: 10px;
    }
  
    .dashboard-section {
      padding: 20px;
      background-color: #fff;
    }
  
    button {
      width: 100px;
      height: 32px;
      font-size: 10px;
      border-radius: 4px;
      margin-left: 12px;
      margin-bottom: 8px;
    }
  
    .tab-buttons {
      justify-content: left;
    }
  
    .tab-buttons button {
      padding: 8px 16px;
      margin: 4px;
      font-size: 12px;
      font-weight: 550;
      border: none;
      box-shadow: 0px -4px 4px -4px #f2f2f2;
      cursor: pointer;
    }
  
    .tab-buttons button.active {
      background-color: #e0e0e0;
    }
  
  </style>
  