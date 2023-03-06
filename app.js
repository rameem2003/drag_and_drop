const dragArea = document.querySelector(".drag_box");
const button = document.querySelector("button");
const input = dragArea.querySelector("input");

let file;

button.addEventListener("click", () => {
    input.click();
})

input.addEventListener("change", function() {
    file = this.files[0];
    showFiles();
})

dragArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("Dragging");
    dragArea.classList.add("active");
    document.querySelector("h1").innerHTML = "Release photo"
})

dragArea.addEventListener("dragleave", () => {
    dragArea.classList.remove("active");
    document.querySelector("h1").innerHTML = "Drag and drop photo"
})

dragArea.addEventListener("drop", (e) => {
    e.preventDefault();
    file = e.dataTransfer.files[0];
    showFiles();
    
})

function showFiles(){
    let supportedFileType = ["image/png", "image/jpg", "image/jpeg"];

    if(supportedFileType.includes(file.type)){
        let fileReader = new FileReader();
        fileReader.onload = () => {
            let fileUrl = fileReader.result;
            let img = `<img src="${fileUrl}" alt="">`
            dragArea.innerHTML = img;
        }

        fileReader.readAsDataURL(file)
    }else{
        alert("Not valid file")
    }
}