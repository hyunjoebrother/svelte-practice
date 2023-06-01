<script>
    let userEmail = ""
    let userPwd = ""
</script>

<div class="page-container">
    <section class="login-section">
        <h3 class="page-title">로그인</h3>
        <div class="email-section">
            <label for="user_email">이메일</label>
            <input type="email" name="user_email" id="user_email" bind:value={userEmail} placeholder="이메일을 입력하세요">
        </div>
        <div class="password-section">
            <label for="user_pwd">비밀번호</label>
            <input type="password" name="user_pwd" id="user_pwd" bind:value={userPwd} placeholder="비밀번호를 입력하세요">
        </div>
        <button>로그인</button>
    </section>
</div>

<style>
    .page-container {
        top: 40%;
        left: 50%;
        width: 360px;
        height: 440px;
        margin: 0;
        transform: translate(-50%, -50%);
        position: absolute;
        overflow: auto;
        margin-bottom: 120px;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: #fff;
        opacity: .8;
        box-shadow: 0 0 10px;
    }

    .login-section {
        padding: 20px;
    }

    .page-title {
        margin-top: 20px;
        margin-bottom: 60px;
    }

    .login-section div {
        margin-top: 20px;
    }

    label {
        text-align: left;
        margin-left: 36px;
        margin-bottom: 6px;
        font-size: 14px;
    }

    input {
        width: 260px;
        height: 32px;
        border-radius: 8px;
        font-size: 12px;
        color: #b5b5b5
    }

    button {
        width: 80px;
        height: 30px;
        margin-top: 32px;
        font-size: 12px;
    }
</style>