<script lang="ts">
    interface Choices {
        name: string;
        type: string;
        question: string;
        placeholder: string;
        answer: string;
    };

    export let choices: Choices[] = [];

    const handleOnSubmit = (evt: SubmitEvent) => {
      evt.preventDefault();

      // Using FormData to get form data
      const formData = new FormData(evt.target as HTMLFormElement);
      choices.forEach(choice => {
        choice.answer = formData.get(choice.name) as string;
      });
      choices = choices;
    };

</script>

<form on:submit={handleOnSubmit}>
    {#each choices as choice}
        <div class="choice">
            <label for="{choice.name}">{choice.question}</label>
            <input type="{choice.type}"
                   name="{choice.name}"
                   placeholder="{choice.placeholder}"
                   value={choice.answer} >
        </div>
    {/each}
    <button type="submit">Answer</button>
</form>

<style lang="scss">
    .choice {
        margin: 10px auto;
        input {
            color: #000;
            background-color: #fff;
        }
    }

</style>