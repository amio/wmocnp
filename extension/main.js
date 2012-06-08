/**
 *
 * @author : Amio
 * @date   : 6/7/12 7:15 PM
 *
 */

function inject(script) {
    var el = document.createElement('script');
    el.setAttribute("type", "application/javascript");
	el.setAttribute("src",chrome.extension.getURL(script));
    document.body.appendChild(el); // run the script
//    document.body.removeChild(el); // clean up
}

inject('wmocn.js');