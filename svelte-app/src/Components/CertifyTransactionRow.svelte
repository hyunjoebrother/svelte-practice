<div class="row-container">
    <div class="row-wrapper">
        <ul class="datetime">
            <p>거래일시</p>
        </ul>
        <ul class="transaction-type">
            <p>구분</p>
        </ul>
        <ul class="coin-name">
            <p>자산명</p>
        </ul>
        <ul class="coin-amount">
            <p>수량(-/+)</p>
        </ul>
        <ul class="balance">
            <p>거래 후 잔액</p>
        </ul>
        <ul class="memo">
            <p>메모</p>
        </ul>
    </div>
</div>

<style>
    .row-container {
        width: 1100px;
        height: 48px;
        position: relative;
        display: flex;
        margin: auto;
        margin-bottom: 12px;
        border-radius: 8px;
        box-shadow: 0 4px 4px -4px;
        align-items: center;
        justify-content: center;
    }

    .row-wrapper {
        margin: auto;
        text-align: center;
        font-size: 12px;
        margin-left: 12px;
    }

    .row-wrapper ul {
        display: block;
        float: left;
        margin-left: 10px;
    }

    .datetime {
        margin-right: 72px;
    }

    .coin-name {
        margin-right: 66px;
    }

    .coin-amount {
        margin-right: 48px;
    }

    .balance {
        margin-right: 20px;
    }


    .memo {
        margin-right: 20px;
    }
</style>