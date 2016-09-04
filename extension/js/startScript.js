const webImageResizer = (function () {
    'use strict';

    var imagesCollection = document.querySelectorAll('img');
    if ( imagesCollection.length ) {
        for ( let i = 0; i < imagesCollection.length; i++ ) {
            console.log(imagesCollection[i].naturalHeight);
            imagesCollection[i].addEventListener('load', setImageNaturalSize(imagesCollection[i]));
        }
    }
    /**
     * Do things right!
     * @param img (object)
     */
    function setImageNaturalSize(img) {
        if ( img.width !== img.naturalWidth || img.height !== img.naturalHeight ) {
            img.width = img.style.width = img.naturalWidth;
            img.height = img.style.height = img.naturalHeight;
        }
    }


})();

const dataSystem = (function () {
    
})();
