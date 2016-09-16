/* globals chrome */
'use strict';

/**
     * @description Listening for @event - Chrome-Expander button clicked.
     
    chrome.browserAction.onClicked.addListener((tab) => {

        // chrome.runtime.sendMessage({fn: 'popup', message: 'chrome popup button pressed'});

        chrome.runtime.sendMessage({fn: 'iconClick', extra: tab, time: Date.now()}, function(response){
            console.log(response);
        });
        return true;

    });
*/
// var console = chrome.extension.getBackgroundPage().console;

let button = document.getElementById('button');
let textBox = document.querySelector('input#text');
let closeButton = document.querySelector('i#closeButton');

function getTabId() {
    chrome.tabs.getCurrent(function(tab) {
        return tab;
    });
}

closeButton.addEventListener('mouseover' && 'click', function(e) {

    chrome.tabs.getCurrent(function(tab) {
        chrome.tabs.sendMessage(tab.id, {
            from: 'popup',
            fn: 'iconClick',
            extra: e,
            time: Date.now(),
            location: window.location
        }, function(response) {
            console.log(response);
        });

    });
}, false);


// chrome.runtime.sendMessage({ testMessage: true, get: 'title' }, function(response) {
//     console.log(response, textBox.value);
//     textBox.value = response.title;
// });

//var console = chrome.extension.getBackgroundPage().console;


button.addEventListener('click', function() {
    chrome.runtime.sendMessage({
        get: 'textBoxText',
        val: textBox.value,
        fn: 'iconClick'
    }, function(response) {
        textBox.value = response.txt;
    });
}, false);