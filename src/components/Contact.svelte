<script lang="ts">
</script>

<form
  name="contact"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
>
  <input type="hidden" name="form-name" value="contact" />
  <div class="title-section">
    <h1>Contact Me</h1>
    <p>
      I’d love to hear from you! Whether it’s a project idea, a chance to
      collaborate, or even just a comment about this site, don’t hesitate to
      reach out.
    </p>
  </div>
  <div class="input-section">
    <div class="input-group">
      <label for="name">Name:</label>
      <input type="text" name="name" required />
    </div>
    <div class="input-group">
      <label for="email">Email:</label>
      <input type="email" name="email" required />
    </div>

    <div class="input-group">
      <label for="message">Message:</label>
      <textarea name="message" required></textarea>
    </div>
  </div>

  <button type="submit">Send</button>
</form>

<style lang="scss">
  form {
    display: flex;
    flex-direction: column;
    place-content: center;
    margin: 20px;
    width: 60%;

    h1 {
      font-size: 1.5rem;
    }

    .title-section {
      margin-block: 20px;
      p {
        margin: 10px 20px;
      }
    }

    .input-section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 250px;

      .input-group {
        display: flex;
        align-items: center;
        text-align: right;
        padding: 10px;

        label {
          width: 150px;
        }

        input,
        textarea {
          border: 1px solid black;
          background: transparent;
          margin-inline: 10px;
          padding: 5px;
          width: 275px;
          height: 30px;
          color: #000;
          border-radius: 5px;
          font-size: 0.9rem;
        }

        &:has(textarea) {
          align-items: start;
        }

        textarea {
          height: 125px;
          width: 70%;
        }
      }
    }

    button {
      margin: 20px;
      padding: 10px 45px;
      width: fit-content;
      place-self: center;
      background-color: rgb(28, 141, 164);
      color: #fff;
      font-weight: bold;
      border-radius: 15px;
      box-shadow:
        3px 3px 6px rgba(0, 0, 0, 0.2),
        -1px -1px 4px rgba(255, 255, 255, 0.3);
      cursor: pointer;
    }
  }
</style>
