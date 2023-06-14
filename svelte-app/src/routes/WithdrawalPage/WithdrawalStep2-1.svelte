<script>
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";
  
    let withdrawalAddress = ''
    let withdrawalMemo = ''
    let isFormValid = false;


    const handleBack = () => {
        navigate("/withdrawal/");
    }
  
    const handleNext = () => {
      navigate("/withdrawal/step2-2");
    };


  
    const handleAddressChange = () => {
    validateForm();
  };

  const handleMemoChange = () => {
    validateForm();
  };

  const validateForm = () => {
    const isValidAddress = withdrawalAddress !== 0;
    isFormValid = isValidAddress;

    onMount(() => {
      validateForm();
    });
}

</script>

<div class="page-container">
  <h3 class="page-title">수량 100 미만</h3>
  <div class="withdrawal-section">
    <p class="withdrawal-address">출금 주소</p>
    <input
      type="text"
      id="withdrawalAddress"
      bind:value={withdrawalAddress}
      on:input={handleAddressChange}
      class="withdrawal-address"
      placeholder="출금 주소를 입력하세요"
    />

    <p class="withdrawal-memo">출금 요약 (옵션)</p>
    <input
      type="text"
      id="withdrawalMemo"
      bind:value={withdrawalMemo}
      on:input={handleMemoChange}
      class="withdrawal-memo"
      placeholder="메모를 입력하세요"
    />
  </div>

  <div class="button-section">
    <ul>
      <li>
        <button on:click={handleBack}>이전</button>
      </li>
      <li>
        <button on:click={handleNext} disabled={!isFormValid}>다음</button>
      </li>
    </ul>
  </div>
</div>

<style>
  .page-container {
    top: 44%;
    left: 50%;
    width: 360px;
    height: 380px;
    margin: 0;
    padding: 20px;
    transform: translate(-50%, -50%);
    position: absolute;
    overflow: auto;
    margin-bottom: 120px;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #fff;
    opacity: 0.8;
    box-shadow: 0 0 10px;
  }

  .page-title {
    margin-top: 16px;
    margin-bottom: 40px;
  }

  p {
    font-size: 12px;
    text-align: left;
    margin-left: 12px;
  }

  input {
    width: 260px;
    height: 32px;
    border-radius: 8px;
    font-size: 12px;
    color: #b5b5b5;
  }

  .button-section li {
    list-style: none;
    display: block;
    float: left;
    margin: 10px;
  }

  .button-section button {
    width: 120px;
    height: 40px;
    margin-top: 20px;
    font-size: 12px;
  }
</style>
