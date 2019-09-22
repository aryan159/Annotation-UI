var pullfiles=function(){ 
    // love the query selector
    console.log('inside pullfiles');
    var fileInput = document.querySelector("#choose-img");
    var files = fileInput.files;
    // cache files.length 
    var fl = files.length;
    var i = 0;

    while ( i < fl) {
        // localize file var in the loop
        var file = files[i];
        alert(file.name);
        i++;
    }    
}

// set the input element onchange to call pullfiles
document.querySelector("#choose-img").onchange=pullfiles;