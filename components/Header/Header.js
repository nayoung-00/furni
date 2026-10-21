import { loadHTML } from "../../utils/loadHTML.js";
export async function initHeader() {
    await loadHTML(
        '#header-container',
        '/components/Header/Header.html'
    );
    await loadHTML(
        '#mega-menu-container',
        '/components/MegaMenu/MegaMenu.html'
    )
}