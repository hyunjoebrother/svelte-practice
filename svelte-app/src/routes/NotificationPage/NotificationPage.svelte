<script>
    import Pagination from "../Pagination.svelte";
  </script>
  
  <div class="page-container">
    <section class="dashboard-section">
      <h3 class="page-title">공지사항</h3>
      <div class="notice-container">
        <div class="search-section">
          <ul>
            <input type="text" placeholder="검색어를 입력하세요." />
          </ul>
          <ul>
            <button>검색</button>
          </ul>
        </div>
  
        <div class="result-section">
          <div class="list-section">
              <NotificationRow />
              <NotificationItem />
              <NotificationItem />
              <NotificationItem />
              <NotificationItem />
              <NotificationItem />
              <NotificationItem />
              <NotificationItem />
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
  
    .notice-container {
      width: 100%;
      height: 100%;
      margin: auto;
      border-radius: 16px;
      border: 1.6px solid #c6c2c2;
      background-color: #e1e1e1;
    }
  
    .search-section {
      width: 96%;
      height: 88px;
      padding: 6px;
      margin: auto;
      display: flex;
      margin-top: 20px;
      box-shadow: 0 4px 4px -4px;
    }
  
    input {
      width: 260px;
      height: 32px;
      border-radius: 8px;
      font-size: 12px;
      color: #b5b5b5;
    }
  
    button {
      width: 120px;
      height: 32px;
      margin-left: 60px;
      font-size: 12px;
      color: #fff;
      background-color: #b5b5b5;
      border-radius: 8px;
    }
  
    .result-section {
      width: 96%;
      height: 600px;
      margin: auto;
      display: flex;
    }
  
    .list-section {
      position: absolute;
      top: 188px;
      width: 90%;
      height: 560px;
      margin: 0 auto;
      overflow: scroll;
    }
  
    .pagination {
      width: 90%;
      height: 60px;
      margin: auto;
      margin-bottom: 20px;
    }
  </style>
  