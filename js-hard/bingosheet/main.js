document.getElementById('hitNum').addEventListener('click', generateBingoSheet);

function generateBingoSheet() {
    const bingoTable = document.getElementById('view');
    bingoTable.innerHTML = ''; // テーブルの初期化

    const bingoNumbers = {
        B: generateRandomNumbers(1, 15),
        I: generateRandomNumbers(16, 30),
        N: generateRandomNumbers(31, 45),
        G: generateRandomNumbers(46, 60),
        O: generateRandomNumbers(61, 75)
    };

    // ビンゴのヘッダー
    const header = document.createElement('tr');
    ['B', 'I', 'N', 'G', 'O'].forEach(letter => {
        const th = document.createElement('th');
        th.textContent = letter;
        header.appendChild(th);
    });
    bingoTable.appendChild(header);

    // 5行のビンゴシート作成
    for (let i = 0; i < 5; i++) {
        const row = document.createElement('tr');
        ['B', 'I', 'N', 'G', 'O'].forEach((col, colIndex) => {
            const cell = document.createElement('td');
            if (col === 'N' && i === 2) {
                cell.textContent = 'free';
            } else {
                cell.textContent = bingoNumbers[col][i];
            }
            row.appendChild(cell);
        });
        bingoTable.appendChild(row);
    }
}

// 指定範囲で重複なしのランダムな5つの数字を生成
function generateRandomNumbers(min, max) {
    const numbers = [];
    while (numbers.length < 5) {
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    return numbers;
}
