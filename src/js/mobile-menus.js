    (() => {
    const menuBtnRef = document.querySelector("[data-menu-buttons]");
    const mobileMenuRef = document.querySelector("[data-menus]");
    const mobileBtnClose = document.querySelector("[data-menu-closes]");
    
    menuBtnRef.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-opens");
    });
    
    mobileBtnClose.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-opens");
    });
    })();