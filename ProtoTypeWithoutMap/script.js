function formSubmit() {    
    var form = document.getElementById("form");
    var formData = new FormData(form);
    var results = document.getElementById("results");
    
    var destination = formData.get("destination");
    var taxi = formData.get("taxi");
    var bus  = formData.get("bus");

    var route = destination;

    var search_results = {
        "Haymarket bus taxi" : "8.30|[Bus No.25] -> [Taxi]",
        "Haymarket taxi": "18.95|[Taxi]",
        "Haymarket bus" : "3.20|[Bus No.33]",
        "Edinburgh Zoo bus taxi" : "15.20|[Bus No.45] -> [Taxi]",
        "Edinburgh Zoo taxi": "23.55|[Taxi]",
        "Edinburgh Zoo bus" : "3.20|[Bus No.25]",
        "Napier University bus taxi" : "3.20|[Bus No.34]",
        "Napier University taxi": "8.35|[Taxi]",
        "Napier University bus" : "3.20|[Bus No.34]" 
    }

    if (bus) {route += " bus"}
    if (taxi) {route += " taxi"}
    if (!bus && !taxi) {
        img.src = "media/ediMap.png";
        results.style.display = "none";
        return;
    }
    img.src = "media/" + route + ".png";

    var cost = search_results[route].split("|")[0];
    var transport = search_results[route].split("|")[1];
    var cost_result = document.getElementById("cost-result");
    var transport_result = document.getElementById("transport-result");
    cost_result.innerHTML = "Estimated Cost: £" + cost;
    transport_result.innerHTML = "Transport: " + transport;

    results.style.display = "block";
}