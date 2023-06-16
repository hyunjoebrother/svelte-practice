<script>
    import ArrowLeft from "svelte-material-icons/ArrowLeft.svelte";
    import ArrowRight from "svelte-material-icons/ArrowRight.svelte";
  
    let currentPage = 1;
    let totalPages = 10;
  
    const goToPage = (page) => {
      if (page >= 1 && page <= totalPages) {
        currentPage = page;
      }
    };
  
    const goToPreviousPage = () => {
      if (currentPage > 1) {
        currentPage--;
      }
    };
  
    const goToNextPage = () => {
      if (currentPage < totalPages) {
        currentPage++;
      }
    };
  </script>
  
  <div class="pagination">
    <button class="arrow-btn" on:click={goToPreviousPage} disabled={currentPage === 1}>
      <ArrowLeft width={16} height={16} color={"blue"} />
    </button>
  
    {#each Array.from({ length: totalPages }, (_, i) => i + 1) as page}
      <button
        on:click={() => goToPage(page)}
        class:selected={page === currentPage}
      >
        {page}
      </button>
    {/each}
  
    <button class="arrow-btn" on:click={goToNextPage} disabled={currentPage === totalPages}>
      <ArrowRight width={16} height={16} color={"blue"} />
    </button>
  </div>
  
  <style>
    .pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
    }
  
    button {
      margin: 0 5px;
      padding: 5px 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: #fff;
      cursor: pointer;
    }
  
    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  
    .arrow-btn {
      border: none;
    }
  
    .selected {
      font-weight: bold;
      background-color: #ccc;
    }
  </style>
  