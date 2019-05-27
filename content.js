console.log("Chrome extension is running!");

const receiver = (request, sender, sendResponse) => {
    console.log("this is content.js");
};

// Listen for messages
chrome.runtime.onMessage.addListener(receiver);
