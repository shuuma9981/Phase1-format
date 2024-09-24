// 表示するための <p> 要素を DOM で作成
const d = document.createElement("p");
document.body.appendChild(d); // 作成した <p> 要素を <body> に追加

const c = moment("2112-09-03 12:00"),
    f = function () {
        const o = moment(),
            r = c.diff(o, "second") % 60,
            s = c.diff(o, "minute") % 60,
            n = c.diff(o, "hour") % 24,
            e = c.diff(o, "days");
        d.textContent = `ドラえもんが生まれるまで後${e}日${n}時間${s}分${r}秒`;
    };
f();
setInterval(f, 1000); // 1秒ごとにカウントダウンを更新