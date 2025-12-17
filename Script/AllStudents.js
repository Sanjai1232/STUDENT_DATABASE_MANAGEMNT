const funct=async()=>{
   const res=await fetch("http://localhost:3000/All_Student",{
    method:'GET',
    headers:{
            'Content-Type':"application/json",
            'Authorization':`Bearer ${localStorage.getItem('token')}`
        },
    })
    console.log("crct");
    
    const data=await res.json();
  //  console.log(data)

  const ssname=document.getElementById('stuname');
  const ssrollno=document.getElementById('sturollno');
  const rr=data.data;
  console.log(rr);
    ssname.innerText="";
    rr.forEach(element => {
      
        ssname.innerHTML+=`name: <P>${element.name} Rollno: ${element.Rollno}</P> <br>`;
        // ssrollno.innerHTML+=`<h4>${element.rollno}</h4><br>`;
    }
    )   ;
    
}
funct();

