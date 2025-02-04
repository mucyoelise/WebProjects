let button = document.querySelector(".form-hidder-button");

function form_hidder () {
    button.parentElement.className= "form-hidder";
    return 0;
}

function form_hidder_left() {
    button.parentElement.className="form-hidder-right";
    return 0;
}