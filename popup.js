//popup.js
document.getElementById('setCookie').addEventListener('click', function() {
  chrome.tabs.executeScript({
    code: 'document.cookie = "wide=1; expires=" + new Date("3099").toUTCString() + "; path=/";'
  });
});

