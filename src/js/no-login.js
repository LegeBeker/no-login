const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML = css;

if (window.location.href.indexOf('twitter.com') > -1) {
    console.log('no-login script is running for twitter');
    // addCSS('.css-1dbjc4n.r-aqfbo4.r-zso239.r-1hycxz, .css-1dbjc4n.r-aqfbo4.r-1p0dtai.r-1d2f490.r-12vffkv.r-1xcajam.r-zchlnj { display: none!important; }');

    //wait 1 second
    setTimeout(() => {
        document.querySelector('.css-1dbjc4n.r-aqfbo4.r-zso239.r-1hycxz').remove();
        document.querySelector('.css-1dbjc4n.r-aqfbo4.r-1p0dtai.r-1d2f490.r-12vffkv.r-1xcajam.r-zchlnj').remove();
    }, 100);

}


if (window.location.href.indexOf('facebook.com') > -1) {
    console.log('no-login script is running for facebook');
}


if (window.location.href.indexOf('instagram.com') > -1) {
    console.log('no-login script is running for instagram');
}


if (window.location.href.indexOf('youtube.com') > -1) {
    console.log('no-login script is running for youtube');
    // sort watch list by length of video
}

if (window.location.href.indexOf('wikipedia.org') > -1) {
    console.log('no-login script is running for wikipedia');

    addCSS('.mw-page-container {padding-left:25px!important;padding-right:25px!important;max-width:none!important;}');
    addCSS('.vector-sitenotice-container {display:none!important;}');
    addCSS('.mw-page-container-inner {grid-template-columns:200px!important;}');
    addCSS('.mw-content-container {max-width:none!important;}');
    addCSS('.vector-sticky-header {max-width:none!important;}');
    addCSS('.vector-pinned-container {padding-top:0!important;margin-top:0!important;}');
    addCSS('.mw-body {padding:0!important;}');
}