function changeText(param) {
  let headerTitle = document.getElementById("hello");
  if (param == 1) {
    headerTitle.textContent = "Hello world 👋";
  } else if (param == 2) {
    headerTitle.textContent = "Hello you 👍";
  }
}
