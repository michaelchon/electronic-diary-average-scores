const onElementCreation = (selector, callback) => {
    const observer = new MutationObserver((mutationList) => {
        for (const mutation of mutationList) {
            if (mutation.type !== "childList") continue;

            for (const node of mutation.addedNodes) {
                if (node.nodeType !== Node.ELEMENT_NODE) continue;
                const $el = node.querySelector(selector);
                if ($el) {
                    callback($el);
                    return;
                }
            }
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
};
