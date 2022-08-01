//for 4500 functioning:



//document.getElementById('submit').addEventListener('click', formFill)
document.getElementById('submit').addEventListener('click', statusLight)

// function formFill() {
//     xxx = document.getElementById('init').value 
//     document.getElementById('initE').innerHTML = xxx

//     yyy = document.getElementById('stat').value 
//     document.getElementById('instStat').innerHTML = yyy

//     aaa = document.getElementById('date').value 
//     document.getElementById('runDate').innerHTML  = aaa

//     bbb = document.getElementById('dateend').value 
//     document.getElementById('endDate').innerHTML  = bbb
// }


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

//for 5500 functioning:
// document.getElementById('submitB').addEventListener('click', formFillB)
// document.getElementById('submitB').addEventListener('click', statusLightB)

// function formFillB() {
//     xxx = document.getElementById('initB').value 
//     document.getElementById('initEB').innerHTML = xxx

//     yyy = document.getElementById('statB').value 
//     document.getElementById('instStatB').innerHTML = yyy

//     aaa = document.getElementById('dateB').value 
//     document.getElementById('runDateB').innerHTML = aaa

//     bbb = document.getElementById('dateendB').value 
//     document.getElementById('endDateB').innerHTML = bbb
// }


// function statusLightB() {
//     if (document.getElementById('instStatB').innerText === 'available'){
//         document.getElementById('5500InstStat').style.backgroundColor = 'lightgreen'
//     }else if(document.getElementById('instStatB').innerText === 'maint'){
//         document.getElementById('5500InstStat').style.backgroundColor = 'skyblue'
//     }else if(document.getElementById('instStatB').innerText === 'reserved'){
//         document.getElementById('5500InstStat').style.backgroundColor = '#FFFF8F'
//     }else{
//         document.getElementById('5500InstStat').style.backgroundColor = 'salmon'
        
//     }
// }

//for 4000_02 functioning:
// document.getElementById('submitC').addEventListener('click', formFillC)
// document.getElementById('submitC').addEventListener('click', statusLightC)

// function formFillC() {
//     xxx = document.getElementById('initC').value 
//     document.getElementById('initEC').innerHTML = xxx

//     yyy = document.getElementById('statC').value 
//     document.getElementById('instStatC').innerHTML = yyy

//     aaa = document.getElementById('dateC').value 
//     document.getElementById('runDateC').innerHTML = aaa

//     bbb = document.getElementById('dateendC').value 
//     document.getElementById('endDateC').innerHTML = bbb
// }


// function statusLightC() {
//     if (document.getElementById('instStatC').innerText === 'available'){
//         document.getElementById('40002InstStat').style.backgroundColor = 'lightgreen'
//     }else if(document.getElementById('instStatC').innerText === 'maint'){
//         document.getElementById('40002InstStat').style.backgroundColor = 'skyblue'
//     }else if(document.getElementById('instStatC').innerText === 'reserved'){
//         document.getElementById('40002InstStat').style.backgroundColor = '#FFFF8F'
//     }else{
//         document.getElementById('40002InstStat').style.backgroundColor = 'salmon'
        
//     }
// }

//for 4000_01 functioning:
// document.getElementById('submitD').addEventListener('click', formFillD)
// document.getElementById('submitD').addEventListener('click', statusLightD)

// function formFillD() {
//     xxx = document.getElementById('initD').value 
//     document.getElementById('initED').innerHTML = xxx

//     yyy = document.getElementById('statD').value 
//     document.getElementById('instStatD').innerHTML = yyy

//     aaa = document.getElementById('dateD').value 
//     document.getElementById('runDateD').innerHTML= aaa

//     bbb = document.getElementById('dateendD').value 
//     document.getElementById('endDateD').innerHTML = bbb
// }


// function statusLightD() {
//     if (document.getElementById('instStatD').innerText === 'available'){
//         document.getElementById('40001InstStat').style.backgroundColor = 'lightgreen'
//     }else if(document.getElementById('instStatD').innerText === 'maint'){
//         document.getElementById('40001InstStat').style.backgroundColor = 'skyblue'
//     }else if(document.getElementById('instStatD').innerText === 'reserved'){
//         document.getElementById('40001InstStat').style.backgroundColor = '#FFFF8F'
//     }else{
//         document.getElementById('40001InstStat').style.backgroundColor = 'salmon'
        
//     }
// }

//default all status to green/ available unless reserved-

// function defGreen() {
//     document.getElementById('4500InstStat').style.backgroundColor = 'lightgreen'
//     document.getElementById('5500InstStat').style.backgroundColor = 'lightgreen'
//     document.getElementById('40002InstStat').style.backgroundColor = 'lightgreen'
//     document.getElementById('40001InstStat').style.backgroundColor = 'lightgreen'
// // shows if inst is available:


//     document.getElementById('instStat').innerHTML = 'available'
//     document.getElementById('instStatB').innerHTML = 'available'
//     document.getElementById('instStatC').innerHTML = 'available'
//     document.getElementById('instStatD').innerHTML = 'available'
// }

// defGreen()

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



//setInterval(flashes(), 2000)

//instrument status api
//fetch(`https://dmpk-instrument-api.herokuapp.com/api.js`)
fetch(`/instrument/api/inst`)
 .then(res => res.json()) // parse response as JSON
 .then(results =>{
   
   console.log(results)
   if(document.querySelector(".infos").lastElementChild === null){
    document.getElementById('infos').classList.add('available')
    document.getElementById('avail').classList.remove('hide')
   }else{
   let lastOne = document.querySelector(".infos").lastElementChild
   let thisStatus = lastOne.querySelector(".stat").innerText
   //let statusCurrent = document.querySelector('.stat').innerHTML
   //console.log(statusCurrent)
   //document.getElementById('infos').classList.add(statusCurrent)
   for(i = 0; i < results.length; i++){
   document.getElementById('infos').classList.add(thisStatus)
   }
   }
//    if(document.querySelector(".infos").lastElementChild)
   
//    let statusCurrentB = document.querySelector('.stat').innerHTML
//    console.log(statusCurrentB)
   //document.getElementById('infosB').classList.add(statusCurrentB)
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

//    let statusCurrentC = document.querySelector('.stat').innerHTML
//    console.log(statusCurrentC)
   //document.getElementById('infosC').classList.add(statusCurrentC)
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

//    let statusCurrentD = document.querySelector('.stat').innerHTML
//    console.log(statusCurrentD)
   //document.getElementById('infosC').classList.add(statusCurrentC)
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
//    function addInitToClass(){
       
//    for(i = 0; i < results.length; i++){
//      let list = document.getElementById("list")
//      let listItems = list.children
//     listItems.className += 'results[i].init'
//     console.log(listItems)
//    }

// }
// addInitToClass()

//   function checkArr(results){
//     for(i = 0; i < results.length; i++){
//       const ul = document.getElementById('chatsE')
//       const li = document.createElement("li")
//       li.appendChild(document.createTextNode(results[i].statD + ":"  + "          "  + results[i].chats + "(" + results[i].time + ")"))    //+ "(" + currentDate + ")"))
//       ul.appendChild(li)
       
//     }
//   }
  //checkArr(results)

  //create a ul- each li of ul is a ul2- li of ul2 will be stust, rundate, enddate, useer
  
//    function checkArr(results){
//     let currentDate = new Date();
    
//     console.log(currentDate.toLocaleDateString('en-GB').split('/').reverse().join(''))
//     for(i = 0; i < results.length; i++){
//         let arrDate = results[i].dateend.split('')
//         let yearEnding = arrDate.slice(0,4)
//         let monthEnding = arrDate.slice(5,7)
//         let dayEnding = arrDate.slice(8,10)
//         let dateEnding = yearEnding.concat(monthEnding, dayEnding).join('')

//         console.log(dateEnding)
//         if(dateEnding < currentDate.toLocaleDateString('en-GB').split('/').reverse().join('')){
//             results.pop(results[i])
            
//         }
//     }
// }
//     checkArr(results)
//       const ul = document.getElementById('4500InstStat')
//       const li1 = document.createElement("li")
//       const li2 = document.createElement("li")
//       const li3 = document.createElement("li")
//       const li4 = document.createElement("li")
//       //const ul2 = document.createElement('ul')
//       li1.appendChild(document.createTextNode("Satus:" + results[i].stat ))
//       li2.appendChild(document.createTextNode("Run Date:" + results[i].date)) 
//       li3.appendChild(document.createTextNode("End Date:" + results[i].dateend))
//       li4.appendChild(document.createTextNode("User:" + results[i].init))              
//       ul.appendChild(li1)
//       ul.appendChild(li2)
//       ul.appendChild(li3)
//       ul.appendChild(li4)
//       li1.setAttribute('class', results[i].init)
//       li2.setAttribute('class', results[i].init)
//       li3.setAttribute('class', results[i].init)
//       li4.setAttribute('class', results[i].init)
//       //document.getElementsByClassName('li.nn').style.backgroundColor = 'red'
      
//         }
//     }
    
//   }
  
//   checkArr(results)
  
//    function instStatDisplay(){
    
//     for(i = 0; i < results.length; i++){
        
//         let currentDate = new Date();
//         let arrDate = results[i].dateend.split('')
//         let yearEnding = arrDate.slice(0,4)
//         let monthEnding = arrDate.slice(5,7)
//         let dayEnding = arrDate.slice(8,10)
//         let dateEnding = yearEnding.concat(monthEnding, dayEnding).join('')
//         if(Math.max(dateEnding) >= currentDate.toLocaleDateString('en-GB').split('/').reverse().join('')){
//             document.getElementById('instStat').innerHTML = results[i].stat
//         }else{
//             document.getElementById('instStat').innerHTML = 'available'
//         }
//     }
// }
// instStatDisplay()
// function classNameAdd(){

// document.getElementsByClassName('reservation').classNameAdd(results[i].init)

// }
// classNameAdd()
 })
//   //functon fills the instrument status form
//   function formFill() {
//     xxx = results[0].init 
//     document.getElementById('initE').innerHTML = xxx

//     yyy = results[0].stat 
//     document.getElementById('instStat').innerHTML = yyy

//     aaa = results[0].date 
//     document.getElementById('runDate').innerHTML  = aaa

//     bbb = results[0].dateend 
//     document.getElementById('endDate').innerHTML  = bbb
// }
// //formFill()
// statusLight()

//   console.log(results)
  //document.getElementById('chatsE').innerText =  arr

