<script>
    import Header from "../../components/Header.svelte";
    import Navbar from "../../components/Navbar.svelte";
  
    let name = "메이";
    let birth = "1998년 8월 31일";
    let first_name_eng = "KIM";
    let second_name_eng = "HYUNJOE";
    let email = "@hyunjoebrother";
    let mobile_phone = "+82 10 1234 5678";
    let address = "서울시";
    let address_detail = "어딘가";
    let job = "개발자";
    let workplace = "스타트업";
  
    let isEditable = false;
    let color = "";
    let backgroundColor = "";
    let cursor = "";
  
    const handleUpdate = () => {
      isEditable = true;
      color = "#fff";
      backgroundColor = "#b5b5b5";
      cursor = "not-allowed"
    };
  </script>
  
  <Header />
  <Navbar />
  
  <div class="page-container">
    <section class="dashboard-section">
      <h3 class="page-title">
        개인 프로필
        <button on:click={handleUpdate}>수정하기</button>
      </h3>
      <section class="info-section">
        <div class="basic-info">
          <p class="section-title">기본정보</p>
          <ul>
            <label for="name">이름</label>
            <input
              type="text"
              bind:value={name}
              id="name"
              readonly={isEditable}
              style="background-color: {backgroundColor}; color:{color}; cursor:{cursor}"
            />
          </ul>
          <ul>
            <label for="birth">생년월일</label>
            <input
              type="text"
              bind:value={birth}
              id="birth"
              readonly={isEditable}
              style="background-color: {backgroundColor}; color:{color}; cursor:{cursor}"
            />
          </ul>
          <ul>
            <label for="first_name_eng">영문 성</label>
            <input type="text" bind:value={first_name_eng} id="first_name_eng" />
          </ul>
          <ul>
            <label for="second_name_eng">영문 이름</label>
            <input
              type="text"
              bind:value={second_name_eng}
              id="second_name_eng"
            />
          </ul>
          <ul>
            <label for="email">이메일</label>
            <input
              type="text"
              bind:value={email}
              id="email"
              readonly={isEditable}
              style="background-color: {backgroundColor}; color:{color}; cursor:{cursor}"
            />
          </ul>
          <ul>
            <label for="mobile_phone">모바일</label>
            <input
              type="text"
              bind:value={mobile_phone}
              id="mobile_phone"
              readonly={isEditable}
              style="background-color: {backgroundColor}; color:{color}; cursor:{cursor}"
            />
          </ul>
        </div>
        <div class="residence-info">
          <p class="section-title">거주지 정보</p>
          <ul>
            <label for="address">주소</label>
            <input type="text" bind:value={address} id="address" />
          </ul>
          <ul>
            <label for="address_detail">상세주소</label>
            <input type="text" bind:value={address_detail} id="address_detail" />
          </ul>
        </div>
        <div class="workplace-info">
          <p class="section-title">직장 정보</p>
          <ul>
            <label for="job">직업</label>
            <input
              type="text"
              bind:value={job}
              id="job"
              readonly={isEditable}
              style="background-color: {backgroundColor}; color:{color}"
            />
          </ul>
          <ul>
            <label for="workplace">직장명</label>
            <input type="text" bind:value={workplace} id="workplace" />
          </ul>
        </div>
      </section>
    </section>
  </div>
  
  <Background />
  
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
  
    button {
      width: 100px;
      height: 32px;
      font-size: 10px;
      border-radius: 4px;
      margin-left: 12px;
      margin-bottom: 8px;
    }
  
    .dashboard-section {
      padding: 20px;
      background-color: #fff;
    }
  
    .info-section {
      width: 96%;
      margin: 0 auto;
    }
  
    label {
      font-size: 12px;
      margin-left: 8px;
      margin-bottom: 4px;
      /* label과 input태그 수평 정렬 */
      width: 48px;
      display: inline-block;
    }
  
    input {
      position: relative;
      width: 180px;
      height: 32px;
      border-radius: 8px;
      font-size: 12px;
      color: #b5b5b5;
    }
    .section-title {
      margin-bottom: 20px;
      margin-left: 20px;
      font-size: 14px;
      font-weight: 550;
    }
  
    .basic-info {
      width: 90%;
      height: 380px;
      border-radius: 16px;
      border: 1.6px solid #c6c2c2;
      background-color: #f4f3f3;
      margin-bottom: 20px;
    }
  
    .residence-info {
      width: 90%;
      height: 160px;
      border-radius: 16px;
      border: 1.6px solid #c6c2c2;
      background-color: #f4f3f3;
      margin-bottom: 20px;
    }
  
    .workplace-info {
      width: 90%;
      height: 380px;
      border-radius: 16px;
      border: 1.6px solid #c6c2c2;
      background-color: #f4f3f3;
      margin-bottom: 20px;
    }
  </style>
  