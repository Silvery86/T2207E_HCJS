function inputSearch(obj) {
    // var ix = medocument.getElementById(id);
    console.log("Searching..." + obj.value);
}
// Chỉ các hàm sau có giá trị value : select, input, textarea, button
function demoEvent2() {
    // var ips = document.getElementsByTagName("input"); //array
    // var ips = document.getElementsByClassName("input-text"); //array
    var ips = document.querySelectorAll("input.input-text[type=text]"); //array
    for (var i=0; i<ips.length;i++){
        ips[i].style.backgroundColor = "deeppink";
    }
}