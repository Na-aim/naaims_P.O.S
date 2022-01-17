let watch = JSON.parse(localStorage.getItem("watch"))
? JSON.parse(localStorage.getItem("watch"))
:
[{
  name:"Huawei GT2 Pro Watch",
  catergory:"Smart watch",
  price:"4224.99",
  img:"https://www.bikeinn.com/f/13777/137776905/huawei-gt2-pro-watch.jpg"
},
{
    name:"Huawei Smartwatch Stainless Steel ",
    catergory:"Smart watch",
    price:"3065.99",
    img:"https://adnjxlogdq.cloudimg.io/v7/https://www.ishopping.pk/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/h/u/huawei_smartwatch_stainless_steel_with_stainless_steel_link_band_2.jpg"
  },
  {
    name:"Huawei Watch Elegant Gold Pearlh",
    catergory:"Smart watch",
    price:"6933.99",
    img:"https://vedroid.com/img/smartwatches/huawei-watch-elegant-gold-pearl/02.jpg"
  },
  {
    name:"Huawei Watch 2 SmartWatch Titanium Grey",
    catergory:"Smart watch",
    price:"1179.99",
    img:"https://www.hyjiyastore.com/images/products/huawei-smart-watch-2-price-saudi.jpg"
  },
{
  name:"Samsung Galaxy 3 Bluetooth Watch",
  catergory:"Smart watch",
  price:"3941.99",
  img:"https://www.bikeinn.com/f/13777/137776902/samsung-galaxy-3-bluetooth-watch.jpg"
},
{
    name:"Samsung Galaxy Gear SmartWatch Rose Gold",
    catergory:"Smart watch",
    price:"2199.99",
    img:"https://th.bing.com/th/id/OIP.IDal2pgRDjOUaNmg213FkAHaIM?pid=ImgDet&w=212&h=235&c=7&dpr=1,25"
  },
{
    name:"Samsung Galaxy 3 LTE Watch",
    catergory:"Smart watch",
    price:"7922.99",
    img:"https://www.bikeinn.com/f/13777/137776904/samsung-galaxy-3-lte-watch.jpg"
  },
  {
    name:"Samsung Galaxy Watch Active2 LTE ",
    catergory:"Smart watch",
    price:"5922.99",
    img:"https://images.samsung.com/is/image/samsung/za-galaxy-watch-active2-r825-sm-r825fssaxfa-lperspectivesilver-thumb-183403902?$240_240_PNG$"
  },
{
  name:"Rolex Yacht-Master",
  catergory:"Rolex",
  price:"152905",
  img:"https://cdn2.chrono24.com/images/uhren/21861340-k05be6vvf1s4rrln9k8x7b0i-ExtraLarge.jpg"
},
{
    name:"Rolex Yacht-Master 18K Gold ",
    catergory:"Rolex",
    price:"437577",
    img:"https://cdn2.chrono24.com/images/uhren/20274690-ppwds9wtaoj9jk9hf6hs04ep-ExtraLarge.jpg"
  },
  {
    name:"Rolex GMT-Master II,18k Yellow Gold",
    catergory:"Rolex",
    price:"652510",
    img:"https://cdn2.chrono24.com/images/uhren/21021373-l4idshjbtw6apokfh9png2lf-ExtraLarge.jpg"
  },
{
  name:"Rolex Yachtmaster Silver Dial Platinum",
  catergory:"Rolex",
  price:"259 999",
  img:"https://cdn2.chrono24.com/images/uhren/21805335-yjys0csiwox5fmya823sedli-ExtraLarge.jpg"
},
]


let cart = JSON.parse(localStorage.getItem("cart"))
? JSON.parse(localStorage.getItem("cart"))
:[];
  

function readWatch(watch){
   document.querySelector("#watch").innerHTML = "";

   watch.forEach((watch,position) => {
   document.querySelector("#watch").innerHTML +=`
    
    <div class="card" style="width: 18rem;">
    <img src="${watch.img}" class="card-img-top">
    <div class="card-body">
    
    <h5 class="card-title">${watch.name}</h5>
    <p class="card-text"> ${watch.price}</p>
    <div>
    <label class="form-label">Quantity:</label>
    <input type="number" min=1 value=1 id="addQty${position}">
    </div>
   
    <div class="content">
    <div  class="buttons">
    <button  class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#update-modal-${position}">EDIT</button>
    <button  class="btn btn-danger" onclick="deleteFruit(${position})">DELETE</button>
    <button  class="btn btn-danger" onclick="addToCart(${position})">ADD TO CART</button>
    </div>
    </div>
    </div>
  </div>
  
    <div class="modal fade" id="update-modal-${position}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">EDIT YOUR PURCHASE</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body1">
            <h4 class="fs-6">Name:</h4>
            <input type="text"class="in" id="update-input-${position}" value="${watch.name} "/>
            <h4 class="fs-6">Category:</h4>
            <select name="catergory" class="in" id="update-input-catergory-${position}">
            <option value="fruit">fruit</option>
            <option value="vegetables">vegetables</option>
            </select>
            <h4 class="fs-6">Price:</h4>
            <input type="text" class="in" id="update-input-price-${position}" value="${watch.price} "/>
           
            <h4 class="fs-6">Image:</h4>
            <input type="text" class="in" id="update-input-img-${position}" value="${watch.img} "/>
           
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-light" data-bs-dismiss="modal" onclick="updateFruit(${position})">Save changes</button>
          </div>
        </div>
      </div>
    </div>



   `;
   let totalQty = 0;

    cart.forEach(item =>{

      totalQty += parseInt(item.qty)

   })
   if(totalQty !=0){
     document.querySelector("#badge").innerHTML = totalQty
   }

   });

   
}

readWatch(watch);

function createWatch(){
    let newwatch = document.querySelector("#add").value;
    let catergory = document.querySelector("#catergory").value;
    let img =  document.querySelector("#img").value;
    let price = document.querySelector("#price").value;
   
    try{
        if(newwatch =="") throw "Please enter a watch name..."
        watch.forEach(individual =>{
            if(individual == newwatch)throw "That watch name already exists..."
        })
       

        watch.push({
            name:newwatch,
            catergory,
            img,
            price,
        });
       localStorage.setItem("watch",JSON.stringify(watch));
        readWatch(watch);
    } catch(err){
        alert(err)
    }
   
}

function deleteWatch(position){
    watch.splice(position, 1)
    localStorage.setItem("watch",JSON.stringify (watch));
    readWatch(watch);
}

function updateWatch(position){
    let watches =document.querySelector(`#update-input-${position}`).value;
    let catergory =document.querySelector(`#update-input-catergory-${position}`).value;
    let img =  document.querySelector(`#update-input-img-${position}`).value;
    let price = document.querySelector(`#update-input-price-${position}`).value;
    
    try{
        if(watches ===""){
            throw new Error("please enter a fruit name")
        }
        watch[position]={
            name:watches,
            catergory,
            img,
            price,
        };
        localStorage.setItem("watch",JSON.stringify (watch));
        readFruit(watch);
    }catch(error){
        alert(error)
    }
    }
  
        
  function addToCart(position){
    let qty = document.querySelector(`#addQty${position}`).value;
    let added = false;
    cart.forEach(product => {
      if(product.name == watch[position].name) {
        product.qty = parseInt(product.qty) + parseInt(qty)
        added = true
        localStorage.setItem("cart",JSON.stringify (cart));
      }
    })


   if(!added){
     cart.push({...watch[position], qty}) ;
     localStorage.setItem("cart",JSON.stringify (cart));
   }   
 }



 function catergorySort(){
   let catergory = document.querySelector("#catergorySort").value;

  console.log(catergorySort);

if( catergory == "all"){
readWatch(watch);
return
}

let filteredProducts = watch.filter((watch) => {
return watch.catergory == catergory;
});

readWatch(filteredProducts);
}

  function priceSort() {
    let direction = document.querySelector("#priceSort").value;
  
    let sortedProducts = watch.sort((a, b) => a.price - b.price);
  
    console.log(sortedProducts);
  
    if (direction == "descending") sortedProducts.reverse();
    readWatch(sortedProducts);
  }
  
  
  function sortName() {
    let direction = document.querySelector("#sortName").value;
  
    let sortedProducts = watch.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    });
    if (direction == "descending") sortedProducts.reverse();
    console.log(sortedProducts);
    readWatch(watch);
  }

  