<script>
    import RowCard from "./RowCard.svelte";
    import TransactionCard from "./TransactionCard.svelte";
  </script>
  
  <div class="transaction-container">
    <diiv class="transaction-wrapper">
      <a href="">더보기</a>
      <div class="title">최근 거래 내역</div>
      <div class="box-container">
        <div class="row-section">
        </div>
        <div class="info-section">
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
        </div>
      </div>
    </diiv>
  </div>
  
  <style>
    .transaction-container {
      position: relative;
      display: flex;
      float: right;
      width: 57%;
      height: 720px;
      margin-top: 10px;
      box-shadow: 0 4px 4px -4px;
      /* background-color: #8080e2; */
    }
  
    .transaction-wrapper {
      padding: 16px;
    }
  
    .title {
      display: flex;
      margin-left: 16px;
      margin-bottom: 20px;
      font-size: 16px;
      font-weight: 500;
    }
  
    a {
      font-size: 12px;
      font-weight: 550;
      color: #f9d133;
      margin-top: 6px;
      margin-right: 14px;
      float: right;
    }
  
    .box-container {
      width: 650px;
      height: 640px;
      border-radius: 12px;
      background-color: #d4d0d0;
      box-shadow: 0 0 4px;
    }
  </style>
  