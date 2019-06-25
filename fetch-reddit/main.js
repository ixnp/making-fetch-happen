let URL = 'https://www.reddit.com/r/programminghumor/.json'

function main() {
  fetchPosts()
}
main()

function fetchPosts() {
  fetch(URL)
  .then(response => {
    return response.json()
  })
  .then(json => {
    console.log(json);
    addAllPosts(json.data.children)
  })
}

function addAllPosts(posts) {
  for (let i = 0; i < posts.length; i++) {
    let post = posts[i]
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
  li.appendChild(img);
}