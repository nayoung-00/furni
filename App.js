import { loadHTML } from "./utils/loadHTML.js";
import { initHeader } from "./components/Header/Header.js";

async function App() {
    await initHeader();
    await loadHTML(
        '#app',
        '/pages/Main/Main.html'
    );
}

App().catch(console.error)