namee=document.getElementById('name')
age=document.getElementById('age')
dob=document.getElementById('dob')
mno=document.getElementById('mno')
Department=document.getElementById('Department')
Rollno=document.getElementById('Rollno')
gpa=document.getElementById('gpa')
cgpa=document.getElementById('cgpa')
xii=document.getElementById('xii')
x=document.getElementById('x')
add=document.getElementById('add')
email=document.getElementById('email')
pass=document.getElementById('password')
doj=document.getElementById('DOJ')
dog=document.getElementById('DOG')
btn=document.getElementById('btn')


btn.onclick=async(e)=>{
    e.preventDefault();
const obj={
    name:namee.value,
    age:age.value,
    DOB:dob.value,  
    MobileNumber:mno.value,
    department:Department.value,
    Rollno:Rollno.value,
    CurrentGPA:gpa.value,
    OverallCGPA:cgpa.value,
    Xii_marks:xii.value,
    X_marks:x.value,
    address:add.value,
    email:email.value,
    password:pass.value,
    Dateofjoin:doj.value,
    DOG:dog.value

}
  
    const res= await fetch('http://localhost:3000/add_student',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer '+localStorage.getItem('token')
         },
         body:JSON.stringify(obj)
    })
    const data= await res.json()
    console.log(data);
    if(data.st){
       return   alert("Student added successfully")
    }
    alert("Error in adding student")
}
