/* global chrome */

// var console = chrome.extension.getBackgroundPage().console
/// <reference path="../../.vscode/ref/chrome.d.ts"/>
/// <reference path="../../.vscode/ref/chrome-cast.d.ts"/>
/// <reference path="../../.vscode/ref/chrome-app.d.ts"/>
(() => {
    'use strict';

    let button = document.getElementById('button');
    let textBox = document.querySelector('input#text');
    let closeButton = document.querySelector('i#closeButton');

    closeButton.addEventListener('mouseover' && 'click', function(e) {
        chrome.tabs.getCurrent(function(tab) {
            chrome.tabs.sendMessage(tab.id, {
                fn: 'closeFrame',
                tab: tab,
            }, (response) => {
                response ? console.log(response) : response = null;
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


})();