const setBtn = function () {
    const hoge = Math.random() * 10;
    if (hoge < 5) {
        alert('斎藤さんだぞぉぉぉぉぉ');
    } else {
        alert('ぺっぺっぺー');
    }
};


for (let i = 2; i <= 10; i += 2) {
    if (i === 4 || i === 6) {
        console.log('test');
    } else {
        console.log(i);
    }
}