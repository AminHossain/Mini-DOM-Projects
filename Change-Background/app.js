/**
 * Changing the background color.
 */

window.onload = () => {
    main();
}

function main() {
    const root = document.getElementById("root");
    const btn = document.getElementById("change-color");

    btn.addEventListener("click", function() {
        let bgColor = generateRGBColor();
        root.style.backgroundColor = bgColor;
    })
}

/**
 * Generating the RGB combination
 * @returns string
 */
function generateRGBColor() {
    let R = Math.floor(Math.random() * 255);
    let G = Math.floor(Math.random() * 255);
    let B = Math.floor(Math.random() * 255);

    return `rgb(${R}, ${G}, ${B})`;
}
