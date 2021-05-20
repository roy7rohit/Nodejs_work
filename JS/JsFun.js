// change the URL of a window from a pop up check that anopener exists and is not closed

if(window.opener && !window.opener.closed){
  window.opener.location.href = 'http://www.google.com';
}

// refereshing a previously opened popup
var popupWindow = null;
function refreshpopUp(){
  if(popupWindow && !popupWindow.closed){
    // popup window is open, referesh it
    popupWindow.location.reload(true);
  }else{
    popupWindow = window.open('popup.html', 'dataWindow');
  }
}
