import './styles/main.css';

const appRoot = document.querySelector<HTMLDivElement>('#app');

if (!appRoot) {
  throw new Error('Не найден корневой элемент #app');
}

const root: HTMLDivElement = appRoot;

function flowerSvg(className: string): string {
  const petals = Array.from(
    { length: 10 },
    (_, index) =>
      `<ellipse cx="60" cy="27" rx="11" ry="27" transform="rotate(${index * 36} 60 60)" />`,
  ).join('');

  return `
    <svg class="${className}" viewBox="0 0 120 120" aria-hidden="true" focusable="false">
      <g fill="currentColor">${petals}<circle cx="60" cy="60" r="13" /></g>
    </svg>
  `;
}

function render(): void {
  root.innerHTML = `
    <div class="topbar" aria-hidden="true"><div class="topbar__dots"></div></div>
    <div class="shell">
      <main class="page"></main>
    </div>
  `;
}

render();
