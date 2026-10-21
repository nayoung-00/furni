export async function loadHTML (selector, path) {
    
    const $target = document.querySelector(selector);
    if(!$target) {throw new Error(`요소를 찾을 수 없음: ${selector}`)};
    
    const response = await fetch(path);
    if(!response.ok) {
        throw new Error(`HTML 불러오기 실패 : ${path}`);
    }
    const html = await response.text();
    $target.insertAdjacentHTML('beforeend', html);
}