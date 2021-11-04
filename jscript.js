
// function readerJSON(){
//     let json = require('interview.js');
//     var reader = new FileReader();
//     reader.readAsText(json);
//     reader.onload = function() {
//         console.log(reader.result);
//     }
//     reader.error = function() {
//         console.log(reader.error);
//     }
//     console.log(reader.result);
// }

// readerJSON();

//elText = JSON.parse(ajaxFunction('interview.js'));

// for (var i = 0; i<=11; i++){
//     var elem = document.querySelector(".form");
    
//     var elDiv = document.createElement("div");
//     var elInput = document.createElement("input");
//     elDiv.className = "unit";
//     elDiv.id = "unit"+i;
//     elem.appendChild(elDiv);
//     var dv = document.querySelector("#unit"+i);
//     elInput.type = p.fields[i].input.type;
//     elInput.className = "inputStyle";
//     dv.appendChild(elImput);
// }

// var message = ['']

// var request = new XMLHttpRequest();
// request.open('GET', 'interview.js');
// request.responseType = 'json';
// request.send();


// var elText = JSON.parse(request);

// Array.prototype.count = function(){
//     var result = 0;
//     for(var i = 0; i < this.length; i++)
//         if (this[i] != undefined)
//           result++;
//     return result;
// }

var file = document.querySelector(".file");
file.ariaValueText = ".json/addpost.js";

// var select = document.querySelector("input.file").files[0];
        

let reader = new FileReader();

reader.readAsText(file);
reader.onload = function(){
    var json = JSON.parse(reader.result);
    return json;
};


var top = document.querySelector("div.form");

// var addDiv = function(){
//     var div = document.createElement("div");
//     div.className = "form";
// }

// var addTitle = function(){
//     var p = document.createElement("h1");
//     p.className = "title";
// }

function addInput(){
    var input = document.createElement("input");
    input.type = "text";
    input.className = "inputStyle";
    input.textContent = "Test";
    return input;
}

function eventJSON(){
    var test = fileLink();
    console.log(test);
}