document.getElementById('coding').addEventListener('click', function () {
    chrome.tabs.create({ url: 'coding.html' });
  });
  
  document.getElementById('aptitude').addEventListener('click', function () {
    chrome.tabs.create({ url: 'aptitude.html' });
  });
  
  document.getElementById('verbal').addEventListener('click', function () {
    chrome.tabs.create({ url: 'verbal.html' });
  });
  