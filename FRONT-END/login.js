const api="http://localhost:3000/All_Student"
// const btn=document.getElementById("demo")
const loginbtn=document.getElementById("loginbtn")
const rollno=document.getElementById("username")
const password=document.getElementById("password")
const role=document.getElementById("role")

loginbtn.onclick=async(e)=>{
 e.preventDefault();
    const obj={
        rollno:rollno.value,
        password:password.value,
        role:role.value
    }
    console.log(obj.rollno,obj.password,obj.role);
     
    const res=await fetch("http://localhost:3000/slogin",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(obj)
      })
    const data=await res.json();
    console.log(data.st);
  
}
