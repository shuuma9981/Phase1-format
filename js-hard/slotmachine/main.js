let slots = [0, 0, 0]; // スロットの数字を管理
let intervals = []; // スロットの回転を管理するタイマー
let stopCount = 3; // 残りのストップ数
const elements = [
    document.getElementById("nowTime"),
    document.getElementById("nowTime2"),
    document.getElementById("nowTime3")
];
const stopButtons = [
    document.getElementById("setTime1"),
    document.getElementById("setTime2"),
    document.getElementById("setTime3")
];

// スロットを回す
const startSlot = (index) => {
    intervals[index] = setInterval(() => {
        slots[index] = (slots[index] + 1) % 10;
        elements[index].textContent = slots[index];
    }, 100);
};

// スロットを止める
const stopSlot = (index) => {
    clearInterval(intervals[index]);
    stopButtons[index].disabled = true;
    if (--stopCount === 0) {
        checkResult();
    }
};

// 全スロットの数字をチェック
const checkResult = () => {
    const [first, second, third] = slots;
    alert(first === second && first === third ? "揃いました！" : "再挑戦");
};

// スタートボタンの処理
document.getElementById("startTimer").addEventListener("click", () => {
    stopCount = 3;
    stopButtons.forEach(button => button.disabled = false);
    slots.forEach((_, i) => startSlot(i));
});

// ストップボタンの処理
stopButtons.forEach((button, i) => {
    button.addEventListener("click", () => stopSlot(i));
});