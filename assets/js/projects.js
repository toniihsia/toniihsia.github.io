var slideIndex = 1;
showProjectDiv(slideIndex);

function toggleProjectDiv(n) {
  showProjectDiv(slideIndex += n);
}

function showProjectDiv(n) {
  var x = document.getElementsByClassName("project");
  console.log(x);
  if (n > x.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = x.length; }
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  console.log(x);
  x[slideIndex - 1].style.display = "flex";
}

function toggleProjectPhoto(n) {
  var x = document.getElementsByClassName("project");
  console.log(x);
  if (n > x.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = x.length; }
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  console.log(x);
  x[slideIndex - 1].style.display = "flex";
}
