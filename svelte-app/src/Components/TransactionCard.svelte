<div class="transaction-container">
    <div class="transaction-wrapper">
        <ul class="datetime">
            <p>2023/01/01 23:59:59</p>
        </ul>
        <ul class="transaction-type">
            <p>입금</p>
        </ul>
        <ul class="coin-name">
            <p>BTC</p>
        </ul>
        <ul class="coin-amount">
            <p>88888888.12345678</p>
        </ul>
    </div>
</div>

<style>
    .transaction-container {
        width: 630px;
        height: 64px;
        position: relative;
        display: flex;
        margin: auto;
        margin-bottom: 12px;
        border-radius: 8px;
        box-shadow: 0 4px 4px -4px;
        align-items: center;
        justify-content: center;
        background-color: #e1e0de;
    }

    .transaction-wrapper {
        margin: auto;
        text-align: center;
        font-size: 12px;
    }

    .transaction-wrapper ul {
        display: block;
        float: left;
        margin-left: 12px;
    }

    .datetime {
        text-align: right;
    }

    .coin-name {
        font-weight: 550;
        margin-right: 60px;
    }

    .coin-amount {
        margin-right: 40px;
    }
</style>