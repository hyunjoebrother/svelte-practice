<script>
    let logoImg = '/logo.png'
</script>


<footer class="footer-container">
    <div class="item-container">    
            <ul class="footer-left">
                <li>
                    <div class="footer-logo" >
                        <img src="{logoImg}" alt="logo">
                    </div>
                    <h3>제목</h3>
                    <p>사람 이름</p>
                    <p>주소</p>
                    <p>전화번호</p>
                    <p>이메일</p>
                </li>
            </ul>
            <ul class="footer-right">
                <li>
                    
                    <ul class="support">
                        <h3>Support</h3>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">고객센터</a></li>
                    </ul>
                    
                    
                    <ul class="resources">
                        <h3>Resources</h3>
                        <li><a href="#">호롤로로안내</a></li>
                    </ul>

                    
                    <ul class="legal">
                        <h3>Legal</h3>
                        <li><a href="#">서비스이용약관</a></li>
                        <li><a href="#">개인정보처리방침</a></li>
                    </ul>
                </li>
            </ul>
        <div class="footer-bottom">
            <p>© 2023 호롤로로.Inc All Rights Reserved.</p>
        </div>
        
    </div> 
</footer>

<style>
    footer {
        margin: 0 auto;
        margin-top: 20px;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 280px;
        background-color: orangered;
        border: 0;
        padding: 28px;
    }

    .item-container {
        display: flex;
        justify-content: center;
        align-items: center; /* 수직 정렬 */
    }

    .footer ul {
        list-style: none;
    }

    .footer-left {
        list-style: none;
        margin-left: 20px;
        margin-right: 60px;
    }

    .footer-left h3 {
        font-size: 16px;
        font-weight: 550;
    }

    .footer-left p {
        font-size: 12px;
        font-weight: 400;
        line-height: 12px;
    }

    .footer-right {
        display: flex;
        flex-flow: row wrap;
        list-style: none;
    }

    .footer-right > * {
        flex: 1 50%;
        margin-right: 40px;
    }

    .footer-right ul {
        margin-left: 20px;
        padding-left: 12px;
    }

    .footer-right li {
        list-style: none;
    }

    .footer-right li ul {
        display: block;
        float: left; /* 가로 정렬 */
        margin-left: 36px;
        margin-bottom: 20px;
    }

    .footer-right h3 {
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        margin-top: 12px;
    }

    .footer-right a {
        text-decoration: none;
        color: #000;
        font-size: 12px;
        font-weight: 400;
        line-height: 12px;
    }

    .footer-logo {
        left: 10px;
        margin-bottom: 20px;
    }

    img {
        width: 100px;
        height: 100%;
    }

    .footer-bottom {
        text-align: center;
        position: absolute;
        padding-top: 320px;
    }

    .footer-bottom p {
        font-size: 10px;
        font-weight: 400;
        color: #c4c8bf;
    }
</style>