function animate() {
  var elem = document.getElementById("logo");
  print(elem)
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

function openTab(tabLinkName, tabName) {
    var i, tabs, tablinks;
    x = document.getElementsByClassName("tab"); //x are the tabs
    for (i = 0; i < x.length; i++) {
        //make every tab not display
        x[i].style.display = "none";
    }
    //make tab selected display
    document.getElementById(tabName).style.display = "block";

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        //remove highlight from all tablinks
        tablinks[i].className = tablinks[i].className.replace(" btn-primary", " btn-outline-primary");
    }
    //make tablink clicked highlighted
    document.getElementById(tabLinkName).classList.remove("btn-outline-primary");
    document.getElementById(tabLinkName).classList.add("btn-primary");
}
