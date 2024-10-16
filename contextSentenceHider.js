const blurStyle = "filter: blur(4px);";

var observer = new MutationObserver(() => {
    findContextSentences();
});
observer.observe(document, { childList: true, subtree: true });

function findContextSentences() {
    const contextSentenceElements = document.getElementsByClassName('context-sentences');
    for (const parentDiv of contextSentenceElements) {
        manipulateEnglishText(parentDiv);
    }
};

function manipulateEnglishText(parentDiv) {
    const hiderClassName = 'extensionContextSentenceHider';
    const englishTextElement = parentDiv.children[1];
    if (!englishTextElement || englishTextElement.classList.contains(hiderClassName)) {
        return;
    }
    englishTextElement.setAttribute('style', blurStyle);
    addOnClickFunctionalityToEnglishText(englishTextElement);
    englishTextElement.classList.add(hiderClassName);
};

function addOnClickFunctionalityToEnglishText(englishText) {
    englishText.addEventListener('click', (event) => {
        const englishTextElement = event.target;
        const currentStyle = englishTextElement.getAttribute('style');
        if (!currentStyle) {
            englishTextElement.setAttribute('style', blurStyle);
        } else {
            englishTextElement.removeAttribute('style');
        }
    })
};