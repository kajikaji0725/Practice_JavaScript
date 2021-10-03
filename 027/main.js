// テキストエリア
let textarea =  document.querySelector('.textarea');

//　入力中の文字数
let string_num = document.querySelector('.string_num');

textarea.addEventListener('keyup', onKeyUp);

function onKeyUp(){
    const inputText = textarea.value;

    string_num.innerText = inputText.length;

}