<script>
    import Profilecard from "./Profilecard.svelte";
</script>

<p>수평 방향으로 카드 컴포넌트 스크롤 캐러셀 컨테이너 컴포넌트</p>

<div class="container">
      <div class="wrapper">
          <div class="title">컨테이너 제목</div>
          <div class="info">내용내용</div>
          <div class="card-scroll-container">
              <!-- 카드 컴포넌트 -->
              <Profilecard />
              <Profilecard />
              <Profilecard />
              <Profilecard />
              <Profilecard />
        </div>
    </div>
</div>
  
  
  <style>
      .container {
          width: 100%;
          height: 228px;
          margin-top: 10px;
          box-shadow: 0 4px 4px -4px;
      }
  
      .wrapper {
          padding: 16px;
      }
  
      .title {
          display: flex;
          margin-left: 16px;
          font-size: 16px;
          font-weight: 500;
      }
  
      .info {
          margin-right: 60px;
          font-size: 14px;
          text-align: right;
      }
  
      .card-scroll-container {
          margin: 10px 0;
          display: flex;
          overflow-x: scroll;
          overflow-y: hidden;
          flex-wrap: nowrap;
      }
  </style>