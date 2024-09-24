document.querySelector(".add-btn").addEventListener("click", function () {
    const inputValue = document.getElementById("add-area").value;
    if (!inputValue) return; // 空の入力は無視

    const listItem = document.createElement("li");
    listItem.textContent = inputValue;

    const doneButton = document.createElement("button");
    doneButton.textContent = "完了";
    doneButton.classList.add("trash");
    doneButton.addEventListener("click", function () {
        listItem.remove();
    });

    listItem.appendChild(doneButton);
    document.getElementById("todo").appendChild(listItem);
});