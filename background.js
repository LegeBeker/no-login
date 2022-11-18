(async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab.url.includes("chrome://")) {
        await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['src/js/script.js']
        });
    }
})();