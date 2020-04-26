var request = new Request('http://localhost:1221/addNewVisitor', {
	method: 'POST', 
	headers: new Headers({
		'Content-Type': 'application/json'
    }),
    body:JSON.stringify()
});

document.getElementById("sumitButton").addEventListener("click", (e) => {
    alert("Hi I am submitable.");
    
})