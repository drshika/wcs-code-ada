

chrome.alarms.onAlarm.addListener(function() {
    var opened = window.open('', '_blank', 'toolbar=0,location=0,menubar=0')
    opened.document.write("<html><head><title>Rapt Question</title></head><body><h1>Can we use the pythagorean formula for other shapes?</h1><button>Yes</button><button>No</button></body></html>");
    chrome.browserAction.setBadgeText({text: ''});
    console.log("Here");
    chrome.notifications.create('notification', {
        type:     'basic',
        iconUrl:  './icon.png',
        title:    'Click here for more points',
        message:  'Is the Great Wall of China long?',
        buttons: [
          {title: 'Yes', title: 'No'}
        ],
        priority: 2});
    console.log("Here again");
  });
  
//   chrome.notifications.onButtonClicked.addListener(function() {
//     chrome.storage.sync.get(['minutes'], function(item) {
//       chrome.browserAction.setBadgeText({text: 'ON'});
//       chrome.alarms.create({delayInMinutes: item.minutes});
//     });
//   });