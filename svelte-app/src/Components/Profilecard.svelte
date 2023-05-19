<!-- 대시보드 상단 프로필 박스 -->

<script>
    import ProfileImg from 'svelte-material-icons/AccountCircle.svelte'
    let name =  'Mei';
    let email = 'mei@mindshift.co.kr';
 
</script>

<div class="profilecard-container">
    <div class="profilecard-wrapper">
        <div class="profile-image">
            <ProfileImg width={32} height={32}/>
        </div>
        <div class="text-wrapper">
            <div class="member-name">{name}</div>
            <div class="member-email">{email}</div>
        </div>
    </div>  
</div>

<style>
    .profilecard-container {
        width: 160px;
        height: 56px;
        background-color: aquamarine;
    }

    .profilecard-container:hover {
        box-shadow: 0 0 4px;
    }

    .profilecard-wrapper {
        padding: 12px;
        display: flex;
        text-align: left;
        margin: 0 auto;
    }

    .profile-image {
        text-align: center;
        margin: auto;
        margin-right: 4px;
    }

    .text-wrapper {
        padding: 2px;
        margin-right: 4px;
    }

    .text-wrapper .member-name {
        font-size: 12px;
        font-weight: 500;
    }

    .text-wrapper .member-email {
        font-size: 10px;
        font-weight: 400;
    }
</style>