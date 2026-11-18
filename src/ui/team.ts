import { flowerSvg } from '../utils/svg';
import { team } from '../data/team';
import { stats } from '../data/stats';

export function renderTeam(): string {
  const cards = team
    .map(
      (member) => `
        <article class="team-card">
          <h3 class="team-card__title">${member.title}</h3>
          <div class="team-card__art team-card__art--${member.art}">
            <span class="team-card__num">${member.num}</span>
            ${flowerSvg('team-card__flower')}
            <span class="team-card__tag">${member.role}</span>
          </div>
          <p class="team-card__about">${member.contribution}</p>
          ${
            member.githubUrl
              ? `<a class="team-card__github team-card__github--link"
                   href="${member.githubUrl}" target="_blank" rel="noopener noreferrer"
                   aria-label="GitHub: ${member.github} (откроется в новой вкладке)">
                   <span>GitHub</span>
                   <span class="team-card__github-name">
                     <code>${member.github}</code>
                     <span class="team-card__arrow" aria-hidden="true">↗</span>
                   </span>
                 </a>`
              : `<p class="team-card__github">
                   <span>GitHub</span>
                   <code>${member.github}</code>
                 </p>`
          }
        </article>
      `,
    )
    .join('');

  return `
    <section class="team">
      <div class="section-head">
        <div>
          <p class="eyebrow">Команда</p>
          <h2 class="section-head__title">
            Наша команда
            <span class="section-head__count">02</span>
          </h2>
        </div>
        <p class="section-head__note">Два человека, один репозиторий и общая цель —
        довести учебный магазин до рабочего деплоя.</p>
      </div>
      <div class="team-grid">${cards}</div>

      <div class="manifesto">
        ${flowerSvg('manifesto__flower')}
        <div class="manifesto__text">
          <p class="eyebrow eyebrow--light">Наш подход</p>
          <h3 class="manifesto__title">Учебный проект — тоже продукт</h3>
          <p>Мы не делим работу на «моё» и «твоё»: каждый понимает, как устроен
          весь магазин — от фильтров до промокода и сохранения корзины.</p>
        </div>
        <div class="stats">
          ${stats
            .map(
              (stat) => `
                <div class="stat">
                  <span class="stat__value">${stat.value}</span>
                  <span class="stat__label">${stat.label}</span>
                </div>
              `,
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
}
