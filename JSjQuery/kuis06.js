function hideEl() {
    var elemen = document.getElementById('elemen');
    elemen.style.display = 'none';
}

function hideClass() {
    var elemen = document.getElementsByClassName('contoh')[0];
    elemen.style.display = 'none';
}

function hideAttr() {
    var elemen = document.querySelector('[href="#"]');
    elemen.style.display = 'none';
}
