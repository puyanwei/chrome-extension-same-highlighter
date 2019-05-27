console.log("background.js");

// Listen for messages
chrome.runtime.onMessage.addListener(buttonClicked);

// A message is received
function buttonClicked(tab) {
    let msg = { text: "hello" };

    chrome.tabs.sendMessage(tab.id, msg);
}
