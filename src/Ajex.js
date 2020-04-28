var request = new Request('http://localhost:1221/addNewVisitor', {
	method: 'POST', 
	headers: new Headers({
		'Content-Type': 'application/json'
    }),
    body: JSON.stringify(new URLSearchParams(new FormData(document.getElementById("visitorForm"))))
});

function addVisit(e) {

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