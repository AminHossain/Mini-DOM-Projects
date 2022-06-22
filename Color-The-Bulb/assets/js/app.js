/**
 * Changing the bulb color.
 */

window.onload = () => {
    main();
}

function main() {
    const element = document.getElementsByClassName("st0");
    const btn = document.getElementById("change-color");

    btn.addEventListener("click", function() {
        let color = generateRGBColor();
        element[0].setAttribute("style", `fill: ${color}`);
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
