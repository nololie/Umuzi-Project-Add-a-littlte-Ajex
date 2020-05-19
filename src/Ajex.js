function formDisplay(){
    document.getElementById("option").style.display = "none";
    document.getElementById("formDisplay").style.display = "block"
}

let form = document.getElementById("visitorForm");
form.addEventListener("submit",(event) => {
    event.preventDefault();
    let fields = ["visitorname", "assistantname", "visitorage","visitdate", "visittime", "comments"];

    let data = new Object();

    for (let i = 0; i < form.elements.length - 1; i++) {
        data[fields[i]] = form.elements[i].value;
    }
    
    let request = new Request('http://localhost:1221/addNewVisitor', {
        method: 'POST', 
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(data)
    });

    fetch(request)
    .then((res) => {
        return res.json()
    })
    .then((json) => {
        listAllVisits(); 
    })
    .catch((err) => {
        console.log(err);
    })
})

function listAllVisits(){
    document.getElementById("table").innerHTML = "";
    let request = new Request(`http://localhost:1221/viewVisitors`, {method: 'GET'});
    fetch(request)
    .then((res) => {return res.json()})
    .then((json) => {
        document.getElementById("table").innerHTML +=  `<h2 id=h1>All visits</h2><br>
                                                        <tr>
                                                        <th>Visitor ID</th>
                                                        <th>Visitor Name</th>
                                                        <th>Assistant Name</th>
                                                        <th>Visitor Age</th>
                                                        <th>Visit Date</th>
                                                        <th>Visit Time</th>
                                                        <th>Comment</th>
                                                        <th>Action</th>
                                                        </tr>`
        for(i = 0; i<json.length; i++){
            let data = `<tr>
                        <td>${json[i].visitorid}</td>
                        <td>${json[i].visitorname}</td>
                        <td>${json[i].assistantname}</td>
                        <td>${json[i].visitorage}</td>
                        <td>${json[i].visitdate}</td>
                        <td>${json[i].visittime}</td>
                        <td>${json[i].comments}</td>
                        <td>
                        <button class=delete id=${json[i].visitorid} onclick="deleteVisit()">Delete</button>
                        </td>
                        </tr>`
            document.getElementById("table").innerHTML += data;
        }
    })
}

function deleteVisit(){
    let request = new Request(`http://localhost:1221/deleteVisitor${event.target.id}`, {method: 'DELETE'});

    fetch(request)
    .then((res) => {
        return res.json()
    })
    .then((json) => {
        listAllVisits(); 
    })
    .catch((err) => {
        console.log(err);
    })
}