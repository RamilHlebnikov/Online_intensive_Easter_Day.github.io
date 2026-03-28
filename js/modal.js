(function () {
    function generateCode() {
    return String(Math.floor(100000 + Math.random() * 900000));
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("pre-recording-form");
    const modal = document.getElementById("success-modal");
    const codeEl = document.getElementById("confirm-code");

    if (!form || !modal || !codeEl) return;

    const closeBtn = modal.querySelector(".modal__close");

    function openModal(code) {
        codeEl.textContent = code;
        modal.hidden = false;
        requestAnimationFrame(() => {
        modal.classList.add("is-open");
    });

    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    // Анимация заканчивается и пропадает
    setTimeout(() => {
        modal.hidden = true;
    }, 200);
}

closeBtn?.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeModal();
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Если не заполнено то браузер покажет
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    const code = generateCode();

    // Сохранить tariff перед reset (сбросом)
    const tariffField = document.getElementById("tariff-field");
    const tariffValue = tariffField ? tariffField.value : "";
    
    // Очистка полей формы
    form.reset();
    if (tariffField) tariffField.value = tariffValue;

    // Открыть модалку
    openModal(code);
});
});
})();