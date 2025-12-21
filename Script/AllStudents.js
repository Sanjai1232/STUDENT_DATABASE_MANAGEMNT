
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

    const data=await res.json();
  const ssname=document.getElementById('n');
  const ssrollno=document.getElementById('rno');
  const rr=data.data;

  let table = document.getElementById("myTable");
  rr.forEach(student => {
    let row = table.insertRow();
    row.insertCell(0).innerHTML = student.name;
     row.insertCell(1).innerHTML = student.department;
     row.insertCell(2).innerHTML = student.Rollno;
     row.insertCell(3).innerHTML = student.age;
         const birth=student.DOB;
  
  const dob = birth? birth.split('T')[0] : "undefined";
       row.insertCell(4).innerHTML = dob;
     row.insertCell(5).innerHTML = student.MobileNumber;
     row.insertCell(6).innerHTML = student.OverallCGPA;
     row.insertCell(7).innerHTML = student.email;
     row.insertCell(8).innerHTML = student.address;
  });

    
}
funct();

