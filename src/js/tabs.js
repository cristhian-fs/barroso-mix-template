document.addEventListener('DOMContentLoaded', () =>{
  // Inicializa as abas
  function initTabs() {
    const tabsSections = document.querySelectorAll(".tabs_container");

    if (!tabsSections.length) return;

    tabsSections.forEach((section) => {
      const tabBtns = Array.from(section.querySelectorAll("[data-tab-btn]"));
      let activeBtn = section.querySelector("[data-tab-btn].active") || tabBtns[0];

      tabBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          handleTab(section, btn.dataset.tabBtn);
        });
      });

      // Configura o estado inicial
      handleTab(section, activeBtn.dataset.tabBtn);
    });
  }
  // Função para alternar entre as abas e aplicar animações
  function handleTab(section, dataTab) {
    const tabBtns = section.querySelectorAll("[data-tab-btn]");
    const tabContents = section.querySelectorAll("[data-tab-content]");

    tabContents.forEach((content) => content.setAttribute("hidden", ""));
    tabBtns.forEach((btn) => {
      btn.classList.remove("active");
      btn.setAttribute("aria-selected", "false");
      btn.setAttribute("tab-index", "-1");
    });

    const activeBtn = section.querySelector(`[data-tab-btn="${dataTab}"]`);
    const activeContent = section.querySelector(`[data-tab-content="${dataTab}"]`);

    if (activeBtn && activeContent) {
      activeBtn.setAttribute("aria-selected", "true");
      activeBtn.setAttribute("tab-index", "0");
      activeBtn.classList.add("active");
      activeContent.removeAttribute("hidden");
      activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }

  initTabs();
})