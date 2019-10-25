chrome.contextMenus.create({
  title: "Close all other tabs",
  contexts:["all"],
  onclick: () => {
    chrome.tabs.query({currentWindow: true}, (tabs) => {
      const tabsToClose = [];
      tabs.map(t => {
        if (!t.active && !t.pinned) {
          tabsToClose.push(t.id);
        }
      });
      chrome.tabs.remove(tabsToClose)
    });
  }
});
