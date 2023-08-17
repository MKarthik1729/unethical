{/* <script> */}
// Sample JSON data
var jsonData = [
    { "name": "Alice", "age": 25 },
    { "name": "Bob", "age": 30 },
    { "name": "Charlie", "age": 28 }
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