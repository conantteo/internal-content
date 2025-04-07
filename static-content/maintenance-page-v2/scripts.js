// JavaScript can be used for additional interactivity if needed.
// For now, it ensures the image loads properly.
document.addEventListener("DOMContentLoaded", () => {
    const mascot = document.getElementById("mascot");
    
    mascot.onload = () => {
        console.log("Mascot loaded successfully.");
    };
});
