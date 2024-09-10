const setBtn = document.getElementById('setBtn');
const reset = document.getElementById('resetBtn');
const showImg = document.getElementById('showImg');

// 進化の画像を表示するボタンをクリックしたときの動き
setBtn.addEventListener('click', function () {
    showImg.innerHTML = ''; // 画像を全部消す
    const checkEvo = Math.floor(Math.random() * 10); // 0〜9までのランダムな数字を作る

    // 1番目の画像を表示
    const first = document.createElement('div');
    first.innerHTML = "<img src='./img/evolution1.png' alt='原人'  />";
    showImg.appendChild(first);

    // ランダムな数字が4以上なら2番目の画像を表示
    if (checkEvo >= 4) {
        const second = document.createElement('div');
        second.innerHTML = "<img src='./img/evolution2.png' alt='旧人'  />";
        showImg.appendChild(second);
    }

    // ランダムな数字が7以上なら3番目の画像を表示
    if (checkEvo >= 7) {
        const third = document.createElement('div');
        third.innerHTML = "<img src='./img/evolution3.png' alt='新人'/>";
        showImg.appendChild(third);
    }

    // ランダムな数字が9以上なら4番目の画像を表示
    if (checkEvo >= 9) {
        const fourth = document.createElement('div');
        fourth.innerHTML = "<img src='./img/evolution4.png' alt='現代人'/>";
        showImg.appendChild(fourth);
    }
});

// リセットボタンを押したときの動き
reset.addEventListener('click', function () {
    showImg.innerHTML = ''; // 画像を全部消す
});