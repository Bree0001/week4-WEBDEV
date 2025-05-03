let readMoreButton = document.getElementById("read-more");
readMoreButton.addEventListener("click", function() {
  readMoreButton.textContent = "ClickHere";});


let clickButton = document.getElementById("click");
clickButton.addEventListener("click", function() {
    clickButton.style.backgroundColor = "yellow";
    clickButton.style.color = "darkgreen";
    clickButton.style.borderRadius = "17%";
  })

  let byeButton = document.getElementById("bye");
  byeButton.addEventListener("click", function(){
    byeButton.remove();
  })
