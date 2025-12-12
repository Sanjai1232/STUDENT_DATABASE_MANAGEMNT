const Rno=document.getElementById("rno")
const btn=document.getElementById("btn")
const token=localStorage.getItem("token")
if(!token){
    alert("no token provided")
    window.location.href="login.html"
}


btn.onclick= async(e)=>{
e.preventDefault();
console.log(Rno.value);

    const obj={
        Rollno:Rno.value
    }
    const res=await fetch("http://localhost:3000/Delete_Student",{
        method:"DELETE",
        headers:{
            'Content-Type':"application/json",
            'Authorization':`Bearer ${localStorage.getItem('token')}`
        },
        body:JSON.stringify(obj)
    })
     const data=await res.json()
     if(data.sts){
         return alert(data.message)
     }
    return alert(data.message)
}