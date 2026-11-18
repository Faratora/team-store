import './styles/main.css';

const appRoot = document.querySelector<HTMLDivElement>('#app');

if (!appRoot) {
  throw new Error('Не найден корневой элемент #app');
}

const root: HTMLDivElement = appRoot;

function render(): void {
  root.innerHTML = `<main class="page"></main>`;
}

render();
