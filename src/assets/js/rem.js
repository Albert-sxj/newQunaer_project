(function (doc, win) {
    var docE1 = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docE1.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 750) {
                docE1.style.fontSize = '100px';
            } else {
                docE1.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
            if (window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize) {
                var size = window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize.split('p')[0];
                //这里再取出当前html的font-size，和你想附的值进行比较，
                if (size * 1.2 < 100 * (clientWidth / 750)) {
                    //如果当前html的font-size 的1.2倍仍然小于 之前想设置的值，就说明是问题机型
                    docE1.style.fontSize = 125 * (clientWidth / 750) + 'px';
                }
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);

})(document, window)