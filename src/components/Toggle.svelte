<script lang="ts">
  export let choice1: String = "Option 1";
  export let choice2: String = "Option 2";
  export let value: String = choice1;
  
  let toggle: HTMLInputElement | null = null;

  $: { console.log("Value: ", value);}
</script>

<div class="toggle-wrapper">
  <button
    type="button"
    aria-label="Select {choice1}"
    on:click={() => toggle && toggle.checked && (toggle.click())}
  >
    {choice1}
  </button>
  <label class="toggle">
    <input
      id="toggle"
      type="checkbox"
      bind:this={toggle}
      on:change={() => {
        value = toggle && toggle.checked ? choice2 : choice1;
      }}
    />
    <span class="slider round"></span>
  </label>

  <button
    type="button"
    aria-label="Select {choice2}"
    on:click={() => toggle && !toggle.checked && (toggle.click())}
  >
    {choice2}
  </button>
</div>

<style lang="scss">
  .toggle-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;

    button {
      font-size: 1.2rem;
      font-weight: bold;
      font-style: italic;
      color: #333;
      background: transparent;
      cursor: pointer;
    }
  }
  .toggle {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 26px;

    input {
      opacity: 0;
      width: 0;
      height: 0;

      &:checked + .slider {
        background-color: #000;
      }

      &:focus + .slider {
        box-shadow: 0 0 1px #2196f3;
      }

      &:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
      }
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;

    &:before {
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
      left: 4px;
      bottom: 3px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    /* Rounded sliders */
    &.round {
      border-radius: 24px;
    }

    &.round:before {
      border-radius: 50%;
    }
  }
</style>
