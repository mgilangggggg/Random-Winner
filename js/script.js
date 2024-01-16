var list_winner = ["Jane", "Gery", "Tom", "Mitchell", "Joe"];

var button = document.getElementById("select_button"),
  spinner = document.getElementById("search");

button.addEventListener("click", function () {
  spinner.style.display = "block";
  setTimeout(choose_winner, 1000);
});

function choose_winner() {
  var max = list_winner.length - 1,
    min = 0,
    index_winner = Math.floor(Math.random() * (max - min + 1) + min),
    ul_winner = document.getElementById("winner"),
    li_winner = document.createElement("li"),
    text_winner = document.createTextNode(list_winner[index_winner]);

  spinner.style.display = "none";

  li_winner.appendChild(text_winner);
  li_winner.setAttribute("class", "shake");
  ul_winner.appendChild(li_winner);

  list_winner.splice(index_winner, 1);
}
