import { languages } from "./languages.js";

const d = document;
const storageKey = "portfolio-lang";

export function initI18n() {
    const savedLang = localStorage.getItem(storageKey) || (navigator.language.startsWith("es") ? "es" : "en");
    setLanguage(savedLang);

    // Event Delegation for language buttons
    d.addEventListener("click", (e) => {
        if (e.target.matches(".lang-btn")) {
            const lang = e.target.dataset.lang;
            setLanguage(lang);
        }
    });
}

function setLanguage(lang) {
    localStorage.setItem(storageKey, lang);
    d.documentElement.lang = lang;

    const elements = d.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.dataset.i18n;
        if (languages[lang][key]) {
            // Check if it's a value (like for placeholders/buttons) or innerHTML
            if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
                el.placeholder = languages[lang][key];
            } else {
                el.innerHTML = languages[lang][key];
            }
        }
    });

    // Update active state of buttons
    const buttons = d.querySelectorAll(".lang-btn");
    buttons.forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
}
