// ==UserScript==
// @name         AWS Opsworks - Local Time
// @namespace    http://vigneshjayavel.in/
// @version      0.1
// @description  Displays the UTC timestamp in your local Timezone! Cool isn't it?
// @author       Vignesh Jayavel
// @match        https://console.aws.amazon.com/*
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        none
// ==/UserScript==

$(window).load(function() {
    waitForKeyElements("a[data-binding=CreatedAt], a[data-binding=CompletedAt]", replaceTimestamps, true);

    $(document).ajaxComplete(function(e, xhr, settings) {
        replaceTimestamps($('td[data-binding=CreatedAt], td[data-binding=CompletedAt]'));
    });

    function replaceTimestamps(selectorResult) {
        selectorResult.replaceWith(function() {
            var $newObj = $(this).clone();
            var utcOffset = $newObj.is("td") == true ? "" : " UTC";
            console.log(utcOffset);
            var localDate = (new Date($newObj.text() + utcOffset)).toString();
            $newObj.text(localDate);
            return $newObj;
        });
    }

})