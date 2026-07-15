// js/main.js

document.addEventListener('DOMContentLoaded', () => {
  // Accordion Logic (for FAQ)
  const accordionItems = document.querySelectorAll('.accordion-item');
  
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    
    if(header) {
      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all other items
        accordionItems.forEach(otherItem => {
          otherItem.classList.remove('active');
          const otherContent = otherItem.querySelector('.accordion-content');
          if(otherContent) otherContent.style.maxHeight = null;
        });

        // Toggle current item
        if (!isActive) {
          item.classList.add('active');
          const content = item.querySelector('.accordion-content');
          if(content) content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
  });

  // Simple form submission handler
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      const action = form.getAttribute('action');
      if(!action || action === 'COLOQUE_SUA_URL_DO_FORMSPREE_AQUI') {
        e.preventDefault();
        alert('Formulário de Demonstração! Para receber e-mails reais, adicione sua URL do Formspree no atributo "action" do HTML.');
      }
      // If there is a real action URL, it will submit normally
    });
  });

  // Global Budget Modal Logic
  const modalHTML = `
    <div class="modal-overlay" id="budgetModal">
      <div class="modal-content" style="position: relative;">
        <button class="modal-close" id="closeBudgetModal">&times;</button>
        <h3 style="margin-bottom: 1rem; color: var(--color-text);">Orçamento pelo WhatsApp</h3>
        <p style="margin-bottom: 2rem;">Para garantirmos um atendimento mais rápido e personalizado, nossos orçamentos são feitos exclusivamente pelo WhatsApp.</p>
        <a href="https://wa.me/5581992321938?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento" class="btn btn-primary" style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 0.5rem;" onclick="return gtag_report_conversion('https://wa.me/5581992321938?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento');">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          Chamar no WhatsApp
        </a>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  const budgetModal = document.getElementById('budgetModal');
  const closeBudgetModal = document.getElementById('closeBudgetModal');

  // Intercept all links going to /contato/
  const budgetLinks = document.querySelectorAll('a[href="/contato/"], a[href="/contato/?servico=modelagem"], a[href="/contato/?servico=impressao"], a[href="/contato/?servico=prototipo"], a[href="/contato/?servico=miniatura"], a[href="/contato/?servico=reposicao"]');
  
  budgetLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      budgetModal.classList.add('active');
    });
  });

  closeBudgetModal.addEventListener('click', () => {
    budgetModal.classList.remove('active');
  });

  // Close modal when clicking outside
  budgetModal.addEventListener('click', (e) => {
    if (e.target === budgetModal) {
      budgetModal.classList.remove('active');
    }
  });

});
