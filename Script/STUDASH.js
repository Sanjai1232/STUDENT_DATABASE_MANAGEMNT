const api = "http://localhost:3000/my-profile";
if( !localStorage.getItem("token")){
    alert("please login first");
    window.location.href="login.html";
}
// Helper function to format ISO date → DD/MM/YYYY
const formatDate = (isoDate) => {
    if (!isoDate) return "-";
    const d = new Date(isoDate);
    return d.toLocaleDateString("en-GB"); // DD/MM/YYYY
};

fetch(api, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
    }
})
.then(res => res.json())
.then(studentData => {
    const user = studentData.user;
    // Hero Section
    document.getElementById('heroName').textContent = user.name || "-";
    document.getElementById('heroRoll').textContent = `Roll No: ${user.Rollno || "-"}`;
    document.getElementById('heroGpa').textContent = user.CurrentGPA || "-";
    document.getElementById('heroCgpa').textContent = user.OverallCGPA || "-";
    document.getElementById('heroEmail').textContent = user.email || "-";

    // Profile Section
    document.getElementById('name').textContent = user.name || "-";
    document.getElementById('age').textContent = user.age || "-";
    document.getElementById('dob').textContent = formatDate(user.DOB);
    document.getElementById('department').textContent = user.department || "-";
    document.getElementById('rollno').textContent = user.Rollno || "-";
    document.getElementById('mobile').textContent = user.MobileNumber || "-";
    document.getElementById('email').textContent = user.email || "-";
    document.getElementById('address').textContent = user.address || "-";

    // Academic Section
    document.getElementById('gpa').textContent = user.CurrentGPA || "-";
    document.getElementById('cgpa').textContent = user.OverallCGPA || "-";
    document.getElementById('xii').textContent = user.Xii_marks || "-";
    document.getElementById('x').textContent = user.x_marks || "-";
    document.getElementById('doj').textContent = formatDate(user.Dateofjoin);
    document.getElementById('dog').textContent = formatDate(user.DOG);
})
.catch(err => {
    console.error("Error fetching student profile:", err);
});
