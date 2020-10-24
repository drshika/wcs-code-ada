'use strict';

chrome.alarms.onAlarm.addListener(function() {
    chrome.browserAction.setBadgeText({text: ''});
    console.log("Here");
    chrome.notifications.create('notification', {
        type:     'basic',
        iconUrl:  './icon.png',
        title:    'Hey, I\'m here',
        message:  'Everyday I\'m Guzzlin\'!',
        buttons: [
          {title: 'Keep it Flowing.'}
        ],
        priority: 1});
        console.log("Here again");
  });
  
  chrome.notifications.onButtonClicked.addListener(function() {
    chrome.storage.sync.get(['minutes'], function(item) {
      chrome.browserAction.setBadgeText({text: 'ON'});
      chrome.alarms.create({delayInMinutes: item.minutes});
    });
  });