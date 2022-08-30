//user and password to local storage:
function setUser(){
  let user = document.getElementById('user').value 
  let pword = document.getElementById('pword').value
  localStorage.setItem('user', user)
  localStorage.setItem('pword', pword)
  console.log(user)
  console.log(pword)
 }
 document.getElementById('submitpass').addEventListener("click", setUser)
 
 //get from local storage
 function removeBlocker(){
   let user = localStorage.getItem("user");
   console.log(user);
   if(localStorage.getItem('pword') == 'DMPKLAB!'){
     document.getElementById('blocker').classList.add('hide')
   }
 }
 removeBlocker()

//for instrument functioning:

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
//fetch(`https://dmpk-instrument-api.herokuapp.com/api.js`)
fetch(`/instrument/api/inst`)
 .then(res => res.json()) // parse response as JSON
 .then(results =>{
   
   console.log(results)
//4500

   if(document.querySelector(".infos").lastElementChild === null){
    document.getElementById('infos').classList.add('available')
    document.getElementById('avail').classList.remove('hide')
   }else{
   let lastOne = document.querySelector(".infos").lastElementChild
   let thisStatus = lastOne.querySelector(".statT").innerText
 
   
   document.getElementById('infos').classList.add(thisStatus)
   
   }
//5500
   if(document.querySelector(".infosB").lastElementChild === null){
    document.getElementById('infosB').classList.add('available')
    document.getElementById('availB').classList.remove('hide')
   }else{
   let lastOneB = document.querySelector(".infosB").lastElementChild
   let thisStatusB = lastOneB.querySelector(".statB").innerText
   
   document.getElementById('infosB').classList.add(thisStatusB)
   
}
//4000_02
   if(document.querySelector(".infosC").lastElementChild === null){
    document.getElementById('infosC').classList.add('available')
    document.getElementById('availC').classList.remove('hide')
   }else{
   let lastOneC = document.querySelector(".infosC").lastElementChild
   let thisStatusC = lastOneC.querySelector(".statC").innerText

   document.getElementById('infosC').classList.add(thisStatusC)
   
}
//4000_01
   if(document.querySelector(".infosD").lastElementChild === null){
    document.getElementById('infosD').classList.add('available')
    document.getElementById('availD').classList.remove('hide')
   }else{
   let lastOneD = document.querySelector(".infosD").lastElementChild
   let thisStatusD = lastOneD.querySelector(".statD").innerText
   
   document.getElementById('infosD').classList.add(thisStatusD)
   
}
//tecan
//tecan

  


// if(document.querySelector('.statT').innerHTML === 'reserved'){
//   document.getElementById('infosT').classList.add('available')
// }else{
//   document.getElementById('infosT').classList.add('available')
// }

// if(document.querySelector(".infosT").lastElementChild === null){
//   document.getElementById('infosT').classList.add('available')
//   document.getElementById('availT').classList.remove('hide')
//  }else{
//  let lastOneT = document.querySelector(".infosT").lastElementChild
//  let thisStatusT = lastOneT.querySelector(".stat").innerText
//  for(i = 0; i < results.length; i++){
//  document.getElementById('infosT').classList.add(thisStatusT)
//  }
// }
 })

//deleting reservations:
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

function deleteRapperT(){
  const dateendT = this.parentNode.childNodes[1].innerText
  fetch('/deleteResTecan',{
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      dateendT: dateendT
    })
  })
  .then(res => {
    if (res.ok) return res.json()
  })
  .then(data => {

    window.location.reload()
    console.log(dateendT)
  })
}

const deleteTextT = document.querySelectorAll('.fa-trashT')

 Array.from(deleteTextT).forEach((element)=>{
  element.addEventListener('click', deleteRapperT)
 })