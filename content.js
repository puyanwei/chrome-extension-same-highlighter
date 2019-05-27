console.log("content.js");

let paragraphs = Array.from(document.getElementsByTagName("p"));

console.log(paragraphs);

paragraphs.forEach(element => {
    element.style["background-color"] = "red";
});

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log(message.txt);
}
