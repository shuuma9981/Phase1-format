// 即時実行関数 スクリプトをすぐに実行
(function () {
    const n = document.createElement("link").relList;

    // ブラウザが モジュールをサポートしているか確認
    if (n && n.supports && n.supports("modulepreload")) return;

    for (const e of document.querySelectorAll('link[rel="modulepreload"]')) r(e);

    // MutationObserver で新しい要素が追加されたかを監視
    new MutationObserver((e) => {
        for (const t of e)
            if (t.type === "childList")
                for (const c of t.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && r(c);
    }).observe(document, { childList: !0, subtree: !0 });

    // リンクのオプション（integrity, referrerPolicy, crossOrigin）を設定する関数
    function o(e) {
        const t = {};
        // integrity をセット
        e.integrity && (t.integrity = e.integrity);
        // referrerPolicy をセット
        e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy);
        e.crossOrigin === "use-credentials"
            ? (t.credentials = "include") // use-credentials なら credentials を include に設定
            : e.crossOrigin === "anonymous"
                ? (t.credentials = "omit") // anonymous なら credentials を omit に設定
                : (t.credentials = "same-origin"); // それ以外は same-origin に設定
        return t;
    }

    // 事前に読み込みを行う関数。1度実行された要素には ep プロパティを追加して2度実行されないようにする
    function r(e) {
        if (e.ep) return; // すでにプリロードが実行されているかチェック
        e.ep = !0; // プリロード実行済みを示すフラグをセット
        const t = o(e); // オプションを取得
        fetch(e.href, t); // リンクの URL をフェッチ (プリロード)
    }
})();

// 'add-btn' クラスを持つ要素（ボタン）を取得し、設定
const i = document.getElementsByClassName("add-btn");
i[0].addEventListener("click", function () {
    d(), l(); // ToDo項目を追加する関数 d と、削除機能を設定する関数 l を呼び出す
});

// ToDo項目を追加
const d = function () {
    // 入力エリア 'add-area' の値（入力されたテキスト）を取得
    const s = document.getElementById("add-area"),
        n = document.createTextNode(s.value), // テキストノードを作成
        o = document.createElement("li"); // 新しいリスト項目（li）を作成
    o.appendChild(n); // 入力されたテキストをリスト項目に追加

    // 「完了」ボタンを作成
    const r = document.createElement("button");
    r.classList.add("trash"); // クラス 'trash' を追加（このボタンは削除に使う）
    r.innerHTML = "完了"; // ボタンの表示テキストを「完了」に設定
    o.appendChild(r); // 「完了」ボタンをリスト項目に追加

    // リスト項目を ToDoリストに追加
    document.getElementById("todo").appendChild(o);
};

// 「完了」ボタンに削除機能を追加する関数
const l = function () {
    //  'trash' クラス（「完了」ボタン）を取得
    const s = document.getElementsByClassName("trash");

    // 「完了」ボタンに対してクリックイベントを設定
    for (let n = 0; n < s.length; n++)
        s[n].addEventListener("click", function () {
            // ボタンがクリックされたら、その親要素（リスト項目 li）を削除
            this.parentNode.remove();
        });
};
