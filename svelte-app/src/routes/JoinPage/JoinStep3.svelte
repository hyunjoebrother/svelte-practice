<script>
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";
  let qrcodeValue = "";
  let copied = false;

  const copyQRCode = () => {
    const input = document.getElementById("qrcodeValue");

    if (input) {
      input.select();
      document.execCommand("copy");
      input.blur();
      copied = true;
    }
  };

  const handleSubmit = () => {
    // 유효성 검사 등 필요한 로직 수행

    // 다음 페이지로 이동
    navigate("/join/finish");
  };

  onMount(() => {
    copied = false;
  });
</script>

<div class="page-container">
  <h3 class="page-title">OTP 등록하기</h3>
  <div class="qrcode-section">
    <p>1단계.</p>
    <p>2단계. 아래 QR코드를 스캔하거나 코드를 입력하세요.</p>
    <div class="qrcode" />
    <input
      type="text"
      id="qrcodeValue"
      bind:value={qrcodeValue}
      class="qrcode-value"
      placeholder="google QRcode"
    />
    <button on:click={copyQRCode}>복사</button>
  </div>

  {#if copied}
    <p class="copy-msg">QR코드를 복사했습니다!</p>
  {/if}

  <div class="otpcode-section">
    <p>3단계. OTP앱에서 생성된 코드를 입력 후 다음 버튼을 클릭하세요.</p>
    <input
      type="text"
      class="otpcode-value"
      placeholder="Otp 입력하세요"
    />
  </div>
  <button on:click={handleSubmit}>다음</button>
</div>

<style>
  .page-container {
    top: 44%;
    left: 50%;
    width: 360px;
    height: 524px;
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

  .qrcode-section {
    margin-bottom: 28px;
  }

  .qrcode {
    width: 120px;
    height: 120px;
    background-color: #978f8f;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .copy-msg {
    color: #f9d133;
    font-weight: 550;
  }

  .qrcode-section button {
    font-size: 10px;
    margin-left: 4px;
    width: 30px;
    height: 20px;
  }

  .otpcode-section p {
    margin-bottom: 20px;
  }

  input {
    width: 260px;
    height: 32px;
    border-radius: 8px;
    font-size: 12px;
    color: #b5b5b5;
  }

  button {
    width: 240px;
    height: 40px;
    margin-top: 20px;
    font-size: 12px;
  }
</style>
