var requestURL = "http://study.akulov.pw/oblig-data.php"
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onreadystatechange= function () {
    if (request.readyState == 4) {
    var obligData = request.response;
    populateHeader(obligData);
    }
};

function populateHeader(jsonObj) {
    var header = document.querySelector("thead");
    var obligHead = jsonObj["Data.TableHeaders"];
    for (var i = 0; i < obligHead.length; i++) {
        var myHeadName = document.createElement("th");
        myHeadName.textContent = obligHead[i].name_field;
        header.appendChild(myHeadName);
    };
};