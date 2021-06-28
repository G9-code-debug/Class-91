function addUser() {
    var user1 = document.getElementById("input1").value;
    var user2 = document.getElementById("input2").value;
    localStorage.setItem("user_one", user1);
    localStorage.setItem("user_two", user2);
    window.location = "game_page.html";
}