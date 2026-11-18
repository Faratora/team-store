import './styles/main.css';

const appRoot = document.querySelector<HTMLDivElement>('#app');

if (!appRoot) {
  throw new Error('Не найден корневой элемент #app');
}

const root: HTMLDivElement = appRoot;

function render(): void {
  root.innerHTML = `
    <div class="topbar" aria-hidden="true"><div class="topbar__dots"></div></div>
    <div class="shell">
      <main class="page"></main>
    </div>
  `;
}

render();
