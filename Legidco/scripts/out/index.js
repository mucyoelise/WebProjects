function dropdown() {
    let dropIcon = document.querySelector("#navbar-middle");
    if (dropIcon.className === "navbar-middle") {
        dropIcon.className = "drop-list";
    }
    else {
        dropIcon.className = "navbar-middle";
    }
}
