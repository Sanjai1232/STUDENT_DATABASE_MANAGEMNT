const rollno=document.getElementById("rollno")
const password=document.getElementById("password")
const btn=document.getElementById("stuloginbtn")

btn.onclick=async(e)=>{
    e.preventDefault();
    const obj={
        Rollno:rollno.value,
        password:password.value,
    }
    const res=await fetch("http://localhost:3000/slogin",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(obj)
    })
    const data=await res.json();
    console.log(data.message);
    if(data.st){
        alert("login successful");
        console.log(data);
        console.log(data.token);
        window.location.href="studashboard.html";
        localStorage.setItem("token",data.token);
    }else{
        alert("login failed");
    }
    
}