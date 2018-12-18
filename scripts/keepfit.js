function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (!username || !password) {
        // this can be used to access a database and login properly however as this is a prototype this is sufficient.
        alert("Please input a username and a password");
    }

    document.cookie = "username=" + username;
    document.cookie = "password=" + password;
    return false;
}

function setPrivacy(type) {
    document.cookie = "privacy=" + type;
}

function setRole(type) {
    document.cookie = "role=" + type;
}

function checkLoginOrRedirect() {
    if (document.cookie.indexOf("username=") >= 0) {
        alert("You are already logged in.. Redirecting...");
        document.location = "/selection.html";
    }
}

function logout() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function setObjective() {
    // There isn't a 'better' way of doing without the compromise on readability or efficiency.
    var calories = prompt("How many calories do you want to target?", "");
    if(!calories) {
        alert("Objective cancelled");
        return;
    }
    if(isNaN(calories)) {
        alert("Input must be numerical");
        return;
    }

    var mins1 = prompt("How many minutes of exercise do you want to target?", "");
    if(!mins1) {
        alert("Objective cancelled");
        return;
    }
    if(isNaN(mins1)) {
        alert("Input must be numerical");
        return;
    }

    var mins2 = prompt("What time do you want to do it in? (minutes)", "");
    if(!mins2) {
        alert("Objective cancelled");
        return;
    }
    if(isNaN(mins2)) {
        alert("Input must be numerical");
        return;
    }

    alert("Objective set!");

}
