if (document.documentElement) {
  initialize(); 
} else {
  window.addEventListener('DOMContentLoaded', initialize);
  (document.head||document.documentElement).appendChild(s);
}

function initialize() {
  if (document.querySelector("#fix55688")) return; // 跑過就別跑了
  
  document.querySelector("head").innerHTML = "<meta name=\"viewport\" id=\"fx55688\" content=\"width=device-width, initial-scale=1.0\">";
  var run_this = document.createElement("script");
  run_this.textContent = "window.parent.getInfo=function(){return '';}\nInitPage();";
  document.body.appendChild(run_this);
}