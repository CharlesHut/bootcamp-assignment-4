let blogArray = JSON.parse(localStorage.getItem('userBlog')) || [];

// function getUserBlog() {
//     return JSON.parse(localStorage.getItem('userBlog'));



function intit() {
    for (i = 0; i < blogArray.length; i++) {
        var blog = blogArray[i];
        console.log(i, blog);
        let div = document.createElement ("div")
        let h2 = document.createElement ("h2")
        h2.textContent = blog.userName
        let h3 = document.createElement ("h3")
        h3.textContent = blog.title
        let p = document.createElement ("p")
        p.textContent = blog.content
        let hr = document.createElement ("hr")
        let main = document.querySelector ("main")
        div.appendChild (h2)
        div.appendChild (h3)
        div.appendChild (hr)
        div.appendChild (p)
        main.appendChild (div)

        div.classList.add ("div-2")

    }
}

function createBlogSection(blog){
        const userName = blog.userName;
        const title = blog.title;
        const content = blog.content;
        document.createElement
}
intit();