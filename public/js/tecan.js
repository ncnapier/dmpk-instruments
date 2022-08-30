//tecan
if(document.querySelector(".infosT").lastElementChild === null){
    document.getElementById('infosT').classList.add('available')
    document.getElementById('availT').classList.remove('hide')
   }else{
   let lastOneT = document.getElementById("listT").lastElementChild
   console.log(lastOneT)
   let thisStatusT = lastOneT.querySelector(".statT").innerText
   console.log(thisStatusT)
   document.getElementById('4500InstStat').classList.add(thisStatusT)
   
  }







