<script>
    import AssetChart from "./AssetChart.svelte";
    import AssetChartCard from "./AssetChartCard.svelte";
  </script>
  
  <div class="asset-container">
    <diiv class="asset-wrapper">
      <div class="title">자산현황</div>
      <div class="box-container">
        <div class="chart-section">
          <AssetChart />
        </div>
        <div class="info-section">
          <AssetChartCard />
          <AssetChartCard />
          <AssetChartCard />
          <AssetChartCard />
        </div>
      </div>
    </diiv>
  </div>
  
  <style>
    .asset-container {
      position: relative;
      display: flex;
      float: left;
      width: 43%;
      height: 720px;
      margin-top: 10px;
      box-shadow: 0 4px 4px -4px;
      /* background-color: #ff6565; */
    }
  
    .asset-wrapper {
      padding: 16px;
    }
  
    .title {
      display: flex;
      margin-left: 16px;
      margin-bottom: 20px;
      font-size: 16px;
      font-weight: 500;
    }
  
    .box-container {
      width: 480px;
      height: 640px;
      border-radius: 12px;
      background-color: #d4d0d0;
      box-shadow: 0 0 4px;
    }
  
    .chart-section {
      width: 340px;
      margin: auto;
    }
  
    .info-section {
      width: 94%;
      position: absolute;
      top: 336px;
    }
  </style>
  