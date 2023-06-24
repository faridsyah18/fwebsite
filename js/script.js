var prevScrollPos = window.scrollY;

window.onscroll = function() {
  var currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
  } else {
    document.querySelector("header").style.top = "-130px";
  }

  prevScrollPos = currentScrollPos;
};

console.log(currentScrollPos);