const blurStyles = "color: transparent; text-shadow: 0 0 5px rgba(0,0,0,0.5);";

var observer = new MutationObserver(() => {
    findContextSentences();
});
observer.observe(document, { childList: true, subtree: true });

function findContextSentences() {
    // Find elements for Vocabulary pages
    const allH3Elements = document.querySelectorAll('h3');
    for (const h3Element of allH3Elements) {
        const innerText = h3Element.innerText.toLowerCase();
        if (innerText !== 'context sentences' || !h3Element.parentElement) {
            continue;
        }
        const contextSentenceChildren = h3Element.parentElement.children;
        for (const contextSentenceDiv of contextSentenceChildren) {
            manipulateEnglishText(contextSentenceDiv);
        }
    }

    // Find elements for Today's Lessons
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
    englishTextElement.setAttribute('style', blurStyles);
    addOnClickFunctionalityToEnglishText(englishTextElement);
    englishTextElement.classList.add(hiderClassName);
};

function addOnClickFunctionalityToEnglishText(englishText) {
    englishText.addEventListener('click', (event) => {
        const englishTextElement = event.target;
        const currentStyle = englishTextElement.getAttribute('style');
        if (!currentStyle) {
            englishTextElement.setAttribute('style', blurStyles);
        } else {
            englishTextElement.removeAttribute('style');
        }
    })
};