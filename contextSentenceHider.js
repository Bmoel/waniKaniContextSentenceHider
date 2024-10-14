const blurStyles = "color: transparent; text-shadow: 0 0 5px rgba(0,0,0,0.5);";
findContextSentences();

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
};

function addBlurLogicToContextSentences(contextSentencesParent) {
    const contextSentenceChildren = contextSentencesParent.children;
    for (const contextSentenceDiv of contextSentenceChildren) {
        const englishText = contextSentenceDiv.children[1];
        if (!englishText) {
            continue;
        }
    
        englishText.setAttribute('style', blurStyles);
        addOnClickFunctionalityToEnglishText(englishText);
    }
};

function addOnClickFunctionalityToEnglishText(englishText) {
    englishText.addEventListener('click', () => {
        const currentStyle = englishText.getAttribute('style');
        if (!currentStyle) {
            englishText.setAttribute('style', blurStyles);
        } else {
            englishText.removeAttribute('style');
        }
    })
};