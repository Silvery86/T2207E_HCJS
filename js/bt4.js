function loadingMenu() {
    var xHttp = new XMLHttpRequest();
    xHttp.onload = function () {
        var data = JSON.parse(this.responseText);
        // console.log(this.responseText);
        var all = data.list;
        for (var i=0;i<all.length;i++){
            var content = `<div class="main">
                      <h2>${all[i].dt_txt}</h2>
                      <h1>${all[i].main.temp}<sup>o</sup>C</h1>
                      <h3>${all[i].weather[0].description}</h3>
                      <img src="https://openweathermap.org/img/wn/${all[i].weather[0].icon}@2x.png"/>
                      </div>`;
            document.getElementById("all").innerHTML += content;
        }
    }
    var link = "https://api.openweathermap.org/data/2.5/forecast?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
    xHttp.open("get",link,true);
    xHttp.send();
}
loadingMenu();