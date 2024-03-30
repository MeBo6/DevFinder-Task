let input = document.querySelector('.search-input');
let button = document.querySelector('.search-button');
let userName = document.querySelector('.user-name');
let atUser = document.querySelector('.at-user');
let joinDate = document.querySelector('.joinDate');
let bio = document.querySelector('.bio');
let repoCounter = document.querySelector('.repos');
let followerCounter = document.querySelector('.followers');
let followingCounter = document.querySelector('.following');
let userImg = document.querySelector('.user-img');
let city = document.querySelector('.city');

button.addEventListener('click', ()=>{
   let valueOfInput = input.value;
   fetch(`https://api.github.com/users/${valueOfInput}`)
   .then((response) => response.json())
   .then((data) => {
      userName.textContent = data.name;
      atUser.textContent = data.login;
      joinDate.textContent = data.created_at;
      bio.textContent = data.bio;
      repoCounter.textContent = data.public_repos;
      followerCounter.textContent = data.followers;
      followingCounter.textContent = data.following;
      userImg.src = data.avatar_url;
      city.textContent = data.location;

   console.log(data);
   })
})
 
