for (let i = 1; i <= 15; i++) {
    if (i % 15 === 0) {
        console.log("GameLab Indonesia ");
    } else if (i % 5 === 0){
        console.log("GameLab ");
    } else if (i % 3 === 0){
        console.log("Game ");
    } else {
        console.log(i);
    }
}
