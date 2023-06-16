<script>
    import { onMount } from "svelte";
    import TransactionItem from "./TransactionItem.svelte";
    import TransactionRow from "./TransactionRow.svelte";
  import Pagination from "../Pagination.svelte";
  
    let transactionCount = 0;
  
    const countComponents = () => {
      const components = document.querySelectorAll('.transaction-item');
      transactionCount = components.length;
  
  
    onMount(() => {
      countComponents()
    });
    };
  
  
  </script>
  
  <div class="page-container">
    <section class="dashboard-section">
      <h3 class="page-title">거래내역 조회</h3>
      <div class="transaction-container">
        <div class="filter-section">
          <ul>
            <p>구분</p>
            <select name="" id="">
              <option value="" selected>전체</option>
              <option value="">입금</option>
              <option value="">출금</option>
            </select>
          </ul>
  
          <ul>
            <p>자산명</p>
            <select name="" id="">
              <option value="" selected>전체</option>
              <option value="">비트코인</option>
              <option value="">이더리움</option>
            </select>
          </ul>
  
          <ul>
            <p>상태</p>
            <select name="" id="">
              <option value="" selected>전체</option>
              <option value="">Success</option>
            </select>
          </ul>
  
          <ul>
            <p>날짜</p>
            <input type="date" class="date-box" />
            <input type="date" class="date-box" />
          </ul>
        </div>
        <div class="input-section">
          <ul>
            <p>TXID</p>
            <input type="text" placeholder="TXID를 입력하세요" />
          </ul>
  
          <ul>
            <p>출금요약</p>
            <input type="text" placeholder="출금요약을 입력하세요" />
          </ul>
  
          <ul>
            <p />
            <button>조회</button>
          </ul>
        </div>
        <div class="bottom-section">
          <div class="value-section">
            <p class="value-count">총 {transactionCount}개</p>
            <button class="value-download">다운로드</button>
          </div>
          <div class="list-section">
            <TransactionRow />
            <TransactionItem class="transaction-item"/>
            <TransactionItem class="transaction-item"/>
            <TransactionItem class="transaction-item"/>
            <TransactionItem class="transaction-item"/>
            <TransactionItem class="transaction-item"/>
            <TransactionItem class="transaction-item"/>
            <TransactionItem class="transaction-item"/>
            <TransactionItem class="transaction-item"/>
          </div>
        </div>
        <div class="pagination">
          <Pagination />
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
  
    .transaction-container {
      width: 100%;
      height: 100%;
      border-radius: 16px;
      border: 1.6px solid #c6c2c2;
      background-color: #e1e1e1;
    }
    .filter-section {
      width: 96%;
      height: 66px;
      padding: 6px;
      margin: auto;
      display: flex;
    }
  
    p {
      font-size: 12px;
      text-align: left;
      margin-left: 8px;
      margin-bottom: 4px;
    }
  
    select {
      width: 88px;
      height: 32px;
      border-radius: 8px;
      font-size: 12px;
      color: #b5b5b5;
    }
  
    .input-section {
      width: 96%;
      height: 116px;
      padding: 6px;
      margin: auto;
      display: flex;
      box-shadow: 0 4px 4px -4px;
    }
  
    input {
      width: 260px;
      height: 32px;
      border-radius: 8px;
      font-size: 12px;
      color: #b5b5b5;
    }
  
    .date-box {
      width: 120px;
    }
  
    button {
      width: 120px;
      height: 32px;
      margin-top: 20px;
      margin-left: 100px;
      font-size: 12px;
      color: #fff;
      background-color: #b5b5b5;
      border-radius: 8px;
    }
  
    .bottom-section {
      width: 96%;
      height: 600px;
      margin-top: 10px;
      margin-bottom: 20px;
      margin: auto;
      display: flex;
    }
  
    .value-section {
      width: 96%;
      height: 48px;
      display: flex;
      white-space: nowrap;
    }
  
    .value-count {
      position: relative;
      align-items: center;
    }
  
    .value-download {
      float: right;
      margin: 0 auto;
      margin-top: 24px;
      margin-right: 0px;
    }
  
    .list-section {
      position: absolute;
      top: 348px;
      width: 90%;
      height: 500px;
      margin: 0 auto;
      overflow: scroll;
    }
  
    .pagination {
      width: 90%;
      height: 60px;
    }
  </style>
  