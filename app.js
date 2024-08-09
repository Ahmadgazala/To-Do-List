let inputDisplay = document.getElementById('inputFelid')
let btn =document.getElementById('btn')
let contaner = document.getElementById('contaner')


btn.addEventListener('click',function(){
  var graph = document.createElement('p')
  graph.innerText =inputDisplay.value
  if(inputDisplay.value !== ''){
    contaner.appendChild(graph)
    graph.classList.add("order-list")
 
    inputDisplay.value =""
  
  }
 
  graph.addEventListener('click',function(){
    if(    graph.style.textDecoration === 'line-through'
    ){
       graph.style.textDecoration = 'none'
    }
    else{
      graph.style.textDecoration = 'line-through'
    }
  })

  graph.addEventListener('contextmenu',function(){
    contaner.removeChild(graph)
  })

})




















/*
btn.addEventListener('click',function(){
  var paragraph =document.createElement('p')
  paragraph.innerText=inputDisplay.value
  contaner.appendChild(paragraph)
  inputDisplay.value= ""

  paragraph.addEventListener('click',function(){
    paragraph.style.textDecoration = 'line-through'
  })
  paragraph.addEventListener('dblclick',function(){
contaner.removeChild(paragraph)
  })
})


















let inputDisplay = document.getElementById('inputFelid')
let btn =document.getElementById('btn')
let contaner = document.getElementById('contaner')


btn.addEventListener('click',function(){
var paragraph= document.createElement('p')
paragraph.innerText =inputDisplay.value
contaner.appendChild(paragraph)
inputDisplay.value=""

paragraph.addEventListener('click',function(){
  paragraph.style.textDecoration ='line-through'
})

paragraph.addEventListener('dblclick',function(){
  contaner.removeChild(paragraph)
})
}

)






let inputFelid = document.getElementById('inputFelid')
let btn = document.getElementById('btn')
let allContent = document.getElementById('contaner')


btn.addEventListener('click',function(){
  var paragraph = document.createElement('p')
  //paragraph.classList.add('')
  paragraph.innerText = inputFelid.value;
  allContent.appendChild(paragraph)
  inputFelid.value ="";
  paragraph.addEventListener('click',function(){
    paragraph.style.textDecoration = 'line-through'
  })

  paragraph.addEventListener('dblclick',function(){
    allContent.removeChild(paragraph)
  })
})

*/