document.querySelector("#openModal").addEventListener("click", () => {
    document.querySelector(".modalContainer").classList.remove("hidden");
    document.querySelector(".overlay").classList.remove("hidden");
});

document.querySelector(".closeModal").addEventListener("click",closeModal);
document.querySelector(".overlay").addEventListener("click",closeModal);


function closeModal(){
    document.querySelector(".modalContainer").classList.add("hidden");
    document.querySelector(".overlay").classList.add("hidden");  
}