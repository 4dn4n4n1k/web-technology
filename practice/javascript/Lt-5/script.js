const analyzeBtn = document.getElementById("analyzeBtn");

analyzeBtn.addEventListener("click", function () {

    const text = document.getElementById("textInput").value;
    const result = document.getElementById("result");


    if (text.trim() === "") {
        result.innerHTML = "<p>Please enter some text.</p>";
        return;
    }

    const characterCount = text.length;


    const words = text.trim().split(/\s+/);
    const wordCount = words.length;

    const reversedText = text.split("").reverse().join("");


    result.innerHTML = `
        <h3>Analysis Result</h3>
        <p><strong>Total Characters:</strong> ${characterCount}</p>
        <p><strong>Total Words:</strong> ${wordCount}</p>
        <p><strong>Reversed Text:</strong></p>
        <p>${reversedText}</p>
    `;
});