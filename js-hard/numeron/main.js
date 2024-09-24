(function () {
    const n = document.createElement("link").relList;
    if (n && n.supports && n.supports("modulepreload")) return;
    for (const e of document.querySelectorAll('link[rel="modulepreload"]')) i(e);
    new MutationObserver((e) => {
        for (const t of e)
            if (t.type === "childList")
                for (const c of t.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && i(c);
    }).observe(document, { childList: !0, subtree: !0 });
    function l(e) {
        const t = {};
        return (
            e.integrity && (t.integrity = e.integrity),
            e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
            e.crossOrigin === "use-credentials"
                ? (t.credentials = "include")
                : e.crossOrigin === "anonymous"
                    ? (t.credentials = "omit")
                    : (t.credentials = "same-origin"),
            t
        );
    }
    function i(e) {
        if (e.ep) return;
        e.ep = !0;
        const t = l(e);
        fetch(e.href, t);
    }
})();

const s = document.getElementById("numCheck");
let o;
for (
    ;
    (o = String(Math.floor(Math.random() * 900 + 100))),
    !(o[0] !== o[1] && o[1] !== o[2] && o[0] !== o[2]);

);

s.addEventListener("click", function () {
    const r = document.getElementById("answerNum").value;
    if (((document.getElementById("answerNum").value = ""), r.length != 3)) {
        alert("3桁の数を入れて下さい");
        return;
    } else if (r[0] === r[1] || r[1] === r[2] || r[0] === r[2]) {
        alert("同じ数を2回使ってはいけません");
        return;
    }
    let n = 0,
        l = 0;
    for (let i = 0; i < r.length; i++)
        for (let e = 0; e < o.length; e++) r[i] === o[e] && (i === e ? (n = n + 1) : (l = l + 1));
    alert(`${n} EAT, ${l} BITE`), n === 3 && (alert("正解です！"), location.reload());
});