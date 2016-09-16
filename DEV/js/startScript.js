/* globals chrome */
(function() {
    'use strict';

    var imgCollection = document.querySelectorAll('img');

    if ( imgCollection.length ) {
        for ( let i = 0; i < imgCollection.length; i++ ) {
            imgCollection[i].addEventListener('onloadend', setImageNaturalSize(imgCollection[i]), false);
        }
    }

    /**
     * Do things right!
     * @param {object.} img - html element
     */
    function setImageNaturalSize(img) {
        if ( img.width !== img.naturalWidth || img.height !== img.naturalHeight ) {
            // img.width = img.style.width = img.naturalWidth;
            // img.height = img.style.height = img.naturalHeight;
        }
    }

})();

const dataSystem = (function () {

})();

//chrome.runtime.onMessage.addListener(function(request, sender, sendResponse ){
    // if ( sender.id === chrome.runtime.id ) {
    //console.log(request, sender, sendResponse);
    // }
//});
