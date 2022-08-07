//for 4500 functioning:



//document.getElementById('submit').addEventListener('click', formFill)
document.getElementById('submit').addEventListener('click', statusLight)




function statusLight() {
    if (document.getElementById('instStat').innerText === 'available'){
        document.getElementById('4500InstStat').style.backgroundColor = 'lightgreen'
    }else if(document.getElementById('instStat').innerText === 'maint'){
        document.getElementById('4500InstStat').style.backgroundColor = 'skyblue'
    }else if(document.getElementById('instStat').innerText === 'reserved'){
        document.getElementById('4500InstStat').style.backgroundColor = '#FFFF8F'
    }else{
        document.getElementById('4500InstStat').style.backgroundColor = 'salmon'
        
    }
}


//dmpk letter colors

function letterColor() {
    document.getElementById('D').style.color = "lightgreen"
    document.getElementById('M').style.color = "salmon"
    document.getElementById('P').style.color = "skyblue"
    document.getElementById('K').style.color = "#FFFF8F"
}
function letterColor2() {
    document.getElementById('M').style.color = "lightgreen"
    document.getElementById('P').style.color = "salmon"
    document.getElementById('K').style.color = "skyblue"
    document.getElementById('D').style.color = "#FFFF8F"
}
function letterColor3() {
    document.getElementById('P').style.color = "lightgreen"
    document.getElementById('K').style.color = "salmon"
    document.getElementById('D').style.color = "skyblue"
    document.getElementById('M').style.color = "#FFFF8F"
}
function letterColor4() {
    document.getElementById('K').style.color = "lightgreen"
    document.getElementById('D').style.color = "salmon"
    document.getElementById('M').style.color = "skyblue"
    document.getElementById('P').style.color = "#FFFF8F"
    
}
//set interval for dmpk letter colors
function flashes() {
    x = 2;
letterColor()
setTimeout(letterColor2, 500)
setTimeout(letterColor3,1000)
setTimeout(letterColor4, 1500)
setTimeout(flashes, x*1000);
}
flashes();





//instrument status api

fetch(`/instrument/api/inst`)
 .then(res => res.json()) // parse response as JSON
 .then(results =>{
    //functionality for 4500
    
    //hides status li if it does not have a data or it belongs to another instrument
   console.log(results)
   if(document.querySelector(".infos").lastElementChild === null){
    document.getElementById('infos').classList.add('available')
    document.getElementById('avail').classList.remove('hide')
   }else{
   let lastOne = document.querySelector(".infos").lastElementChild
   let thisStatus = lastOne.querySelector(".stat").innerText

   for(i = 0; i < results.length; i++){
   document.getElementById('infos').classList.add(thisStatus)
   }
   }
   //functionality for 5500
    
    //hides status li if it does not have a data or it belongs to another instrument

   if(document.querySelector(".infosB").lastElementChild === null){
    document.getElementById('infosB').classList.add('available')
    document.getElementById('availB').classList.remove('hide')
   }else{
   let lastOneB = document.querySelector(".infosB").lastElementChild
   let thisStatusB = lastOneB.querySelector(".stat").innerText
   for(i = 0; i < results.length; i++){
   document.getElementById('infosB').classList.add(thisStatusB)
   }
}
//functionality for 4000-1
    
    //hides status li if it does not have a data or it belongs to another instrument

   if(document.querySelector(".infosC").lastElementChild === null){
    document.getElementById('infosC').classList.add('available')
    document.getElementById('availC').classList.remove('hide')
   }else{
   let lastOneC = document.querySelector(".infosC").lastElementChild
   let thisStatusC = lastOneC.querySelector(".stat").innerText
   for(i = 0; i < results.length; i++){
   document.getElementById('infosC').classList.add(thisStatusC)
   }
}
    //functionality for 4000-2
    
    //hides status li if it does not have a data or it belongs to another instrument

   if(document.querySelector(".infosD").lastElementChild === null){
    document.getElementById('infosD').classList.add('available')
    document.getElementById('availD').classList.remove('hide')
   }else{
   let lastOneD = document.querySelector(".infosD").lastElementChild
   let thisStatusD = lastOneD.querySelector(".stat").innerText
   for(i = 0; i < results.length; i++){
   document.getElementById('infosD').classList.add(thisStatusD)
   }
}

//adds a trashcan icon to delete status reservations for 4500

  const deleteText = document.querySelectorAll('.fa-trash')

  Array.from(deleteText).forEach((element)=>{
   element.addEventListener('click', deleteRapper)
  })
 
 function deleteRapper(){
   const dateend = this.parentNode.childNodes[1].innerText
   fetch('/deleteRes',{
     method: 'delete',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({
       dateend: dateend
     })
   })
   .then(res => {
     if (res.ok) return res.json()
   })
   .then(data => {
 
     window.location.reload()
     console.log(dateend)
   })
 }
    
//adds a trashcan icon to delete status reservations for 5500
    
 const deleteTextB = document.querySelectorAll('.fa-trashB')

 Array.from(deleteTextB).forEach((element)=>{
  element.addEventListener('click', deleteRapperB)
 })

function deleteRapperB(){
  const dateendB = this.parentNode.childNodes[1].innerText
  fetch('/deleteResB',{
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      dateendB: dateendB
    })
  })
  .then(res => {
    if (res.ok) return res.json()
  })
  .then(data => {

    window.location.reload()
    console.log(dateendB)
  })
}
    //adds a trashcan icon to delete status reservations for 4000-1

const deleteTextC = document.querySelectorAll('.fa-trashC')

 Array.from(deleteTextC).forEach((element)=>{
  element.addEventListener('click', deleteRapperC)
 })

function deleteRapperC(){
  const dateendC = this.parentNode.childNodes[1].innerText
  fetch('/deleteResC',{
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      dateendC: dateendC
    })
  })
  .then(res => {
    if (res.ok) return res.json()
  })
  .then(data => {

    window.location.reload()
    console.log(dateendC)
  })
}
    //adds a trashcan icon to delete status reservations for 4000-2

const deleteTextD = document.querySelectorAll('.fa-trashD')

 Array.from(deleteTextD).forEach((element)=>{
  element.addEventListener('click', deleteRapperD)
 })

function deleteRapperD(){
  const dateendD = this.parentNode.childNodes[1].innerText
  fetch('/deleteResD',{
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      dateendD: dateendD
    })
  })
  .then(res => {
    if (res.ok) return res.json()
  })
  .then(data => {

    window.location.reload()
    console.log(dateendD)
  })
}
