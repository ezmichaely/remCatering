// HEADER & NAVIGATION SCRIPT
$(function () {
    $(".navbar-toggler").on("click", function () {
        if ($(".toggle-icons").hasClass("off")) {
            $(".toggle-icons").removeClass("off");
            $(".toggle-icons").addClass("on");
            $(".navbar").addClass("on");
            $(".bb").addClass("on");
        }

        else {
            $(".toggle-icons").addClass("off");
            $(".toggle-icons").removeClass("on");
            $(".navbar").removeClass("on");
        }
    })
});

//BACK TO TOP SCROLL 
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $('#topBtn').fadeIn();
        } else{
            $('#topBtn').fadeOut();
        }
    });
    
    $("#topBtn").click(function(){
        $('html, body').animate({scrollTop:0},800);
    });    
});

//CONTACT US --> SUBJECT CHANGE
function changeSubject() {
    var subject = document.getElementById("subject");
    if (subject.value=="inquiry") {
        document.getElementById("rcode-label").style.display = "none";
        document.getElementById("rcode").style.display="none";
    }
    else {
        document.getElementById("rcode-label").style.display = "block";
        document.getElementById("rcode").style.display = "block";
    }
}