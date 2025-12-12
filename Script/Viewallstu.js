
const funct=async()=>{
   const res=await fetch("http://localhost:3000/All_Student",{
    method:'GET',
    headers:{
            'Content-Type':"application/json",
            'Authorization':`Bearer ${localStorage.getItem('token')}`
        },
    })
    const data=await res.json();
    console.log(data) 
}
funct();