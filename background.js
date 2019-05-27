console.log("background.js");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    console.log(tab);
    let msg = { text: "hello" };

    chrome.tabs.sendMessage(tab.id, msg);
}
