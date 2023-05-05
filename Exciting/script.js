let pwd_box_underwater = document.getElementById("pwd-box");
let reveal_btn = document.getElementById("reveal-pwd");
let faces = ['😂','🤣','😅','😆','🤡','😏'];
let pwd = "";
let cipher = [];
let counter = -1;

pwd_box_underwater.addEventListener("input", function(event) {
    let type = event.data;
    createCipher(type);
    display(cipher.join(""));
});

function createCipher(pwd_char){
    /* This password accepts only alphanumeric and underscore characters */
    if(/^[a-zA-Z0-9_ ]$/.test(pwd_char)){
        counter = (++counter) % selectCreature().length;
        cipher.push(selectCreature()[counter%selectCreature().length]);
        pwd = pwd.concat(pwd_char);
    } else {
        cipher.pop();
        pwd = pwd.slice(0, pwd.length-1);
    }
}

function selectCreature(){
    return faces;
}

reveal_btn.addEventListener("mousedown", function(event) {
    reveal_btn.innerHTML = '🧐';
    display(pwd);
});

reveal_btn.addEventListener("mouseup", function(event) {
    reveal_btn.innerHTML = '😴'
    display(cipher.join(""));
});

function display(pwd_display){
    pwd_box_underwater.value = pwd_display;
}
