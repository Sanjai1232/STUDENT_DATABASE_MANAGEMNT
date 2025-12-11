async function loadData() {
    const token = localStorage.getItem('token');
    if (!token) return window.location.href = "login.html";
}
const namee=document.getElementById('name')
const age=document.getElementById('age')
const dob=document.getElementById('dob')
const mno=document.getElementById('mno')
const Department=document.getElementById('Department')
// Rollno=document.getElementById('Rollno')
const gpa=document.getElementById('gpa')
 const cgpa=document.getElementById('cgpa')
const xii=document.getElementById('xii')
const x=document.getElementById('x')
 const add=document.getElementById('add')
const email=document.getElementById('email')
const pass=document.getElementById('password')
const doj=document.getElementById('DOJ')
const dog=document.getElementById('DOG')
const rollno=document.getElementById("rno");
const btn2=document.getElementById('btn')
btn2.onclick=async(e)=>{
    e.preventDefault();
    console.log(rollno.value);
    const obj={
    name:namee.value,
    age:age.value,
      DOB: dob.value ? new Date(dob.value.split("-").reverse().join("-")) : null,
    MobileNumber:mno.value,
    department:Department.value,
    Rollno:rollno.value,
    CurrentGPA:gpa.value,
    OverallCGPA:cgpa.value,
    Xii_marks:xii.value,
    X_marks:x.value,
    address:add.value,
    email:email.value,
    DOJ: doj.value ,
    DOG: dog.value        // Date of Graduation
}

    if(!obj){
        alert("no data to update")
        return;
    }
    const res= await fetch('http://localhost:3000/update_Student',{
        method:'PUT',
        headers:{
            'Content-Type':"application/json",
            'Authorization':`Bearer ${localStorage.getItem('token')}`
        },
        body:JSON.stringify(obj)}
    )
const data=await res.json();
if(data.sts){
    alert("student data updated successfully")
}
else{
    alert("error in updating student data")
}
   }
