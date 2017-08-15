function addLoadEvent(func) {
var oldonload = window.onload;
if (typeof window.onload != 'function') {
window.onload = func;
} else {
window.onload = function() {
oldonload();
func();
}
}
}
function insertAfter(newElement,targetElement) {
var parent = targetElement.parentNode;
if (parent.lastChild == targetElement) {
parent.appendChild(newElement);
} else {
parent.insertBefore(newElement,targetElement.nextSibling);
}
}




function captionizeLeft() {
  if (!document.getElementsByTagName) return false;
  if (!document.createElement) return false;
  var images = document.getElementsByTagName("img");
  if (images.length < 1) return false;
  for (var i=0; i<images.length; i++) {
    if (images[i].className.indexOf("left") != -1) {
      var title = images[i].getAttribute("title");
      var divCaption = document.createElement("div");
      divCaption.className = "captionLeft";
      var divCaption_text = document.createTextNode(title);
      divCaption.appendChild(divCaption_text);
      var divContainer = document.createElement("div");
      divContainer.className="leftimg";
      images[i].parentNode.insertBefore(divContainer,images[i]);
      divContainer.appendChild(images[i]);
      insertAfter(divCaption,images[i]);
    }
  }
}
addLoadEvent(captionizeLeft);


function captionizeRight() {
if (!document.getElementsByTagName) return false;
if (!document.createElement) return false;
var images = document.getElementsByTagName("img");
if (images.length < 1) return false;
for (var i=0; i<images.length; i++) {
if (images[i].className.indexOf("right") != -1) {
var title = images[i].getAttribute("title");
var divCaption = document.createElement("div");
divCaption.className="captionRight";
var divCaption_text = document.createTextNode(title);
divCaption.appendChild(divCaption_text);
var divContainer = document.createElement("div");
divContainer.className="rightimg";
images[i].parentNode.insertBefore(divContainer,images[i]);
divContainer.appendChild(images[i]);
insertAfter(divCaption,images[i]);
}
}
}
addLoadEvent(captionizeRight); 

function captionizeCenter() {
if (!document.getElementsByTagName) return false;
if (!document.createElement) return false;
var images = document.getElementsByTagName("img");
if (images.length < 1) return false;
for (var i=0; i<images.length; i++) {
if (images[i].className.indexOf("center") != -1) {
var title = images[i].getAttribute("title");
var divCaption = document.createElement("div");
divCaption.className="captionCenter";
var divCaption_text = document.createTextNode(title);
divCaption.appendChild(divCaption_text);
var divContainer = document.createElement("div");
divContainer.className="centerimg";
images[i].parentNode.insertBefore(divContainer,images[i]);
divContainer.appendChild(images[i]);
insertAfter(divCaption,images[i]);
}
}
}
addLoadEvent(captionizeCenter); 


function captionizeiFrameLeft() {
  if (!document.getElementsByTagName) return false;
  if (!document.createElement) return false;
  var iframes = document.getElementsByTagName("iframe");
  if (iframes.length < 1) return false;
  for (var i=0; i<iframes.length; i++) {
    if (iframes[i].className.indexOf("left") != -1) {
      var title = iframes[i].getAttribute("title");
      var divCaption = document.createElement("div");
      divCaption.className = "captionLeft";
      var divCaption_text = document.createTextNode(title);
      divCaption.appendChild(divCaption_text);
      var divContainer = document.createElement("div");
      divContainer.className="leftiframe";
      iframes[i].parentNode.insertBefore(divContainer,iframes[i]);
      divContainer.appendChild(iframes[i]);
      insertAfter(divCaption,iframes[i]);
    }
  }
}
addLoadEvent(captionizeiFrameLeft);


function captionizeiFrameRight() {
  if (!document.getElementsByTagName) return false;
  if (!document.createElement) return false;
  var iframes = document.getElementsByTagName("iframe");
  if (iframes.length < 1) return false;
  for (var i=0; i<iframes.length; i++) {
    if (iframes[i].className.indexOf("right") != -1) {
      var title = iframes[i].getAttribute("title");
      var divCaption = document.createElement("div");
      divCaption.className = "captionLeft";
      var divCaption_text = document.createTextNode(title);
      divCaption.appendChild(divCaption_text);
      var divContainer = document.createElement("div");
      divContainer.className="rightiframe";
      iframes[i].parentNode.insertBefore(divContainer,iframes[i]);
      divContainer.appendChild(iframes[i]);
      insertAfter(divCaption,iframes[i]);
    }
  }
}
addLoadEvent(captionizeiFrameRight);


function captionizeiFrameCenter() {
  if (!document.getElementsByTagName) return false;
  if (!document.createElement) return false;
  var iframes = document.getElementsByTagName("iframe");
  if (iframes.length < 1) return false; 
  for (var i=0; i<iframes.length; i++) {
    if (iframes[i].className.indexOf("center") != -1) {
      var title = iframes[i].getAttribute("title");
      var divCaption = document.createElement("div");
      divCaption.className = "captionCenter";
      var divCaption_text = document.createTextNode(title);
      divCaption.appendChild(divCaption_text);
      var divContainer = document.createElement("div");
      divContainer.className="centeriframe";
      iframes[i].parentNode.insertBefore(divContainer,iframes[i]);
      divContainer.appendChild(iframes[i]);
      insertAfter(divCaption,iframes[i]);
    }
  }
}
addLoadEvent(captionizeiFrameCenter);
