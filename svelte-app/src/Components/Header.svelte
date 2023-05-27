<script>
    let logoImg = '/secret.png'
    import Alarm from 'svelte-material-icons/BellOutline.svelte'
    import Profilecard from './Profilecard.svelte';
    import Button from './Button.svelte';

    import { onMount } from 'svelte';
    export let name;
    export let email;

    onMount(async () => {
        try {
            // API에 요청
            const response = await fetch("http://localhost:3000/member");
            const data = await response.json();

            // Extract name and email from the JSON response
            name = data.name;
            email = data.email;
        } catch (error) {
            console.error("Error:", error);
        }
    });
</script>


<header class="header-container">
    <div class="header-logo" >
        <img src="{logoImg}" alt="logo">
    </div>
    <div class="item-container">    
        <div class="transfer-container">
                <Button text="버튼1" />
                <Button text="버튼2" />
        </div>
        <div class="alarm">
            <!-- MUI icon -->
            <Alarm width={28} height={28}/>
        </div>
        <div class="profile-card">
            <Profilecard name={name} email={email} />
        </div>
    </div> 
</header>

<style>
    header {
        margin: 0 auto;
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 80px;
        background-color: #fff;
        border: 0;
        border-radius: 10px;
    }

    .header-logo {
        position: absolute;
        left: 120px;
    }

    img {
        width: 120px;
        height: 100%;
    }

    .item-container {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center; /* 수직 정렬 */
        text-align: center;
        margin: auto;
        right: 120px;
    }
    
    .transfer-container {
        margin: 0 12px;
    }

    .alarm {
        margin-right: 24px;
        top: 24px;
    }

</style>