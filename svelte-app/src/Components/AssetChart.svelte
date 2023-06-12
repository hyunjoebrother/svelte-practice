<script>
  import { onMount } from "svelte";
  import { Chart } from "chart.js/auto";

  let chartInstance;

  onMount(() => {
    const ctx = document.getElementById("assetChart").getContext("2d");
    chartInstance = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Bitcoin", "Ether", "Coin3", "Coin4"],
        datasets: [
          {
            label: "Asset Dataset",
            data: [12, 19, 3],
            backgroundColor: ["grey", "#b9b9b9", "#767171", "#333"],
            borderColor: "#ffffff00",
            borderWidth: 1,
          },
        ],
      },
      options: {plugins: {
          legend: {
            position: "right",
            labels: {
              font: {
                size: 12
              },
              padding: 20 // 오른쪽으로 조금 이동
            }
          }
        },
        layout: {
            
          padding: 
          {
            top: 40,
            bottom: 40
          }
        }
      }
    });
  });
</script>

<div class="chart-container">
  <canvas id="assetChart" />
</div>

<style>
  .chart-container {
    width: 100%;
    height: 320px;
  }
</style>
