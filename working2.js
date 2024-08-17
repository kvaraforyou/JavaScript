document.addEventListener("DOMContentLoaded", function() {
    const colorInput = document.querySelector(".color-input");
    const colorBlock =  document.querySelector(".color-block");
    const clearButton = document.querySelector(".clear-color-button");

    function payntBlock () {
        colorBlock.style.backgroundColor = colorInput.value;
    }

    colorInput.addEventListener("input", payntBlock);

    payntBlock();

    clearButton.addEventListener("click", ()=> {
        colorBlock.style.removeProperty("background-color");
        colorInput.value = ""
    })

})