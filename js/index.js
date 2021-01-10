$(document).ready(function() {
    $("form").submit(function() {
        alert("Thank you, I will response you ASAP.")
    });
});



function main() {;
    document.getElementById("home").style.display = "flex";
    document.getElementById("profile").style.display = "none";
    document.getElementById("blog").style.display = "none";
    document.getElementById("contact").style.display = "none";

    $("#home-button").addClass("active");
    $("#profile-button").removeClass("active");
    $("blog-button").removeClass("active");
    $("#contact-button").removeClass("active");


}

function profile() {
    document.getElementById("home").style.display = "none";
    document.getElementById("profile").style.display = "flex";
    document.getElementById("blog").style.display = "none";
    document.getElementById("contact").style.display = "none";

    $("#profile-button").addClass("active");
    $("#home-button").removeClass("active");
    $("#blog-button").removeClass("active");
    $("#contact-button").removeClass("active");
}

function blog() {
    document.getElementById("home").style.display = "none";
    document.getElementById("profile").style.display = "none";
    document.getElementById("blog").style.display = "flex";
    document.getElementById("contact").style.display = "none";

    $("#blog-button").addClass("active");
    $("#home-button").removeClass("active");
    $("#profile-button").removeClass("active");
    $("#contact-button").removeClass("active");

}

function contact() {
    document.getElementById("home").style.display = "none";
    document.getElementById("profile").style.display = "none";
    document.getElementById("blog").style.display = "none";
    document.getElementById("contact").style.display = "flex";

    $("#contact-button").addClass("active");
    $("#home-button").removeClass("active");
    $("#blog-button").removeClass("active");
    $("#profile-button").removeClass("active");
}