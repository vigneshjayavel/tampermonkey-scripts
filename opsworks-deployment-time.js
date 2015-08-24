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


waitForKeyElements ("a[data-binding=CreatedAt], a[data-binding=CompletedAt]", replaceTimestamps, true);

function replaceTimestamps (selectorResult) {
    selectorResult.replaceWith(function() {
      var $newObj = $(this).clone();
      var localDate = (new Date($newObj.text()+" UTC")).toString();
      $newObj.text(localDate);
      return $newObj;
    });
}