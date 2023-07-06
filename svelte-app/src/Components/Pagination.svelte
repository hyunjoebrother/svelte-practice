<script>
  import { onMount } from "svelte";
  import ArrowLeft from "svelte-material-icons/ArrowLeft.svelte";
  import ArrowRight from "svelte-material-icons/ArrowRight.svelte";

  let currentPage = 1;
  let itemsPerPage = 10;
  let totalPages = 1;
  export let cardLength; // 각 컴포넌트마다 속성으로 받아오기
  export let cardData; 
  export let items = [];

  onMount(() => {
    totalPages = Math.ceil(cardLength / itemsPerPage);
    updateItems();
  });

  const updateItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    items = cardData.slice(startIndex, endIndex);

  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      currentPage = page;
      updateItems();
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      currentPage--;
      updateItems();
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      currentPage++;
      updateItems();
    }
  };
</script>

<div class="pagination">
  <button
    class="arrow-btn"
    on:click={goToPreviousPage}
    disabled={currentPage === 1}
  >
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
  <button
    class="arrow-btn"
    on:click={goToNextPage}
    disabled={currentPage === totalPages}
  >
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
