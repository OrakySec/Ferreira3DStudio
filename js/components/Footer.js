// js/components/Footer.js
class AppFooter extends HTMLElement {
  connectedCallback() {
    const root = '/';
    this.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="grid grid-4">
            <div>
              <h3 style="margin-bottom: 1rem;">Ferreira <span class="text-primary">3D</span></h3>
              <p style="margin-bottom: 1.5rem;">Impressão 3D de alta qualidade, modelagem sob encomenda e prototipagem em Caruaru-PE.</p>
              <!-- Redes Sociais -->
              <div style="display: flex; gap: 0.75rem; align-items: center;">
                <a href="https://www.instagram.com/ferreira3d.studio/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram" style="display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; background: var(--glass-bg); border: 1px solid var(--glass-border); color: var(--color-text-muted); transition: all 0.2s; text-decoration: none;" onmouseover="this.style.borderColor='var(--color-primary)';this.style.color='var(--color-primary)'" onmouseout="this.style.borderColor='var(--glass-border)';this.style.color='var(--color-text-muted)'">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="https://www.tiktok.com/@ferreira3d" target="_blank" rel="noopener noreferrer" aria-label="TikTok" title="TikTok" style="display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; background: var(--glass-bg); border: 1px solid var(--glass-border); color: var(--color-text-muted); transition: all 0.2s; text-decoration: none;" onmouseover="this.style.borderColor='var(--color-primary)';this.style.color='var(--color-primary)'" onmouseout="this.style.borderColor='var(--glass-border)';this.style.color='var(--color-text-muted)'">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.77 1.52V6.75a4.85 4.85 0 0 1-1-.06z"/></svg>
                </a>
                <a href="https://www.youtube.com/@Ferreira3DStudio" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube" style="display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; background: var(--glass-bg); border: 1px solid var(--glass-border); color: var(--color-text-muted); transition: all 0.2s; text-decoration: none;" onmouseover="this.style.borderColor='var(--color-primary)';this.style.color='var(--color-primary)'" onmouseout="this.style.borderColor='var(--glass-border)';this.style.color='var(--color-text-muted)'">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h4 style="margin-bottom: 1rem;">Navegação</h4>
              <ul style="display: flex; flex-direction: column; gap: 0.5rem;">
                <li><a href="${root}#servicos">Serviços</a></li>
                <li><a href="${root}empresas/">Para Empresas</a></li>
              </ul>
            </div>
            <div>
              <h4 style="margin-bottom: 1rem;">Serviços</h4>
              <ul style="display: flex; flex-direction: column; gap: 0.5rem;">
                <li><a href="${root}#servico-modelagem">Modelagem 3D</a></li>
                <li><a href="${root}#servico-impressao">Impressão de Arquivo</a></li>
                <li><a href="${root}#servico-prototipos">Protótipos</a></li>
                <li><a href="${root}#servico-miniaturas">Miniaturas</a></li>
              </ul>
            </div>
            <div>
              <h4 style="margin-bottom: 1rem;">Contato</h4>
              <ul style="display: flex; flex-direction: column; gap: 0.5rem;">
                <li><a href="https://wa.me/5581992321938" style="color: var(--color-text-muted);" onclick="return gtag_report_conversion('https://wa.me/5581992321938');">WhatsApp: (81) 99232-1938</a></li>
                <li><a href="mailto:ferreirastudio3d@gmail.com" style="color: var(--color-text-muted);">Email: ferreirastudio3d@gmail.com</a></li>
                <li style="color: var(--color-text-muted);">Endereço: Rua Santa Luzia 307 AP 301 Caruaru-PE</li>
              </ul>
            </div>
          </div>
          <div style="text-align: center; margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid var(--color-border); color: var(--color-text-muted);">
            <p>&copy; ${new Date().getFullYear()} Ferreira 3D Studio. Todos os direitos reservados. &mdash; Caruaru, Pernambuco.</p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('app-footer', AppFooter);
