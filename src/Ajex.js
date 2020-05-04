var form = document.getElementById("visitorForm");
let fields = ["visitorname", "assistantname", "visitorage","visitdate", "visittime", "comments"];


function addVisit() {

    let data = new Object();

    for (let i = 0; i < form.elements.length -1; i++) {
        data[fields[i]] = form.elements[i].value;
    }

    var request = new Request('http://localhost:1221/addNewVisitor', {
        method: 'POST', 
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(data)
    });

    fetch(
        request
    )
    .then((res) => {
        if (res.ok){
        return res.json();
        } else {
        throw new Error ('Something went wrong with your fetch');
        }
    }).then((json) => {
        console.log(json);
    })
}