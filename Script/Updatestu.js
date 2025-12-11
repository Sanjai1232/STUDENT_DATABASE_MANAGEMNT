async function loadData() {
    const token = localStorage.getItem('token');
    if (!token) return window.location.href = "login.html";
}
//     const form = document.getElementById("editForm");

//     try {
//         const res = await fetch('http://localhost:3000/getsingle', {
//             headers: { 'Authorization': `Bearer ${token}` }
//         });
//         const data = await res.json();
//         Object.keys(data).forEach(key => {
//             if (form[key]) {
//                 form[key].value = form[key].type === "date" ? data[key]?.substring(0, 10) : data[key];
//             }
//         });
//     } catch (err) {
//         console.error(err);
//     }
// }

// loadData();

const btn=document.getElementById("searchBtn");
const rno=document.getElementById("searchStudent");

btn.onclick=async(e)=>{
    e.preventDefault();
    const rn=rno.value;
    const res=await fetch(`http://localhost:3000/getoldsty?Rollno=${rn}`,{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`}
        })
    const data=await res.json();
    console.log(data);
}
