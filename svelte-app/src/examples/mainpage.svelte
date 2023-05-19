<script>
    import Header from "./header.svelte";
    import Footer from "./footer.svelte";
    import Main from "./main.svelte";
    import Card from "./card.svelte";
    import Box from "./box.svelte";
</script>

메인페이지 
<br />
<Card />
위에 카드 
<br />
<Box />
<Box 
    label="박스1"
    count="11"
    type="confirmed"
    badge="뱃지1"
/>
<Box 
    label="박스2"
    count="22"
    type="active"
    badge="뱃지2"
/>
<Box 
    label="박스3"
    count="33"
    type="deaths"
    badge="뱃지3"
/>
<br />
위에 박스
<br />

<Header />
<Main />
<Footer />