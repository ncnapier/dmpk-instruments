
//document.getElementById('submit').addEventListener('click', formFillB)

//date and time for chat
//let currentDate = new Date();
// let cDay = currentDate.getDate();
// let cMonth = currentDate.getMonth() + 1;
// let cYear = currentDate.getFullYeaar();
// let dateToPrint = cDay + '/' + cMonth + '/' + cYear;

// function formFillB() {
//     yyy = document.getElementById('statD').value 
    
//     xxx = document.getElementById('chats').value 
//     document.getElementById('chatsE').innerHTML = yyy + ":" + "<br>" + xxx + "<br>" + "(" + currentDate + ")"
    
// }
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


//add date and time to form
 function addDateChat(){
   document.getElementById('time').value = new Date();
 }
 addDateChat()
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

//accuweather API
fetch("https://dataservice.accuweather.com/currentconditions/v1/335668?apikey=WlJdqhjA4jTuM6FQA5uH1Rr7GoyHhKYY&language=en-us&details=true")
.then(res => res.json()) // parse response as JSON
.then(data => {
    console.log(data)
  console.log(data[0].ApparentTemperature.Metric.Value)
  console.log(data[0].WeatherIcon)
  let icon = data[0].WeatherIcon
  if(icon <= 4){
    document.getElementById('icon').style.backgroundColor = "#fff44f"
  }else if(icon <= 11){
    document.getElementById('icon').style.backgroundColor = "#dcdcdc"
  }else if(icon <= 18){
    document.getElementById('icon').style.backgroundColor = "#bcd4e6"
    document.getElementById('icon').style.borderRadius = "0px 50% 50% 50%"
    
  }else if(icon <= 29){
    document.getElementById('icon').style.backgroundColor = "white"
    document.getElementById('icon').style.border = "1px black solid"
  }else if(icon <= 34){
    document.getElementById('icon').style.backgroundColor = "black"
    document.getElementById('icon').style.border = "1px black solid"
  }else if(icon <= 38){
    document.getElementById('icon').style.backgroundColor = "#dcdcdc"
    document.getElementById('icon').style.border = "4px black solid"
  }else if(icon <= 42){
    document.getElementById('icon').style.backgroundColor = "#bcd4e6"
    document.getElementById('icon').style.border = "4px black solid"
    document.getElementById('icon').style.borderRadius = "0px 50% 50% 50%"
  }else if(icon <= 44){
    document.getElementById('icon').style.backgroundColor = "white"
    document.getElementById('icon').style.border = "4px black solid"

  }

  document.querySelector("h4").innerText = `${data[0].WeatherText} and ${data[0].Temperature.Imperial.Value} F (${data[0].Temperature.Metric.Value} C)`
})
.catch(err => {
    console.log(`error ${err}`)
});

//fetch(`https://ncnapier.github.io/instrumentstatus/api.js`)
// fetch('https://dmpk-instrument-api.herokuapp.com/api/chat')
// .then(res => res.json()) // parse response as JSON
// .then(results =>{
//   let arr = ""
  
//   function checkArr(results){
//     for(i = 0; i < results.length; i++){
//       const ul = document.getElementById('chatsE')
//       const li = document.createElement("li")
//       li.appendChild(document.createTextNode(results[i].statD + ":"  + "          "  + results[i].chats + "(" + results[i].time + ")"))    //+ "(" + currentDate + ")"))
//       ul.appendChild(li)
       
//     }
//   }
//   checkArr(results)
//   console.log(results)
//   //document.getElementById('chatsE').innerText =  arr
  
// })
// .catch((err, results) => {
//   console.log(`error ${err}`)
  
// });
 

// .then(results => {
//     console.log(results)
// })


//delete chat:

const deleteText = document.querySelectorAll('.fa-trash')

 Array.from(deleteText).forEach((element)=>{
  element.addEventListener('click', deleteRapper)
 })

function deleteRapper(){
  const time = this.parentNode.childNodes[6].firstChild.data
  fetch('/deleteRapper',{
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      time: time
    })
  })
  .then(res => {
    if (res.ok) return res.json()
  })
  .then(data => {

    window.location.reload()
    console.log(time)
  })
}
