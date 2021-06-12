var popupWindow = window.open(
    chrome.extension.getURL("normal_popup.html"),
    "exampleName",
    "width=400,height=400");
    window.close();