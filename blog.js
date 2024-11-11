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

function renderComments() {
  const commentsListData = document.getElementById("commentsListData");
  commentsListData.innerHTML = "";
  let row = "";

  commentsList.forEach((comment, index) => {
    row += `
        <tr>
          <td>Name: ${comment.name}</td>
          <td>Email: ${comment.email}</td>
          <td>Comment: ${comment.comment}</td>
        </tr>
        <br>
      `;
  });

  commentsListData.innerHTML = row;
}

renderComments();
