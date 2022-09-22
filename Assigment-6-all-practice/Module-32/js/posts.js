function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}


/* 
1.get the container element where you want to add the new elements
2.create child element 
3.set innerText/innerHtml
4.appendChild

*/

function displayPosts(posts) {
    const postContainer = document.getElementById('posts-container')
    for (const post of posts) {
        console.log(post)

        const postDiv = document.createElement('div')
        postDiv.classList.add('post')
        postDiv.innerHTML = `
       <h4>user :- ${post.userId}</h4>
       <h5>post:title :- ${post.title}</h5>
       <p>post Description :- ${post.body}</p>
       
       `;
        postContainer.appendChild(postDiv)
    }
}

loadPosts();