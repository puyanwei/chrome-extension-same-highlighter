console.log("background.js");

let isRunning = false;

chrome.browserAction.onClicked.addListener(tab => {
    isRunning = !isRunning;
    console.log(tab, isRunning);
    chrome.tabs.sendMessage(tab.id, isRunning);
});
