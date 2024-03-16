$(document).ready(function() {
    //Penerapan h1
    $("h1").css("color", "blue");

    //Penerapan Event Mouseenter dan Mouseleave
    $("#myDiv").mouseenter(function() {
        $(this).text("Kursor didalam lingkaran");
    });

    $("#myDiv").mouseleave(function() {
        $(this).text("Kursor diluar lingkaran");
    });

    //Penerapan event ketika tombol diklik
    $("#myButton").click(function() {
        alert("Tombol diklik!");
    });
    //Penerapan Event Keyboard Keypress
    $(document).keypress(function(event) {
        var key = String.fromCharCode(event.which);
        $("#hasil_input").text("Anda menekan tombol " + key);
    });
    // Penerapan Event Form submit
    $("#myForm").submit(function(event) {
        event.preventDefault(); // Menghentikan submit form
        var name = $("#nameInput").val();
        var email = $("#phone").val();
        $("#hasil_form").text("Nama: " + name + ", Phone: " + email);
    });
});