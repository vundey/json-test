

function jsonReader(){
    var file = document.querySelector(".file").files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    console.log(reader);
}

function jsonEvent(){
    for (var i = 0; i<=11; i++){
    var elem = document.querySelector(".form");
    
    var elDiv = document.createElement("div");
    var elInput = document.createElement("input");
    elDiv.className = "unit";
    elDiv.id = "unit"+i;
    elem.appendChild(elDiv);
    var dv = document.querySelector("#unit"+i);
    elInput.type = p.fields[i].input.type;
    elInput.className = "inputStyle";
    dv.appendChild(elImput);
    }
}