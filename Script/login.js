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
            "Content-Type":"application/json"   // add token in header
        },
        body:JSON.stringify(obj)
      })
    const data=await res.json();
    console.log(data.message);// if it is true then login success else failed and add redirect page here for both admin and student
     if(!data.st){
       return alert("login failed");
     }
     localStorage.setItem("token",data.token);
    alert("login successful");
    window.location.href="dashboard.html";
    console.log(data.message);
    console.log(data.avail);
    console.log(data.token); 
}
