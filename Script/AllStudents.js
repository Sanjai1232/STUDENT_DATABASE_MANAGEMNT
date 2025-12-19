
async function loadData() {
    const token = localStorage.getItem('token');
    if (!token) return window.location.href = "login.html";
}
loadData()
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

  const ssname=document.getElementById('n');
  const ssrollno=document.getElementById('rno');
  const rr=data.data;
  console.log(data);
  
  console.log(rr);
  let table = document.getElementById("myTable");
  rr.forEach(student => {
    let row = table.insertRow();
    row.insertCell(0).innerHTML = student.name;
     row.insertCell(1).innerHTML = student.department;
  });

    
}
funct();

