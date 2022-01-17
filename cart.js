let cart = JSON.parse(localStorage.getItem("cart"))
? JSON.parse(localStorage.getItem("cart"))
:[];
  

console.log(cart)

function readCart(cart){
    document.querySelector("#cart").innerHTML = "";

    cart.forEach((watch, position) =>{
        document.querySelector("#cart").innerHTML +=`
        <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${watch.img}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${watch.name}</h5>
        <p class="card-text">Price: R ${watch.price}</p>
        <input type="number" min=1 value=${watch.qty} id="updateCartQty${position}" onchange ="updateCart(${position})" >
        <p>R${parseInt(watch.qty) * parseFloat(watch.price)} </p>
        <button class="btn btn-danger" onclick="deleteCart(${position})">REMOVE ITEM</button>
       
      </div>
    </div>
  </div>
</div>
        
        
        `; 
    }
    );
    document.querySelector("#cart").innerHTML +=`
    <h1> Your total is R${calculateTotal()}</h1>
    `
}

readCart(cart);


function updateCart(position){
    let qty = document.querySelector(`#updateCartQty${position}`).value;
    cart[position] = {...cart[position], qty} ;
    localStorage.setItem("cart",JSON.stringify(cart));
    readCart(cart);
}

function deleteCart(position){
    cart.splice(position, 1)
    localStorage.setItem("cart",JSON.stringify(cart));
    readCart(cart);
}



                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
function calculateTotal(){
    let total = 0;
    cart.forEach(watch => {
        total = total + watch.price * watch.qty
    })
    return total.toFixed(2);
}

function checkOut(){
  cart = [];
  localStorage.setItem("cart",JSON.stringify(cart));
  readCart(cart);
}