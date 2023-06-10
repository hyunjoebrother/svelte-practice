<script>
    let shown = false;
    export function show() {
      shown = true;
    }
    export function hide() {
      shown = false;
    }
  </script>
  
  <svelte:window
    on:keydown={(e) => {
      if (e.keyCode === 27) {
        hide();
      }
    }}
  />
  
  {#if shown}
    <div class="modal-wrapper">
      <div class="modal-section">
        <span class="close" on:click={() => hide()}>X </span>
        <slot />
      </div>
      <div class="modal-dimmed" on:click={() => hide()} />
      </div>
  {/if}
  
  <style>
    .modal-wrapper {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 999;
    }
  
    .modal-section {
      position: relative;
      width: 420px;
      height: 320px;
      min-height: 150px;
      padding-bottom: 150px;
      background-color: #fff;
      box-shadow: 0 0 10px;
      z-index: 999;
      margin: auto;
      padding: 8px;
      margin-top: 180px;
      overflow-y: hidden;
    }
  
    .modal-dimmed {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #000;
      opacity: 0.3;
    }
  
    .close {
      float: right;
      cursor: pointer;
    }
  </style>
  