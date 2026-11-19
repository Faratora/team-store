import rssLogo from '../assets/rss-logo.svg';

export function renderFooter(): string {
  return `
    <footer class="site-footer">
      <span>© 2026 Team Store</span>
      <span class="site-footer__dots">✦ ✦ ✦</span>
      <a class="site-footer__rss" href="https://rs.school/" target="_blank"
        rel="noopener noreferrer">
        <img src="${rssLogo}" alt="" width="26" height="26" />
        <span>RS School</span>
      </a>
    </footer>
  `;
}
