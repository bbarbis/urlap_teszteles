window.addEventListener("load");
function validateForm(){
    let x = document.validTeszt.vNev.value;
    let y = document.validTeszt.kNev.value;
    if (x === ""){
        alert("A mező kitöltése kötelező!");
        return false;
    }
}
function validateForm(){
    let x = document.validTeszt.jelszo1.value;
    let y = document.validTeszt.jelszo2.value;
    if (x === ""){
        alert("Nem egyforma a két jelszó");
        return false;
    }
}
