<script>
    import { onMount } from "svelte";
    import Pagination from "../Pagination.svelte";
    import TransactionRow from "../transaction/TransactionRow.svelte";
    import CertifyTransactionRow from "./CertifyTransactionRow.svelte";
    import CertifyTransactionItem from "./CertifyTransactionItem.svelte";
  </script>
  
  <div class="page-container">
    <section class="dashboard-section">
      <h3 class="page-title">거래내역 확인서</h3>
      <div class="filter-container">
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
              <option value="">이오스</option>
            </select>
          </ul>
  
          <ul>
            <p>날짜</p>
            <input type="date" class="date-box" />
            <input type="date" class="date-box" />
          </ul>
  
          <ul>
            <p />
            <button>조회</button>
          </ul>
        </div>
      </div>
  
      <h3 class="page-title">조회 결과</h3>
      <div class="download-section">
        <button>국문 다운로드</button>
        <button>영문 다운로드</button>
      </div>
      <div class="result-container">
        <div class="info-filter-section-up">
          <ul>
            <p>고객명</p>
            <input type="text" placeholder="주식회사 마인드시프트" />
          </ul>
  
          <ul>
            <p>주민번호</p>
            <input type="text" placeholder="123-45-67890" />
          </ul>
  
          <ul>
            <p>조회기간</p>
            <input type="text" placeholder="2023/01/01 ~ 2023/12/24" />
          </ul>
        </div>
        <div class="info-filter-section-down">
          <ul>
            <p>자산명</p>
            <input type="text" placeholder="BTC" />
          </ul>
          <ul>
            <p>지갑주소</p>
            <input type="text" placeholder="2adredfewue4324533sd" />
          </ul>
        </div>
        <div class="bottom-section">
          <div class="list-section">
            <CertifyTransactionRow />
            <CertifyTransactionItem />
            <CertifyTransactionItem />
            <CertifyTransactionItem />
            <CertifyTransactionItem />
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
  
    .filter-container {
      width: 100%;
      height: 160px;
      box-shadow: 0 4px 4px -4px;
      margin-bottom: 56px;
    }
  
    .filter-section {
      width: 96%;
      height: 100px;
      padding: 6px;
      margin: auto;
      display: flex;
      border-radius: 16px;
      border: 1.6px solid #c6c2c2;
      background-color: #e1e1e1;
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
  
    .download-section {
      position: absolute;
      float: right;
      white-space: nowrap;
      right: 0;
      margin-top: -64px;
      margin-right: 50px;
    }
  
    .download-section button {
      margin-left: 10px;
    }
  
    .result-container {
      width: 100%;
      height: 1000px;
      margin: auto;
      display: flex;
      flex-direction: column; /* 세로로 배치 */
      margin-top: 40px;
      margin-bottom: 20px;
      border-radius: 16px;
      border: 1.6px solid #c6c2c2;
      background-color: #e1e1e1;
    }
  
    .result-container input {
      background-color: #b5b5b5;
      color: #fff
    }
  
    .info-filter-section-up,
    .info-filter-section-down {
      width: 96%;
      height: 48px;
      margin-top: 0px;
      margin-bottom: 20px;
      margin: auto;
      padding: 6px;
      display: flex;
    }
  
    .info-filter-section-down {
      height: 100px;
      display: flex;
      box-shadow: 0 4px 4px -4px;
    }
  
    .bottom-section {
      width: 96%;
      height: 600px;
      margin: auto;
      display: flex;
    }
  
    .list-section {
      position: absolute;
      top: 640px;
      width: 90%;
      height: 560px;
      margin: 0 auto;
      overflow: scroll;
    }
  
    .pagination {
      width: 90%;
      height: 60px;
      margin-bottom: 20px;
    }
  </style>
  