// chrome.alarms.onAlarm.addListener(activateAlarm(alarm));
  
//   chrome.notifications.onButtonClicked.addListener(function() {
//     chrome.storage.sync.get(['minutes'], function(item) {
//       chrome.browserAction.setBadgeText({text: 'ON'});
//       chrome.alarms.create({delayInMinutes: item.minutes});
//     });
//   });

//   function activateAlarm(alarm){
//     chrome.browserAction.setBadgeText({text: ''});
//     chrome.notifications.create({
//         type:     'basic',
//         iconUrl:  'icon.png',
//         title:    'Here\'s your questions',
//         message:  'AAAAAA',
//         buttons: [
//           {title: 'Keep it Flowing.'}
//         ],
//         priority: 0});
//   };
  