# Same Word Highlighter

*Status - Spiked to a reasonable point!*

![image](https://user-images.githubusercontent.com/14803518/58434152-208a9d80-80b2-11e9-91b4-309cd50e98ef.png)


This is a chrome extension which will highlight all the same words on a page that a user highlights.

This is a mini project to experience what it is like to make a Chrome extension.

### Installation

```
git clone https://github.com/puyanwei/chrome-extension-same-highlighter.git
```
In Chrome, go to `chrome://extensions/` and make sure "Developer Mode" is toggled on in the top right corner.

Click the "Load unpacked" button on the top left and select the whole folder.


### Conclusions

At this point upon clicking the Chrome extension icon will toggle the feature on. Double clicking or click dragging the word you want will reveal it in console.

The next step would involve searching through the DOM for that selected word, and then wrapping it in a span with a class of which would be used to style all the same words on the page. This make it a lot harder then I had anticipated!

This is because text within DOM nodes are going to be in different places, in different element types and might have other side effects that would change the page especially if you are inserting another span tag in it.

So I've decided to stop here. It is surprisingly quite an easy process to get going.

### Resources
Thanks [@Shiffman](https://github.com/shiffman) for his awesome [Chrome Extension playlist series](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6bL9VOMT65ahNEri9uqLWfS)

