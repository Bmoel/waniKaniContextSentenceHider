const blurStyles = "color: transparent; text-shadow: 0 0 5px rgba(0,0,0,0.5);";

var observer = new MutationObserver(() => {
    findContextSentences();
});
observer.observe(document, { childList: true, subtree: true });

function findContextSentences() {
    const allH3Elements = document.querySelectorAll('h3');
    for (const h3Element of allH3Elements) {
        const innerText = h3Element.innerText.toLowerCase();
        if (innerText !== 'context sentences') {
            continue
        }

        const parent = h3Element.parentElement;
        if (!parent) {
            continue;
        }
        addBlurLogicToContextSentences(parent);
    }

    const contextSentenceElements = document.getElementsByClassName('context-sentences');
    for (const parentDiv of contextSentenceElements) {
        manipulateEnglishText(parentDiv);
    }
};

function addBlurLogicToContextSentences(contextSentencesParent) {
    const contextSentenceChildren = contextSentencesParent.children;
    for (const contextSentenceDiv of contextSentenceChildren) {
        manipulateEnglishText(contextSentenceDiv);
    }
};

function manipulateEnglishText(parentDiv) {
    const englishText = parentDiv.children[1];
    if (!englishText) {
        return;
    }
    englishText.setAttribute('style', blurStyles);
    addOnClickFunctionalityToEnglishText(englishText);
};

function addOnClickFunctionalityToEnglishText(englishText) {
    if (typeof englishText.onClick === 'function') {
        return
    }

    englishText.addEventListener('click', () => {
        const currentStyle = englishText.getAttribute('style');
        if (!currentStyle) {
            englishText.setAttribute('style', blurStyles);
        } else {
            englishText.removeAttribute('style');
        }
    })
};