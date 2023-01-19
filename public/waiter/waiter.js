const rders=document.querySelector('.orders')
const baseUrl='http://localhost:8000/info'
getinfo()
async function getinfo() {
  const res = await fetch(baseUrl,
    {
      method:'GET',
      }

    )
  

    const data=await res.json()
data.map((x)=>{

    if(x.status==='cooked'){
    const div=document.createElement('div')
      div.classList.add('card')
      const cardBody=document.createElement('div')
      cardBody.classList.add('card-body')
    
      const orderNumber=document.createElement('p')
      const served=document.createElement('button')
      orderNumber.innerHTML= ` is ready to be searved `
      const tableNumber=document.createElement('h1')
      tableNumber.innerHTML='TABLE: '+x.table
      const kotNumber=document.createElement('h1')
      kotNumber.innerHTML='KOT: '+x.kot
 
      served.addEventListener('click',()=>{
        const baseUrl='http://localhost:8000/waiter'
        post(x,baseUrl)
        location.reload()
       })
 
      served.innerHTML='Served'

 cardBody.append(tableNumber,kotNumber)
 div.append(cardBody,orderNumber,served)
 document.body.append(div)
 rders.innerHTML='muhahahahha'

 //rders.push(orderNumber,served)
 //   const n =Notification.requestPermission.then(
    //      new Notification("xample Notification", {
    //         body: `order ${x.name} is ready, at seat ${x.table}`,
    //         data: `order ${x.kot} is ready, at seat ${x.table}` 
    //     }))
    }
})    
if(rders.innerHTML=''){
  rders.innerHTML='Nothing To serve'
}
}

  async  function post(data,baseUrl){


    const res= await fetch(baseUrl,
      {
        method:"POST",
      headers: {
  "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        pp:data}),
  
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

//sen notification on reciving a new aorder next task

document.querySelector('.navbar-fostrap').addEventListener('click',()=>{
  document.querySelector('.nav-fostrap').classList.toggle('visible')
  
    })