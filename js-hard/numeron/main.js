// 3桁の異なる数字を生成
let 生成数字 = "";
while (生成数字.length < 3) {
    let 文字列 = Math.floor(Math.random() * 10).toString(); // 0〜9のランダムな数字
    if (生成数字.indexOf(文字列) === -1) { // 同じ数字がなければ追加
        生成数字 += 文字列;
    }
}

console.log("生成数字: " + 生成数字); // デバッグ用


// 「答え合わせ」ボタンがクリックされたときの処理
document.getElementById("numCheck").onclick = function () {
    let 入力数字 = document.getElementById("answerNum").value; // ユーザーの入力値を取得
    document.getElementById("answerNum").value = ""; // 入力欄をクリア

    // 入力値が3桁か確認し、同じ数字が使われていないかをチェック
    if (入力数字.length !== 3 || 入力数字[0] === 入力数字[1] ||
        入力数字[1] === 入力数字[2] || 入力数字[0] === 入力数字[2]) {
        alert("3桁の異なる数字を入力してください");
        return;
    }

    let eat = 0;
    let bite = 0;

    // EATとBITEを数える
    for (let i = 0; i < 3; i++) {
        if (入力数字[i] === 生成数字[i]) {
            eat += 1; // 数字も位置も一致 → EAT
        } else if (生成数字.indexOf(入力数字[i]) !== -1) {
            bite += 1; // 数字は一致、位置は不一致 → BITE
        }
    }

    // EATとBITEの結果を表示
    alert(eat + " EAT, " + bite + " BITE");

    // 3EATなら正解、ゲームをリロード
    if (eat === 3) {
        alert("正解です！");
        location.reload();
    }
};

