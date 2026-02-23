// nav.js — Andreas Breidenthal site
// Edit NAV_LINKS and HOME_URL here to update navigation across all pages.

(function () {

  const HOME_URL   = '/../andreas-breidenthal/index.html';
  const NAV_LINKS  = [
    { label: 'Archive', href: '/../andreas-breidenthal/blog.html' },
  ];

  function buildNav() {
    const container = document.getElementById('site-nav');
    if (!container) return;

    const currentPath = window.location.pathname;

    const links = NAV_LINKS.map(link => {
      const isActive = !link.external && currentPath.includes(link.href.split('/').pop());
      return `<a href="${link.href}"${link.external ? ' target="_blank" rel="noopener"' : ''}${isActive ? ' class="active"' : ''}>${link.label}</a>`;
    }).join('');

    container.innerHTML = `
      <header>
        <a href="${HOME_URL}" class="site-name">Andreas <span>Breidenthal</span></a>
        <nav>${links}</nav>
      </header>
    `;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildNav);
  } else {
    buildNav();
  }

})();
