{/* <script> */}
// Sample JSON data
var showing = 0

function removedata(){
    document.getElementById("code").innerHTML =''
    document.getElementById("verbal").innerHTML =''
    document.getElementById("aptitude").innerHTML =''
}

code = document.getElementById("code-show")
function getdata(route,code){
    // document.getElementById("code").innerHTML =''
    // document.getElementById("verbal").innerHTML =''
    // document.getElementById("aptitude").innerHTML =''
    code.innerHTML = '';
    fetch(route)
        .then(response => response.json())
        .then(data => {
            // displayData(data);
            console.log(data)
            jsonData = data
            jsonData.forEach(function(item) {
    console.log(item)
    var div = document.createElement("div");
    div.textContent = item.question +" : "+item.answer;
    code.appendChild(div);
    });
        })
        .catch(error => {
            console.error("Error:", error);
        });
    return code
}

document.getElementById("code").addEventListener("click",function () {
    getdata("http://127.0.0.1:5000/data?ele=coding",code)
})

document.getElementById("verbal").addEventListener("click",function () {
    getdata("http://127.0.0.1:5000/data?ele=verbal",code)
})

document.getElementById("aptitude").addEventListener("click",function () {
    getdata("http://127.0.0.1:5000/data?ele=aptitude",code)
})

//     code.innerHTML = '';
//     fetch("http://127.0.0.1:5000/data")
//         .then(response => response.json())
//         .then(data => {
//             // displayData(data);
//             console.log(data)
//             jsonData = data
//             jsonData.forEach(function(item) {
//     console.log(item)
//     var div = document.createElement("div");
//     div.textContent = item.question +" : "+item.answer;
//     code.appendChild(div);
//     // document.getElementById("json-container").textContent = item.hello;
// });
//         })
//         .catch(error => {
//             console.error("Error:", error);
//         });


var jsonData = [
    { "question": "Alice", "answer": 25 },
    { "question": "Bob", "answer": 30 },
    { "question": "Charlie", "answer": 28 }
];
var container = document.getElementById("json-container");


document.getElementById("fetch-button").addEventListener("click", function () {
    container.innerHTML = '';
    fetch("http://127.0.0.1:5000/data")
        .then(response => response.json())
        .then(data => {
            // displayData(data);
            console.log(data)
            jsonData = data
            jsonData.forEach(function(item) {
    console.log(item)
    var div = document.createElement("div");
    div.textContent = item.question +" : "+item.answer;
    container.appendChild(div);
    // document.getElementById("json-container").textContent = item.hello;
});
        })
        .catch(error => {
            console.error("Error:", error);
        });
});

// Get the container element

// Iterate over JSON data and create HTML elements
jsonData.forEach(function(item) {
    console.log(item)
    var div = document.createElement("div");
    div.textContent =  item.question +" : "+item.answer;
    container.appendChild(div);
    // document.getElementById("json-container").tex.tContent = item.hello;
});
// </script>