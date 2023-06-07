<script>
    import { navigate } from "svelte-routing";
  
    const handleNext = () => {
      // 유효성 검사 등 필요한 로직 수행
  
      // 다음 페이지로 이동
      navigate("/join/step2");
    };
  </script>
  
  <main>
    <h1>회원가입 프로세스 스텝 1</h1>
        <button on:click={handleNext}>다음</button>
  </main>
  