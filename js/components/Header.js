// js/components/Header.js
class AppHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Determine the base path based on whether we are in a subdirectory or root
    // Since we use /sobre/, /servicos/, the relative path to root is '../' or '/'
    // To make it simple for file:// or local servers without root, we can check the depth
    const depth = window.location.pathname.split('/').filter(p => p.length > 0 && p !== 'index.html').length;
    // Assuming root is depth 0 or 1 depending on where it's served. A safer approach for local static files:
    const basePath = depth > 0 ? '../' : './';
    
    // Better yet, just use absolute paths from root if hosted, but for local viewing, relative is safer.
    // Let's use absolute paths starting with '/' assuming it will be hosted at the domain root.
    const root = '/';

    this.innerHTML = `
      <header class="site-header">
        <div class="container header-container">
          <div class="logo">
            <a href="${root}" style="display: inline-flex; align-items: center; text-decoration: none;">
              <span style="font-family: 'Orbitron', 'Exo 2', sans-serif; font-size: 1.5rem; font-weight: 800; color: #ffffff; letter-spacing: 0.02em;">
                Ferreira <span style="color: var(--color-primary); font-weight: 900; text-shadow: 0 0 15px rgba(255, 85, 0, 0.7);">3D</span> Studio
              </span>
            </a>
          </div>
          <button class="mobile-toggle" aria-label="Abrir Menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
          <nav class="main-nav">
            <ul class="nav-list">
              <li><a href="${root}#home">Home</a></li>
              <li><a href="${root}empresas/">Empresas B2B</a></li>
              <li><a href="${root}contato/" class="btn btn-primary" style="padding: 0.5rem 1rem;">Orçamento</a></li>
            </ul>
          </nav>
        </div>
      </header>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
      .header-container { display: flex; justify-content: space-between; align-items: center; width: 100%; height: 80px; }
      .nav-list { display: flex; gap: 1.5rem; align-items: center; list-style: none; margin: 0; padding: 0; }
      .mobile-toggle { display: none; background: none; border: none; color: var(--color-text); cursor: pointer; padding: 0.5rem; z-index: 101; }
      
      @media (max-width: 768px) {
        .mobile-toggle { display: block; }
        .main-nav { 
          position: fixed; top: 0; left: -100%; right: auto; bottom: 0; width: 100%;
          background-color: var(--color-surface);
          display: flex; justify-content: center; align-items: center;
          opacity: 0; visibility: hidden;
          transition: all 0.3s ease-in-out;
          z-index: 100;
        }
        .main-nav.active { 
          left: 0; opacity: 1; visibility: visible;
        }
        .nav-list { flex-direction: column; gap: 2rem; text-align: center; font-size: 1.5rem; }
      }
    `;
    this.appendChild(style);

    // Toggle menu functionality
    const toggleBtn = this.querySelector('.mobile-toggle');
    const nav = this.querySelector('.main-nav');
    const navLinks = this.querySelectorAll('.nav-list a');

    toggleBtn.addEventListener('click', () => {
      nav.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
      });
    });
  }
}

customElements.define('app-header', AppHeader);
