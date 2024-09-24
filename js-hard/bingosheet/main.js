(function () {
    const o = document.createElement("link").relList;
    if (o && o.supports && o.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) e(r);
    new MutationObserver((r) => {
        for (const n of r)
            if (n.type === "childList")
                for (const a of n.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && e(a);
    }).observe(document, { childList: !0, subtree: !0 });
    function t(r) {
        const n = {};
        return (
            r.integrity && (n.integrity = r.integrity),
            r.referrerPolicy && (n.referrerPolicy = r.referrerPolicy),
            r.crossOrigin === "use-credentials"
                ? (n.credentials = "include")
                : r.crossOrigin === "anonymous"
                    ? (n.credentials = "omit")
                    : (n.credentials = "same-origin"),
            n
        );
    }
    function e(r) {
        if (r.ep) return;
        r.ep = !0;
        const n = t(r);
        fetch(r.href, n);
    }
})();
const l = document.getElementById("view"),
    i = [[], [], [], [], []], // 各列ごとに重複を避けるための配列
    u = function () {
        for (let c = 0; c < 6; c++) {
            const o = document.createElement("tr");
            l.appendChild(o);
            for (let t = 0; t < 5; t++) {
                let e = document.createElement("td");
                if (c === 0)
                    switch (t) {
                        case 0: e.textContent = "B"; break;
                        case 1: e.textContent = "I"; break;
                        case 2: e.textContent = "N"; break;
                        case 3: e.textContent = "G"; break;
                        case 4: e.textContent = "O"; break;
                    }
                else
                    switch (t) {
                        case 0: s(t, e); break;
                        case 1: s(t, e); break;
                        case 2:
                            if (c === 3) {
                                e.textContent = "free";
                                e.setAttribute("class", "hit-num");
                            } else s(t, e);
                            break;
                        case 3: s(t, e); break;
                        case 4: s(t, e); break;
                    }
                o.appendChild(e);
            }
        }
    },
    s = function (col, cell) {
        for (; ;) {
            let min = col * 15 + 1;
            let max = col * 15 + 15;
            let num = Math.floor(Math.random() * (max - min + 1)) + min;
            if (!i[col].includes(num)) {
                i[col].push(num);
                cell.textContent = num;
                break;
            }
        }
    };
u();
