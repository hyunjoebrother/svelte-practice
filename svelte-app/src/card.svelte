<script>
    import Card, {Content} from '@smui/card';
    let clicked = 0;
</script>

<div class="card-display">
	<div class="card-container">
	  <Card style="background-color: purple" padded>A simple padded card.</Card>
	</div>
   
	<div class="card-container">
	  <Card color="primary">
		<Content>You can also use <code>Content</code>.</Content>
	  </Card>
	</div>
   
	<div class="card-container">
	  <Card variant="outlined" padded>An outlined, padded card.</Card>
	</div>
</div>
   
<pre class="status">Clicked: {clicked}</pre>

<style>
    .card-display {
        padding: 20px;
        text-align: center;
    }

    
</style>