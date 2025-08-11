const form = document.getElementById("signupForm");
const resultTable = document.getElementById("resultTable");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // 防止表單送出刷新頁面

  const nameInput = document.getElementById("name").value.trim();
  if (!nameInput) {
    alert("請輸入姓名");
    return;
  }

  const interests = Array.from(
    document.querySelectorAll('input[name="interest"]:checked')
  ).map((el) => el.value);

  if (interests.length === 0) {
    alert("請至少選擇一項興趣");
    return;
  }

  const newRow = document.createElement("tr");

  const nameTd = document.createElement("td");
  nameTd.textContent = nameInput;
  newRow.appendChild(nameTd);

  const interestTd = document.createElement("td");
  interestTd.textContent = interests.join(", ");
  newRow.appendChild(interestTd);

  resultTable.appendChild(newRow);

  form.reset();
});
