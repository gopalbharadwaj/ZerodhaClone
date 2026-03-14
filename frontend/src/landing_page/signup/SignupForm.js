// import React, { useState } from 'react';

// const styles = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '0 20px', // Added responsive padding
//     height: '100vh',
//     backgroundColor: '#ffffff',
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//   },
//   box: {
//     background: 'linear-gradient(135deg, #a1c4fd, #c2e9fb)',
//     padding: '40px 30px',
//     borderRadius: '12px',
//     boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
//     width: '100%',
//     maxWidth: '400px',
//     textAlign: 'center',
//   },
//   title: {
//     fontSize: '24px',
//     marginBottom: '25px',
//     color: '#003366',
//     fontWeight: '600',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   input: {
//     padding: '12px 16px',
//     marginBottom: '18px',
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     fontSize: '16px',
//     transition: 'border 0.3s ease',
//   },
//   button: {
//     padding: '12px 16px',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     border: 'none',
//     fontSize: '16px',
//     borderRadius: '8px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//   },
//   buttonHover: {
//     backgroundColor: '#0056b3',
//   },
//   footer: {
//     marginTop: '20px',
//     fontSize: '14px',
//     color: '#003366',
//   },
//   link: {
//     color: '#007bff',
//     textDecoration: 'none',
//     fontWeight: '500',
//     marginLeft: '5px',
//   },
// };

// const SignupForm = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });
//   const [isHovered, setIsHovered] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch('https://tradenest-backend-h1i5.onrender.com/api/auth/signup', {

//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('user', JSON.stringify(data.user));

//         // ✅ Redirect to dashboard
//         window.location.href = 'https://tradenest-1dashboard.onrender.com/';
//       } else {
//         alert(data.message || 'Signup failed');
//       }
//     } catch (error) {
//       console.error('Signup error:', error);
//       alert('Something went wrong');
//     }

//     setLoading(false);
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.box}>
//         <h2 style={styles.title}>Create Your Account</h2>
//         <form onSubmit={handleSubmit} style={styles.form}>
//           <input
//             name="username"
//             placeholder="Username"
//             onChange={handleChange}
//             required
//             style={styles.input}
//           />
//           <input
//             name="email"
//             type="email"
//             placeholder="Email"
//             onChange={handleChange}
//             required
//             style={styles.input}
//           />
//           <input
//             name="password"
//             type="password"
//             placeholder="Password"
//             onChange={handleChange}
//             required
//             style={styles.input}
//           />
//           <button
//             type="submit"
//             disabled={loading}
//             style={{
//               ...styles.button,
//               ...(isHovered ? styles.buttonHover : {}),
//               opacity: loading ? 0.7 : 1,
//               cursor: loading ? 'not-allowed' : 'pointer',
//             }}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             {loading ? 'Signing up...' : 'Sign Up'}
//           </button>
//         </form>

//         <div style={styles.footer}>
//           Already have an account?
//           <a href="/login" style={styles.link}>Log in</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupForm;

import React, { useState } from "react";

function SignupForm(){

const [username,setUsername] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleSignup = async(e)=>{
e.preventDefault()

const res = await fetch("https://zerodhaclone-e995.onrender.com/api/auth/signup",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
username,
email,
password
})
})

const data = await res.json()

if(res.ok){
alert("Signup successful")
window.location="/login"
}else{
alert(data.message)
}

}

return(

<div style={styles.container}>

<div style={styles.box}>

<h2 style={styles.title}>Create Account</h2>

<form onSubmit={handleSignup} style={styles.form}>

<input
style={styles.input}
placeholder="Username"
onChange={(e)=>setUsername(e.target.value)}
required
/>

<input
style={styles.input}
type="email"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
required
/>

<input
style={styles.input}
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
required
/>

<button style={styles.button}>
Signup
</button>

</form>

</div>

</div>

)

}

const styles={

container:{
display:"flex",
justifyContent:"center",
alignItems:"center",
height:"100vh",
background:"#f4f6f9"
},

box:{
background:"#fff",
padding:"40px",
borderRadius:"10px",
boxShadow:"0 5px 20px rgba(0,0,0,0.1)",
width:"350px"
},

title:{
textAlign:"center",
marginBottom:"20px"
},

form:{
display:"flex",
flexDirection:"column"
},

input:{
padding:"12px",
marginBottom:"15px",
border:"1px solid #ccc",
borderRadius:"6px"
},

button:{
padding:"12px",
background:"#007bff",
color:"#fff",
border:"none",
borderRadius:"6px",
cursor:"pointer"
}

}

export default SignupForm;