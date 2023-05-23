<script>
    export let text;
</script>

<button class="button-container">
    <div class="item-container">
        {text}
    </div>
</button>

<style>
    .button-container {
        width: 100px;
        height: 36px;
        color: #FFCD40;
        background-color: #fff;
        border: 1.2px solid #FFCD40;
        border-radius: 20px;
        margin: 12px;
    }

    .button-container:hover {
        color: #fff;
        background-color: #FFCD40;
    }

    .item-container {
        font-size: 12px;
        font-weight: 400;
        text-align: center;
    }
</style>