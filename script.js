function copyToClipboard() {
    var inputc = document.body.appendChild(document.createElement("input"));
    inputc.value = ['stefansekuli@yahoo.com'];
    inputc.focus();
    inputc.select();
    document.execCommand('copy');
    inputc.parentNode.removeChild(inputc);
    alert("My e-mail adress is copied to your clipboard!");
}