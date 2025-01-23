<script lang="ts">
    export let start = '';
    export let end = '';

    const formatDate = (date: string) => {
        const d = new Date(date);
        return `${d.toLocaleString("en-us", { month: "long", year: "numeric" })}`;
    }
    if(end === '') end = (new Date()).toISOString().slice(0, 10);

</script>

<time class="date-wrapper" datetime="2011-04-02/2011-04-04">
   ({formatDate(start)} ~ {formatDate(end)})
</time>

<style lang="scss">
    .date-wrapper {
        font-size: 90%;
        font-style: italic;
    }
</style>