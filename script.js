let username ="ck_c58ad424e8482b90d216644d6f970ff8a53a881e";
let password ="cs_30404b2d18300e20f3b9a00a59a0fa952e22b0c6";

const url ="https://bilalahmed.no/cms/wp-json/wc/v3/products";
const products = document.querySelector('#products');



const jacketContainer = document.querySelector(".jackets-container")


fetch(url, {

method: 'GET',

headers: new Headers({

 'Authorization': 'Basic ' + btoa(username + ":" + password)

})


})



 .then(response => response.json())

 .then(data => {

 listData(data)
 console.log(data)
 })

.catch(error => console.error(error));


function listData(jacket) {

 for (const {name, price, featured, regular_price, description, images, id} of jacket){
    let imagePath = images[0].src
    jacketContainer.innerHTML += `
    <a href="details.html" class="productcard">
        <div class="productname">${name}</div>
        <div class="imagecontainer"><img class="productimage" src="${imagePath}"></div>
        <div class="productprice">${regular_price}</div>
    
        </a>`
    
 }}



   
   
    

   