console.log("content.js");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, id, sendResponse) {
    let paragraphs = Array.from(document.getElementsByTagName("p"));

    paragraphs.forEach(element => {
        if (message) {
            element.style["background-color"] = "red";
        } else {
            element.style["background-color"] = "white";
        }
    });
}
