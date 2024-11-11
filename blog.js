const commentsList = localStorage.getItem("commentsList")
  ? JSON.parse(localStorage.getItem("commentsList"))
  : [];

function addComment() {
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const comment = document.querySelector("#comment").value;

  commentsList.push({ name, email, comment });
  localStorage.setItem("commentsList", JSON.stringify(commentsList));
  document.getElementById("commentInput").value = "";
}
