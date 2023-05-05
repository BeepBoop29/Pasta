let pwd_box_underwater = document.getElementById("pwd-box");
let manual_view = document.getElementById("manual_view");
let faces = ['😂','🤣','😅','😆','🤡'];
let pwd = "";
let cipher = [];
let counter = -1;
let boring = true;

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
    if(boring){
        return ['*'];
    }
    return faces;
}

manual_view.addEventListener("mousedown", function(event) {
    display(pwd);
});

manual_view.addEventListener("mouseup", function(event) {
    display(cipher.join(""));
});

function display(pwd_display){
    pwd_box_underwater.value = pwd_display;
}
