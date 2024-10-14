const contextSentenceElements = document.querySelectorAll('.context-sentences');

for (const contextSentenceElement of contextSentenceElements) {
    const child = contextSentenceElement.children[1];
    if (child) {
        child.innerHTML = 'hi';
    }
}
