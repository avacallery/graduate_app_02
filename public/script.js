let button = document.getElementById("showAllGrads");
button.onclick = showAllGrads;

//xhr request to show all graduates
function showAllGrads() {

    try {
        let xhrGet = new window.XMLHttpRequest();
        xhrGet.open('GET', 'http://localhost:3000/api/grads/', true);
        xhrGet.onload = function () {
            var parsedData = JSON.parse(xhrGet.responseText);
            console.log(parsedData);
            for (var i = 0; i < parsedData.length; i++) {
                let graduateElement = document.createElement("li");
                const graduateName = document.createTextNode("Name: " + parsedData[i].name);
                const graduateRole = document.createTextNode(" Role: " + parsedData[i].role);
                const graduateCompany = document.createTextNode(" Company: " + parsedData[i].company);
                graduateElement.innerHTML += "<br>";
                graduateElement.appendChild(graduateName);
                graduateElement.appendChild(graduateRole);
                graduateElement.appendChild(graduateCompany);

                document.getElementById("list").appendChild(graduateElement);
                console.log(graduateElement);
            }
        };
        xhrGet.send();
    } catch (error) {
        console.log(error);
    }
};

//xhr request to add graduate 
function addGrad(e) {
    e.preventDefault(); //prevent default of automatically submit
    console.log("Submit new graduate");
    let grad = {
        name: document.getElementById("name").value,
        role: document.getElementById("role").value,
        company: document.getElementById("company").value,
        yearOfGraduation: document.getElementById("yearOfGraduation").value
    };
    let xhrPost = new window.XMLHttpRequest();
    xhrPost.open("POST", "http://localhost:3000/api/grads");
    xhrPost.setRequestHeader("Content-Type", "application/json");
    xhrPost.send(JSON.stringify(grad));
};

//xhr request to remove graduate 
function removeGrad() {
    console.log("Grad deleted.");

    let xhrDelete = new XMLHttpRequest();
        xhrDelete.open("DELETE", `http://localhost:3000/routes/api/grads/${id}`, true);
        xhrDelete.onload = function () {
            let grads = JSON.parse(xhrDelete.response);
            if (xhrDelete.status == 200) {
                console.log("Successfully deleted.");
            } else {
                console.log("Error deleting.");
            }
        }
        xhrDelete.send(null);
    }