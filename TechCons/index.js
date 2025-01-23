document.addEventListener("DOMContentLoaded", ()=>{
    let drop_icon = document.querySelector("#drop-down");
    let hidden_links = document.querySelector("#nav-right");
    drop_icon.addEventListener("click",()=>{
        if (hidden_links.className==="nav-right") {
            hidden_links.className = "nav-action";
        }
        else {
            hidden_links.className = "nav-right" ;
        }
    });
});