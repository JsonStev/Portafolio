import hamburgerMenu from "./hamburber.js";
import slider from "./slider.js";
import flipCards from "./flip.js";
import { initI18n } from "./i18n.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
    initI18n();
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    slider();
    flipCards(".cards");
});