import hamburgerMenu from "./hamburber.js";
import slider from "./slider.js";
import flipCards from "./flip.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    slider();
    flipCards(".cards");
});