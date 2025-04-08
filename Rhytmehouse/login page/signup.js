document.getElementById('n').addEventListener('submit',function(event){
    event.preventDefault()

var password=document.getElementById('p').value

document.getElementById('s1').style.display="none" 

var reg_p=/^.{8}$/

localStorage.setItem("p",p)
localStorage.getItem("p")

if (password== ""){
    var w=document.getElementById('s1')
    w.style.display="block"
    w.textContent="Cannot be empty"
    w.style.color="red"
   }
   else if(!(reg_p.test(password))){
       event.preventDefault
       var w=document.getElementById('s1')
    w.style.display="block"
    w.textContent="must contain 8-digits"
    w.style.color="red"
   }
   else if (reg_p.test(password)){
       event.preventDefault
       var w=document.getElementById('s1')
    w.style.display="block"
    w.textContent="Accepted"
    w.style.color="green"
   }

})
