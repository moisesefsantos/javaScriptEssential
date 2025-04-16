let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
    // Set the test text
    document.getElementById("inputText").value = testText;

    const userInput = document.getElementById("userInput");
    userInput.value = "";
    userInput.readOnly = false;
    userInput.focus();
    
    // Reset results and timer
    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();
    
    // Change button text and functionality
    var button = document.getElementById("btn");
    button.innerHTML = "End Test";
    button.onclick = endTest;
}

function endTest() {
    endTime = Date.now();

    const userInput = document.getElementById("userInput");
    userInput.readOnly = true;

    const timeElapsed   = (endTime - startTime) / 1000;
    const userTypedText = userInput.value.trim();

    const typedWords    = userTypedText.split(/\s+/).filter(w => w !== "").length;
    const textLength    = userTypedText.length;

    const wpm = timeElapsed > 0
        ? Math.round((typedWords / timeElapsed) * 60)
        : 0;

    const referenceWords = testText.split(/\s+/).filter(w => w !== "");
    const typedWordsArr  = userTypedText.split(/\s+/).filter(w => w !== "");
    let correctCount = 0;
    referenceWords.forEach((word, i) => {
        if (typedWordsArr[i] === word) correctCount++;
    });
    const accuracy = referenceWords.length > 0
        ? Math.round((correctCount / referenceWords.length) * 100)
        : 0;

    const out = document.getElementById("output");
    out.innerHTML = `
      <h2>Typing Test Results:</h2>
      <p>Words Typed: ${typedWords}</p>
      <p>Text Length: ${textLength} characters</p>
      <p>Time Elapsed: ${timeElapsed.toFixed(2)} seconds</p>
      <p>Words Per Minute (WPM): ${wpm}</p>
      <p>Accuracy: ${accuracy}% (${correctCount} of ${referenceWords.length} correct words)</p>
    `;

    const btn = document.getElementById("btn");
    btn.innerHTML = "Start Test";
    btn.onclick = startTest;
}
