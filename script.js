

let users = document.querySelector(".users");
let posts = document.querySelector(".posts");

function getUsers() {
  let request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/users");
  request.responseType = "json";
  request.send();
  request.onload = function () {
    if (request.status >= 200 && request.status < 300) {
      let usersData = request.response;
      users.innerHTML = "";

      for (user of usersData) {
        let userElement = document.createElement("div");
        userElement.classList.add("user");
        userElement.id = user.id;
        userElement.textContent = user.name;
        userElement.addEventListener("click", () => {
          getPosts(userElement.id);
          console.log(userElement.id);
        });
        users.appendChild(userElement);
      }
    }
  };
}

getUsers();

function getPosts(id) {
  let request = new XMLHttpRequest();
  request.open(
    "GET",
    `https://jsonplaceholder.typicode.com/posts?userId=${id || 1}`
  );
  request.responseType = "json";
  request.send();
  request.onload = function () {
    if (request.status >= 200 && request.status < 300) {
      let postsData = request.response;
      posts.innerHTML = "";
      for (post of postsData) {
        let postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.textContent = post.title;
        posts.appendChild(postElement);
      }
    }
  };
}

getPosts();
