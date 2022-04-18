# rickandmortyApi

This is an website built with bootsrap using apis by dom manipulation toshow the characters of rick and morty

In this readme I'll show my road to build this

So, the api is https://rickandmortyapi.com/api

I need to download that information (or bring it back to my code) so I could work with it

Here are my steps:
1. Connect to the server
2. Process the data and convert it to JSON
3. Use the JSON data to built with the DOM

Some notes: This is my HARDEST EVER code project built entirely by myself. I could code it with someone else, but I decided to built this solo in order to practice and master all the skills I mentioned before. I think I'll be ready to work with React js after this challenge.

## 1st challenge: Downloading the information

I'll use some async/await here (I could use promises but since we have ES6+ I said why not, also I heard is better practice to use this)

Usefuls links to bootsraps:
- For badges: https://getbootstrap.com/docs/5.1/components/badge/
- For cards: https://getbootstrap.com/docs/5.1/components/card/

So I See every time I click on the button I gotta make a new row in bootsrap

remember, this is the code everytime I gotta make in html:
```html
<div class="row">
  <div class="col-12 col-sm-4 col-lg-3">
  <div class="card">
      <img class="card-img-top" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="">
      <div class="card-body">
        <h5 class="card-title">Rick Sanchez</h5>
        <span class="badge bg-success">Alive</span>
        <p class="card-text">Dimension C-137</p>
      </div>
  </div>
</div>
```

And I gotta make variables in order to bring the characters by 4 and 4

There are in total 826 characters

Appraently the API loads a total of 20 characters per page

So I gotta make a random number to take out a random page and take out their 20 characters

https://rickandmortyapi.com/api/character?page=1


```js
const url = "https://rickandmortyapi.com/api/character?page=";
// https://rickandmortyapi.com/api/character?page=2
const button = document.querySelector('#button-app');
const minimum = 1;
const maximum = 42;
const random = () => Math.floor(Math.random() * (maximum - minimum) + minimum) 
const pageUrl = `${url}${random()}`

```
Obtained random page

Type will replace dimension as some characters dont have their dimesnion

Now I realised that I can use Ajax and Postman to make this faaar easier

My challenge now is create new row each time i click on the button

some changes, what will better load will be
```html
<div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
      </div>
```