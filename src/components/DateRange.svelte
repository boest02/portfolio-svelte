<script lang="ts">
    export let start = '';
    export let end = '';
    
    if(end === '') end = (new Date()).toISOString().slice(0, 10);
	
</script>

<time class="date-wrapper" datetime="2011-04-02/2011-04-04">
   ({start} ~ {end})   
</time>

<style lang="scss">
    .date-wrapper {
        font-size: 90%;
        font-style: italic;        
    }
</style>