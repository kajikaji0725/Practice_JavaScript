// 長方形
const rectangle = document.querySelector('.rectangle');

// ボタンをクリックしたらonClickButton()を実行する
document.querySelector('.button').addEventListener('click', onClickButton);

// ボタンをクリックするたびに、長方形のグラデーション色を変える
function onClickButton() {
    const randomHue = Math.trunc(Math.random() * 360);
    //　グラデーションの開始色と終了色を決定
    const randomColorStart = 'hsl(${randomHue}, 100%, 50%)';
    const randoemColorEnd = 'hsl(${randomHue + 40}, 100%, 50%)';

    //　長方形のグラデーションのための変数（--startと--end）を変更
    rectangle.style.setProperty('--start', randomColorStart);
    rectangle.style.setProperty('--end',randoemColorEnd);
}
