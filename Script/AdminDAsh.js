const btn=document.getElementById("btn")
const api="http://localhost:3000/All_Student";
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
    console.log(data);
    console.log(data.data[4]);
    
}