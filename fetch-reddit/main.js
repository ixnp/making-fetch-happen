'use strict';

let URL = 'https://www.reddit.com/r/programmerhumor/.json'

function main() {
  fetchPosts()
}
main()

// function fetchPosts(){
//   fetch(URL)
//   .then(res => res.json())
//   .then(json => {
//     console.log(json)
//     addAllPosts(json.data.children);
//   })
// }

async function fetchPosts(){
  let response = await fetch(URL)
  let json = await response.json();
  addAllPosts(json.data.children)
}

function addAllPosts(posts) {
  for (let i = 0; i < posts.length; i++) {
    let post = posts[i]
    console.log(post)
    addPost(post)
  }
}

function addPost(post) {
  const li = document.createElement('li')
  li.textContent = post.data.title

  const img = document.createElement('img')
  img.setAttribute('src', post.data.url);

  const ul = document.getElementById('results')
  ul.appendChild(li);
  ul.appendChild(img);
}