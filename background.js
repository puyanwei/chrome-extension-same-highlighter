console.log("background.js");

let isExtensionOn = false;

chrome.browserAction.onClicked.addListener(tab => {
    isExtensionOn = !isExtensionOn;
    console.log(tab, isExtensionOn);
    chrome.tabs.sendMessage(tab.id, isExtensionOn);
});
