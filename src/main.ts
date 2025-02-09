import './app.css'
import './printer.css'
import App from './App.svelte'

const target: HTMLElement | null = document.getElementById('app');
// clear temp children
if (target) {
  target.innerHTML = '';
}

const app = new App({
  target: target!,
})

export default app
