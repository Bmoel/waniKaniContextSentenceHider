const HIDER_CLASS_NAME = 'extensionContextSentenceHider';
const BLUR_STYLE = "filter: blur(4px);";

const observer = new MutationObserver(() => {
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
    const englishTextElement = parentDiv.children[1];
    if (!englishTextElement || elementWasAlreadyManipulated(englishTextElement)) {
        return;
    }
    englishTextElement.setAttribute('style', BLUR_STYLE);
    englishTextElement.addEventListener('click', onManipulatedTextClick);
    englishTextElement.classList.add(HIDER_CLASS_NAME);
};

function elementWasAlreadyManipulated(englishTextElement) {
    const hasClassName = englishTextElement.classList.contains(HIDER_CLASS_NAME);
    const hasOnClick = typeof englishTextElement.onclick === 'function';
    return hasClassName || hasOnClick;
};

function onManipulatedTextClick(event) {
    const englishTextElement = event.target;
    const currentStyle = englishTextElement.getAttribute('style');
    if (!currentStyle) {
        englishTextElement.setAttribute('style', BLUR_STYLE);
    } else {
        englishTextElement.removeAttribute('style');
    }
};