const achievementList = localStorage.getItem("achievementList")
  ? JSON.parse(localStorage.getItem("achievementList"))
  : [];

function addAchievement() {
  const achievement = {
    checkbox: false,
    achievement: document.getElementById("achievementInput").value,
  };

  achievementList.push(achievement);
  localStorage.setItem("achievementList", JSON.stringify(achievementList));
  document.getElementById("achievementInput").value = "";
  renderAchievement();
}

function renderAchievement() {
  const achievementListData = document.getElementById("achievementListData");
  achievementListData.innerHTML = "";
  let row = "";

  achievementList.forEach((achievement, index) => {
    row += `
        <tr>
          <td><input type="checkbox" ${
            achievement.checkbox ? "checked" : ""
          } onclick="toggleCheckbox(${index})"></td>
          <td>${achievement.achievement}</td>
          <td><button onclick="deleteAchievement(${index}) class="btn btn-danger" style="border-radius: 20%; width: 25px; background-color: red; border: none"><strong>X</strong></button></td>
        </tr>
      `;
  });

  achievementListData.innerHTML = row;
}

function deleteAchievement(index) {
  achievementList.splice(index, 1);
  localStorage.setItem("achievementList", JSON.stringify(achievementList));
  renderAchievement();
}

function toggleCheckbox(index) {
  achievementList[index].checkbox = !achievementList[index].checkbox;
  localStorage.setItem("achievementList", JSON.stringify(achievementList));
  renderAchievement();
}

renderAchievement();
