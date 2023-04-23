let username ="ck_c58ad424e8482b90d216644d6f970ff8a53a881e";
let password ="cs_30404b2d18300e20f3b9a00a59a0fa952e22b0c6";

const usedUrl ="https://bilalahmed.no/cms/wp-json/wc/v3/products";
const products = document.querySelector('#products');



const jacketContainer = document.querySelector(".featured-jackets-container")

console.log(jacketContainer)

fetch(usedUrl, {




method: 'GET',

headers: new Headers({

'Authorization': 'Basic ' + btoa(username + ":" + password)

 })


 })



.then(response => response.json())

 .then(data => {

console.log(data)

listData(data)

})

.catch(error => console.error(error));


function listData(jacket) {



for (const {name, price, featured, regular_price, description, images, id} of jacket){

if(featured === true && id === 32) {

let imagePath = images[0].src



jacketContainer.innerHTML +=

 `
 <div class="featured-jacket-card-one featured-jackets">

<div class="featured-jacket-top-card">

<img src="${imagePath}"/>

</div>

<div class="featured-jacket-bottom">

<a href="details.html?id=${id}"> Details</a>

</div>

</div>

 `





}



if(featured === true && id === 31) {
 let imagePath = images[0].src



 jacketContainer.innerHTML +=

 `

 <div class="featured-jacket-card-two featured-jackets">

<div class="featured-jacket-top-card">

 <img src="${imagePath}"/>
 </div>

<div class="featured-jacket-bottom">

<a href="details.html?id=${id}"> Details</a>

</div>

</div>

`





}

if(featured === true && id === 30) {

let imagePath = images[0].src



jacketContainer.innerHTML +=

`

 <div class="featured-jacket-card-three featured-jackets">

 <div class="featured-jacket-top-card">

<img src="${imagePath}"/>

</div>

<div class="featured-jacket-bottom">

 <a href="details.html?id=${id}"> Details</a>

</div>

</div>

`





}






}}