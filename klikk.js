function Klikk() {
    const dropdown = document.getElementById("dropdown-content");
    const icon = document.querySelector(".Meny"); 
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
        dropdown.style.transform = "scale(1)";       
        icon.src = "Bilder/menu-burger.svg";  
    } else {            
        dropdown.style.display = "block";
        dropdown.style.transform = "scale(1.05)";    
        icon.src = "Bilder/close.svg";               
    }
}
