
document.querySelector('.menu2').addEventListener('click', () => {
    document.querySelector('.containernav2').style.display='block'
})

document.querySelector('.menu2').style.display = 'none'

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
getinfos()
async function getinfos() {
  const res = await fetch(baseUrl1,
    {
      method:'GET',
      }

    )
  

    const data=await res.json()


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


document.querySelectorAll('.itemnav').forEach(item => {
    item.onclick = function () {
        console.log('haha');

        if(item.id=='saojiSpecial'){
            generatecards(saojiSpecial)
                }
          if(item.id==='specials'){
            
              generatecards(special)
              
  
          }
          if(item.id==='staters'){
              generatecards(staters)
  
          }
          if(item.id==='mainCourse'){
            
              generatecards(vegMainCorse)
  
          }
          if(item.id==='paneerCourse'){
              generatecards(paneerMainCorse)
  
          }
          if(item.id==='kalaMasala'){
            
              generatecards(kalaMasala)
  
          }
          if(item.id==='biryani'){
            
              generatecards(biryani)
  
          }
          if(item.id==='chinese'){
            
              generatecards(chinese)
  
          }
          if(item.id==='roti'){
            
              generatecards(roti)
  
          }
          if(item.id==='dal'){
            
              generatecards(dal)
  
          }
          if(item.id==='rice'){
            
              generatecards(rice)
  
          }
          if(item.id==='deserts'){
            
              generatecards(deserts)
  
          }
          document.querySelector('.food').style.display = 'none'
          
         
          
          document.querySelector('.topic').innerHTML=item.innerHTML
    }})

document.querySelectorAll('.container').forEach(item => {
    item.onclick = function corn() {

        if(item.dataset.item==='saojiSpecial'){
          
          generatecards(saojiSpecial)
          
              }
        if(item.dataset.item==='specials'){
          
            generatecards(special)
            

        }
        if(item.dataset.item==='staters'){
          
            generatecards(staters)

        }
        if(item.dataset.item==='mainCourse'){
          
            generatecards(vegMainCorse)

        }
        if(item.dataset.item==='paneerCourse'){
          
            generatecards(paneerMainCorse)

        }
        if(item.dataset.item==='kalaMasala'){
          
            generatecards(kalaMasala)

        }
        if(item.dataset.item==='biryani'){
          
            generatecards(biryani)

        }
        if(item.dataset.item==='chinese'){
          
            generatecards(chinese)

        }
        if(item.dataset.item==='roti'){
          
            generatecards(roti)

        }
        if(item.dataset.item==='dal'){
          
            generatecards(dal)

        }
        if(item.dataset.item==='rice'){
          
            generatecards(rice)

        }
        if(item.dataset.item==='deserts'){
          
            generatecards(deserts)

        }
        document.querySelector('.food').style.display = 'none'

document.querySelector('nav').classList.add('nav')
        document.querySelector('.menu2').style.display = 'block'
        document.querySelector('.topic').innerHTML=item.firstChild.nextSibling.lastChild.previousElementSibling.firstElementChild.innerText  
   
   
    }                                                                        
   
   
   })

   document.querySelector('.menu2').addEventListener('click', () => {
    document.querySelector('.containernav2').style.display = 'block'
    document.querySelector('.menu2').style.display = 'none'
    document.querySelector('.cross').style.display='block'
})
document.querySelector('.cross').addEventListener('click', () => {

    document.querySelector('.containernav2').style.display = 'none'
    document.querySelector('.menu2').style.display = 'block'
    document.querySelector('.cross').style.display = 'none'
})

const lala=document.querySelector('.lala')
const input=document.querySelector('.text2')
const plus=document.querySelector('.plus')
const minus=document.querySelector('.minus')
const bbl=document.querySelector('.bbl')


  let generatecards=(food)=>{

lala.innerHTML= food.map((x)=>{
    let id=x.item ;

    let search=basket.find((x)=>x.id=== id) || []

    return `


<div class="card">
<div class="photo">
    <img src="${x.url}">
</div>
<div class="description">
    <h3 class="name">${id}</h3>
    
    <h3 >${x.price}</h3>
    <div class="buttons">
        <button class="minus" onclick='decrement(${id.replace(/ +/g, "")})'>-</button>
        <span  max="10" min="0" type="number" id='${id.replace(/ +/g, "")}'>${search.items ===
            undefined? 0: search.items}</span>
        
     <button class="plus" onclick='increment(${id.replace(/ +/g, "")})'>+</button>
    </div>
</div>
</div>`
}).join('')

  }
let basket=JSON.parse(localStorage.getItem("data")) || []


let increment =(id)=>{
console.log(id);
let selecteditem=id
console.log(selecteditem);
let search=basket.find((y)=> y.id=== selecteditem.id );

var search9 = saojiSpecial.find((y) => y.item.replace(/ +/g, "") === selecteditem.id) || special.find((y) => y.item.replace(/ +/g, "") === selecteditem.id) || staters.find((y) => y.item.replace(/ +/g, "") === selecteditem.id) || vegMainCorse.find((y) => y.item.replace(/ +/g, "") === selecteditem.id) || paneerMainCorse.find((y) => y.item.replace(/ +/g, "") === selecteditem.id) || kalaMasala.find((y) => y.item.replace(/ +/g, "") === selecteditem.id) || biryani.find((y) => y.item.replace(/ +/g, "") === selecteditem.id) || chinese.find((y) => y.item.replace(/ +/g, "") === selecteditem.id) || roti.find((y) => y.item.replace(/ +/g, "") === selecteditem.id) || dal.find((y) => y.item.replace(/ +/g, "") === selecteditem.id) || rice.find((y) => y.item.replace(/ +/g, "") === selecteditem.id) ||deserts.find((y) => y.item.replace(/ +/g, "") === selecteditem.id) ||[];

if(search === undefined) {
   
    basket.push({
        id: selecteditem.id,
        items:1,
        price:search9.price,
    })

}  else{
   search.items+=1
}


localStorage.setItem("data", JSON.stringify(basket));

update(selecteditem.id)
}
let decrement =(id)=>{

    let selecteditem=id
    let search=basket.find((y)=> y.id === selecteditem.id );
  if(search=== undefined)return;
  
  else  if(search.items === 0) return ;
    
else{
       search.items-=1
    }

    update(selecteditem.id)

basket=basket.filter((v) => v.items !== 0);


localStorage.setItem("data", JSON.stringify(basket));
}
    
let update=(id)=>{
   
    let search=basket.find((x)=>x.id === id.replace(/ +/g, "") )

    document.getElementById(id).innerHTML=search.items

calc()
}

let calc=()=>{

const navcart= document.getElementById('cartproducts')
navcart.innerHTML=basket.map((v)=>v.items).reduce((x,y)=>x+y,0)
}

calc()

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
console.log(hh);
document.querySelector('.waiter').innerHTML=hh.length
if(hh.length>0){
console.log(hh.length);
}
}

document.querySelector('.navbar-fostrap').addEventListener('click',()=>{
    document.querySelector('.nav-fostrap').classList.toggle('visible')
    
      })