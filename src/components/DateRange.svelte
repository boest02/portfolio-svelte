<script lang="ts">
    export let start = '';
    export let end = '';

    const formatDate = (date: string) => {
        if(date === '') return "Present";
        const d = new Date(date);
        return `${d.toLocaleString("en-us", { month: "long", year: "numeric" })}`;
    }
    if(end === '') end = (new Date()).toISOString().slice(0, 10);

</script>

<time class="date-wrapper" datetime="{start}/{end}">
   ({formatDate(start)} ~ {formatDate(end)})
</time>

<style lang="scss">
    .date-wrapper {
        font-size: 90%;
        font-style: italic;
    }
</style>