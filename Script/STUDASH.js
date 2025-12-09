const api="http://localhost:3000/my-profile";
 
        //API FOR STUDENT PROFILE

    fetch(api,{
        method:"GET",
        headers:{   
            "Content-Type":"application/json",
            "Authorization":"Bearer "+localStorage.getItem("token")
        }
    })
    .then((res)=>res.json())
    .then((studentData)=>{
           console.log(studentData.user.name);
          document.getElementById('heroName').textContent = studentData.user.name;
        document.getElementById('heroRoll').textContent = `Rollno ${studentData.user.Rollno}`;
        document.getElementById('department').textContent = studentData.user.department;
        document.getElementById('mobile').textContent = studentData.user.MobileNumber;
        document.getElementById('doj').textContent = studentData.user.Dateofjoin;
        document.getElementById('dog').textContent = studentData.user.DOG;
        document.getElementById('gpa').textContent = studentData.user.CurrentGPA;
        document.getElementById('cgpa').textContent = studentData.user.OverallCGPA;
        document.getElementById('heroGpa').textContent = studentData.user.CurrentGPA;
        document.getElementById('heroCgpa').textContent = studentData.user.OverallCGPA;
        document.getElementById('xii').textContent = studentData.user.Xii_marks;
        document.getElementById('x').textContent = studentData.user.x_marks;
        
    })