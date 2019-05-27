console.log("content.js");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log("sender :", sender);
    console.log("sendResponse :", sendResponse());
    if (message.text === "hello") {
        let paragraphs = Array.from(document.getElementsByTagName("p"));

        paragraphs.forEach(element => {
            element.style["background-color"] = "red";
        });
    }
}
