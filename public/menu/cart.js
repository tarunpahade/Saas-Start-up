
const saojiSpecial=[]
const special=[]
const staters=[]
const vegMainCorse=[]
const paneerMainCorse=[]
const rice=[]
const biryani=[]
const dal=[]
const roti=[]
const deserts=[]
const kalaMasala=[]
const chinese=[]


// const appdata=JSON.parse(localStorage.getItem('kot')) || []
const baseUrl1='http://localhost:8000/send'

async function getinfos() {
  const res = await fetch(baseUrl1,
    {
      method:'GET',
      }

    )
  

    const data=await res.json()
console.log(data);

data.map((x)=>{
    if(x.category==='saojiSpecial'){
        saojiSpecial.push(x)

    }
    if(x.category==='special'){
            
        special.push(x)
        

    }
    if(x.category==='starters'){
      
    staters.push(x)

    }
    if(x.category==='vegMainCorse'){
        vegMainCorse.push(x)

    }
    if(x.category==='paneerMainCourse'){
        
        paneerMainCorse.push(x)

    }
    if(x.category==='kalamMsala'){
      
        kalaMasala.push(x)

    }
    if(x.category==='biryani'){
    
        biryani.push(x)

    }
    if(x.category==='chinese'){
      
        chinese.push(x)

    }
    if(x.category==='roti'){
      
        roti.push(x)

    }
    if(x.category==='dal'){
    
        dal.push(x)

    }
    if(x.category==='rice'){
    
        rice.push(x)

    }
    if(x.category==='deserts'){
    
        deserts.push(x)

    }


})

}






 getinfos().then(o=>{
  generatecards()
  TotalAmount();
 })


var kot=0
let arrya=JSON.parse(localStorage.getItem("kot")) || [];
var basket=JSON.parse(localStorage.getItem("data")) || [];



let label= document.getElementById('label')
let scart=document.getElementById('shopping-cart')





const food=[]

// let calc=()=>{

//     const navcart= document.getElementById('cartproducts')
//     navcart.innerHTML=basket.map((v)=>v.items).reduce((x,y)=>x+y,0)
    
//     }
    // calc()

   
    var generatecards = () => {
        if (basket.length !== 0) {
          return (scart.innerHTML = basket
            .map((x) => {
kot++;console.log(x);
console.log(special);
             var search = saojiSpecial.find((y) => y.item.replace(/ +/g, "") === x.id) || special.find((y) => y.item.replace(/ +/g, "") === x.id) || staters.find((y) => y.item.replace(/ +/g, "") === x.id) || vegMainCorse.find((y) => y.item.replace(/ +/g, "") === x.id) || paneerMainCorse.find((y) => y.item.replace(/ +/g, "") === x.id) || kalaMasala.find((y) => y.item.replace(/ +/g, "") === x.id) || biryani.find((y) => y.item.replace(/ +/g, "") === x.id) || chinese.find((y) => y.item.replace(/ +/g, "") === x.id) || roti.find((y) => y.item.replace(/ +/g, "") === x.id) || dal.find((y) => y.item.replace(/ +/g, "") === x.id) || rice.find((y) => y.item.replace(/ +/g, "") === x.id) ||deserts.find((y) => y.item.replace(/ +/g, "") === x.id) ||[];
            console.log(search);
             food.push(search.price,x.id,x.items);
              return `
             
<div class="card">
<div class="photo" style='    margin-right: 1em;'>
    <img src="${search.url}">
</div>
<div class="description">
    <h4 class="name">${search.item}</h4>
    
    <h4 class='cost' >${x.price}</h4>
    <div class="buttons">
        <button class="minus" onclick='decrement(${x.id.replace(/ +/g, "")})'>-</button>
        <span  max="10" min="0" type="number" id='${x.id.replace(/ +/g, "")}'>${x.items}</span>
        
     <button class="plus" onclick='increment(${x.id.replace(/ +/g, "")})'>+</button>
    </div>


</div>
</div>
                 
        `
                         


            }
    
            ).join(""))
      
          }
   
        else{
            scart.innerHTML=``
            label.innerHTML=`
            <h2>Ordered List is Empty</h2>
            <a href='/menu'><button class='homebtn'>Back Home</button></a>
            `;
        }
        
    }
  




    

   
    
    var TotalAmount = () => {
      if (basket.length !== 0) {
        let amount = basket
          .map((x) => {
            let { items, id ,price} = x;
            var search = saojiSpecial.find((y) => y.item.replace(/ +/g, "") === x.id) || special.find((y) => y.item.replace(/ +/g, "") === x.id) || staters.find((y) => y.item.replace(/ +/g, "") === x.id) || vegMainCorse.find((y) => y.item.replace(/ +/g, "") === x.id) || paneerMainCorse.find((y) => y.item.replace(/ +/g, "") === x.id) || kalaMasala.find((y) => y.item.replace(/ +/g, "") === x.id) || biryani.find((y) => y.item.replace(/ +/g, "") === x.id) || chinese.find((y) => y.item.replace(/ +/g, "") === x.id) || roti.find((y) => y.item.replace(/ +/g, "") === x.id) || dal.find((y) => y.item.replace(/ +/g, "") === x.id) || rice.find((y) => y.item.replace(/ +/g, "") === x.id) ||deserts.find((y) => y.item.replace(/ +/g, "") === x.id) ||[];

            return items * search.price;
          })
          .reduce((x, y) => x + y, 0);
    
        label.innerHTML = `
        <h2>Total Bill : ₹ ${amount}</h2>
        <h2>Total Orders : ${basket.length}</h2>
       
      
        <br>
     
    
   
        <input type='text' name='name' class='customerName' id='customerName' placeholder='Enter Your Name' req>
        <input type='text' name="table" class='customerName' row='5' id='tablenumber' placeholder='Enter Table No. Given below Qr code' req>
        <br>
      
        <br>
        <button  class="checkout" onclick='orderOnClick()'>Order Now</button>
        <button onclick="clearCart()" class="removeAll">Clear Menu</button>

    
        `;
      } else return;
     // </form>       
      // <form action="/haha" method='POST'>
    };
    

  




//to send data base to the database
function orderOnClick(){
  const customerName=document.getElementById('customerName')
  const tablenumber=document.getElementById('tablenumber')
  
  
  document.querySelector('.checkout').onclick=()=>{
  
     if(customerName.value.length >0 && tablenumber.value.length=='' )
    {alert('Please fill the table number given below qr menu')}
    else if(tablenumber.value.length >0 && customerName.value.length=='' )
    {alert('Please enter your name')}
  
  
   else if (customerName.innerText === '' && tablenumber.value === '') { alert('Please fill all the given inputs') }
  
    
    else{
   
  
  
  

  
  let info={
    'customerName':customerName.value,
    'tableNumber':tablenumber.value,
    'orderedItems':basket,
  }
  
  arrya.push(info)
  
  
  const baseUrl='http://localhost:8000/';
  //send info to backend
  async function getInfo(){
  
    const res=await fetch(baseUrl,
      {
        method:"POST",
      headers: {
  "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        pp:arrya})
    }
  
      
      ).then(response => {
        if (!response.ok) {                                  // ***
          console.log( "HTTP error " + response.status);  // ***
        }                                                    // ***
        // ...use `response.json`, `response.text`, etc. here
      })
      .catch(error => {
        console.log(error);
      });
  
    }
    getInfo()
  
  
  
  
  label.innerHTML=`
  <h2>${customerName.value} Your order will be ready soon</h2>
  
  <a class='btn' href='index.html'>Order More</a>
  `
  
  
  
  
  
  arrya=[]
  localStorage.setItem("kot", JSON.stringify(arrya));
  basket = [];
  
  localStorage.setItem("data", JSON.stringify(basket));
  
  
    }
  
  }}


  //next step
//make another page for customer after they checkout
const baseUrl='http://localhost:8000/info'
setInterval(() => {
    getinfo()
    
}, 1000);
async function getinfo() {
  const res = await fetch(baseUrl,
    {
      method:'GET',
      }

    )
  

    const data=await res.json()

const hh=data.filter((c)=>c.status==='cooked') || []

document.querySelector('.waiter').innerHTML=hh.length
if(hh.length>0){
console.log(hh.length);
}
}

 
var removeItem = (id) => {
  let selectedItem = id;

  basket = basket.filter((x) => x.id !== selectedItem.id);
  generatecards();
  TotalAmount();
  localStorage.setItem("data", JSON.stringify(basket));
};

var clearCart = () => {
  basket = [];
  generatecards();
  localStorage.setItem("data", JSON.stringify(basket));
};



    var increment = (id) => {
      let selectedItem = id;
      console.log(id);
      let search = basket.find((x) => x.id === selectedItem.id);
   
    let search9=basket.find((y)=> y.id === selectedItem.id );

      if (search === undefined) {
 
        basket.push({
          id: search9.item,
          items: 1,
          price:search.price
        });
      } else {
        search.items += 1;
      }
    
      generatecards();
      update(selectedItem.id);
      localStorage.setItem("data", JSON.stringify(basket));
    };
    var decrement = (id) => {
      let selectedItem = id;
      let search = basket.find((x) => x.id === selectedItem.id);
    
      if (search === undefined) return;
      else if (search.items === 0) return;
      else {
        search.items -= 1;
      }
      update(selectedItem.id);
      basket = basket.filter((x) => x.items !== 0);
      generatecards();
      localStorage.setItem("data", JSON.stringify(basket));
    };

    var update = (id) => {
      let search = basket.find((x) => x.id === id);


   const quant=   document.getElementById(id)
   quant.innerHTML = search.items;
   
  //  calc();
      TotalAmount();
    };