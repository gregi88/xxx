//= require jquery
//= require bootstrap
//= require_tree .


(function() {

function createButton(){


  var button = document.createElement("button");

  button.classList.add("backToTop", "hidden");
  button.textContent = " ^ "
  document.body.appendChild(button);

  return button;

}

  var button = createButton();


  function animateScroll() {

    if( document.scrollingElement.scrollTop > 0) {
        window.scrollBy(0, -5);
        setTimeout(animateScroll, 10);
    }

}





  button.addEventListener("click", function(e) {

    e.stopPropagation();

    animateScroll();


  }, false);








  window.addEventListener("scroll", function(e) {

    if(document.scrollingElement.scrollTop >= 500) {
        button.classList.remove("hidden");
    } else {
        button.classList.add("hidden");
    }

}, false);





})();
