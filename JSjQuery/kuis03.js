var kriteria = [
    { soal: "Apakah daerah rawan banjir? (ya/tidak)", answer: "tidak" },
    { soal: "Apakah daerah rawan longsor? (ya/tidak)", answer: "tidak" },
    { soal: "Apakah berada di kawasan industri/pabrik? (ya/tidak)", answer: "tidak" },
    { soal: "Berapa luas tanah dalam meter persegi?", answerLt: 800 },
    { soal: "Berapa luas bangunan dalam meter persegi?", answerLb: 400 },
    { soal: "Apakah terdapat kolam renang? (ya/tidak)", answer: "ya" },
    { soal: "Apakah terdapat tempat parkir yang luas? (ya/tidak)", answer: "ya" },
    { soal: "Apakah terdapat kebun di belakang rumah? (ya/tidak)", answer: "ya" }
];

var x = 0;

function next() {
    var soal = kriteria[x].soal;
    var userAnswer = prompt(soal);

    if (userAnswer === null) {
        alert("Refresh!");
        return;
    }

    if ('answerLt' in kriteria[x]) {
        var answerLt = kriteria[x].answerLt;
        if (parseInt(userAnswer) > answerLt) {
            if (x < kriteria.length - 1) {
                x++;
                next();
            } else {
                alert("Sepertinya saya tertarik, Hubungi 089594939291");
            }
        } else {
            alert("Maaf, ga dulu");
        }
    } else if ('answerLb' in kriteria[x]) {
        var answerLb = kriteria[x].answerLb;
        if (parseInt(userAnswer) > answerLb) {
            if (x < kriteria.length - 1) {
                x++;
                next();
            } else {
                alert("Sepertinya saya tertarik, Hubungi 089594939291");
            }
        } else {
            alert("Maaf, ga dulu");
        }
    } else {
        if (userAnswer.toLowerCase() === kriteria[x].answer.toLowerCase()) {
            if (x < kriteria.length - 1) {
                x++;
                next();
            } else {
                alert("Sepertinya saya tertarik, Hubungi 089594939291");
            }
        } else {
            alert("Maaf, ga dulu");
        }
    }
}

next();
