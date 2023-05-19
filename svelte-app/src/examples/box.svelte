<!-- 큰 틀 작성 -->
<div class="box-container">
    <div class="box">
        <div class="box-title">{label}</div>
        <div class="box-content {type}">
            <div class="box-data">{count}</div>
            <div class="box-badge">{badge}</div>
        </div>
    </div>
</div> 



<!-- CSS -->
<style>
    .box-container {
        width: 90%;
    }
    .box {
        padding: 20px;
        margin: 16px;
        text-align: center;
        border: 0;
        border-radius: 16px;
        box-shadow: 0 0 1px;
        width: 36px;
        background-color: #fff;
    }
    .box:hover {
        background-color: #f8f8f8;
        box-shadow: 0 0 2.8px;
    }

    .box-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .box-title {
        margin-bottom: 10px;
        text-align: left;
    }
    .box-data {
        font-size: 36pt;
    }
    .box-badge {
        padding: 12px 26px;
        border-radius: 10px;
        font-weight: 600;
        height: 40px;
        line-height: 1;
    }

    .box-badge:hover {
        box-shadow: 0 0 4px;
    }

    .confirmed .box-badge {
        background-color: rgb(0, 231, 0);
    }

    .active .box-badge {
        background-color: rgb(35, 156, 243);
    }
    
    .deaths .box-badge {
        background-color: rgb(241, 58, 58);
    }



    /* 반응형 */
    @media (max-width: 992px) {
        .box {
            width: 49%
        }
    }
    @media (min-width: 560px) {
        .box {
            width: 100%
        }
    }
</style>

<script>
    export let count = 0
    export let type;
    export let label;
    export let badge;
</script>