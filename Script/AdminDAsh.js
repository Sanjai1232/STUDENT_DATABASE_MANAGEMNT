const btn=document.getElementById("btn")
const api="http://localhost:3000/All_Student";


if( !localStorage.getItem("token")){
    alert("please login first");
    window.location.href="login.html";
}


btn.onclick=async(e)=>{
    e.preventDefault();
    const res=await fetch(api,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+localStorage.getItem("token")
        }
    })
    
    const data=await res.json();
    if(data.sts===false){
        alert("Access denied, admin only");
        window.location.href="StudentLogin.html";
        return;
    }
    window.location.href="AddStu.html";
    
}