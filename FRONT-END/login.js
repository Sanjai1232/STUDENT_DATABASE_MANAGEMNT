
// const btn=document.getElementById("demo")
const loginbtn=document.getElementById("loginbtn")
const rollno=document.getElementById("username")
const password=document.getElementById("password")
const role=document.getElementById("role")
const department=document.getElementById("depart")
loginbtn.onclick=async(e)=>{
 e.preventDefault();
   if(name.value==="" || password.value==="" || department.value===""){
      alert("Please fill all the fields");
      return;
   }

    const obj={
        name:rollno.value,
        password:password.value,
        department:department.value
    }
    console.log(obj.name,obj.password,obj.department);
    const res=await fetch("http://localhost:3000/adminlogin",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(obj)
      })
    const data=await res.json();
    console.log(data.st);
    console.log(data.message);
    console.log(data.avail);
    
}
