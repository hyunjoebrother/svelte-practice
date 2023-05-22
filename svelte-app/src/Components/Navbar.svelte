<script>

</script>


<nav class="nav-container">
    <ul>
        <li>
            <a href="#">메인페이지</a>
        </li>
        <li>
            <a href="#">응애응애</a>
        </li>
        <li>
            <a href="#">응애</a>
        </li>
    </ul>
</nav>

<style>
    nav ul {
        width: 140px;
        height: 180px;
        top: 80px;
        position: fixed;
        border: 1px solid blue;
        background-color: none;
        margin: 0;
        padding: 0;
    }

    nav ul li {
        list-style: none;
        text-decoration: none;
        font-size: 16px;
        position: relative;
        padding: 20px 0 20px 20px;
    }

    nav ul li a::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 0;
        height: 100%;
        background-color: blue;
        border-radius: 12px 0 0 12px;
        z-index: -1;
        transition: all 300ms ease-in-out;
    }

    nav ul li a:hover {
        color: #fff;
        font-weight: 500;
        text-decoration: none;
    }

    nav ul li a:hover::before {
        width: 95%
    }
</style>