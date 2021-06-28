scoreUser1 = 0;
scoreUser2 = 0;
player1 = localStorage.getItem("user_one");
player2 - localStorage.getItem("user_two");
document.getElementById("player1").innerHTML = player1 + " = ";
document.getElementById("player1_score").innerHTML = scoreUser1;
document.getElementById("player2").innerHTML = player2 + " = ";
document.getElementById("player2_score").innerHTML = scoreUser2;
document.getElementById("l").innerHTML = "Question turn = " + player1;
document.getElementById("m").innerHTML = "Answer turn = " + player2;


function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log(word);


    charAt1 = word.charAt(1);
    length_divide_by_2 = Math.floor(word.length/2);
    charAt2 = word.charAt(length_divide_by_2);


    length_minus_1 = word.length - 1;
    charAt3 = word.charAt(length_minus_1);


    remove_charAt_1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt_1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    

    console.log(remove_charAt3);
}

