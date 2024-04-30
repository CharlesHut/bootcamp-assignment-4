const submit = document.getElementById("submit");


let data = JSON.parse(localStorage.getItem("userBlog")) === null ? [] : JSON.parse(localStorage.getItem("userBlog"))

submit.addEventListener('click', function (event) {
    event.preventDefault();
    const userInput = {
        userName: "",
        title: "",
        content: "",
    };

    userInput.userName = document.getElementById("userName").value;
    userInput.title = document.getElementById("title").value;
    userInput.content = document.getElementById("content").value;

    if (userInput.userName.trim().length != 0 && userInput.title.trim().length != 0 && userInput.content.trim().length != 0) {
        data.push(userInput);

        localStorage.setItem('userBlog', JSON.stringify(data));

        window.location.replace ("/blog.html")
    } else {
        window.alert("Username, Title, and Content cannot be empty")
    }
});