console.log("content.js");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(isExtensionOn, id, sendResponse) {
    function getSelectionText() {
        var text = "";
        if (window.getSelection) {
            text = window.getSelection().toString();
        }
        console.log(text);
        return text;
    }

    if (isExtensionOn) {
        document.onmouseup = getSelectionText;
        if (!document.all) document.captureEvents(event.mouseup);
    }
}
