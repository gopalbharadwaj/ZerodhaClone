import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleLogin = async (e) => {
e.preventDefault();

try {

const res = await fetch("https://zerodhaclone-e995.onrender.com/api/auth/login", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
email,
password
})
});

const data = await res.json();

if (res.ok) {

localStorage.setItem("token", data.token);

alert("Login successful");

window.location.href = "https://zerodhaclone-2-k8bu.onrender.com";

} else {

alert(data.message || "Login failed");

}

} catch (error) {

alert("Server error");

}

};

return (

<div style={styles.container}>

<div style={styles.box}>

<h2 style={styles.title}>Login to Zerodha Clone</h2>

<form onSubmit={handleLogin} style={styles.form}>

<input
type="email"
placeholder="Enter Email"
value={email}
onChange={(e) => setEmail(e.target.value)}
style={styles.input}
required
/>

<input
type="password"
placeholder="Enter Password"
value={password}
onChange={(e) => setPassword(e.target.value)}
style={styles.input}
required
/>

<button type="submit" style={styles.button}>
Login
</button>

</form>

<p style={styles.footer}>
Don't have an account?
<Link to="/signup" style={styles.link}> Signup</Link>
</p>

</div>

</div>

);

}

const styles = {

container: {
display: "flex",
justifyContent: "center",
alignItems: "center",
height: "100vh",
background: "#f4f6f9",
fontFamily: "Arial"
},

box: {
background: "#fff",
padding: "40px",
borderRadius: "10px",
boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
width: "350px",
textAlign: "center"
},

title: {
marginBottom: "25px"
},

form: {
display: "flex",
flexDirection: "column"
},

input: {
padding: "12px",
marginBottom: "15px",
border: "1px solid #ccc",
borderRadius: "6px",
fontSize: "14px"
},

button: {
padding: "12px",
background: "#28a745",
color: "#fff",
border: "none",
borderRadius: "6px",
cursor: "pointer",
fontSize: "16px"
},

footer: {
marginTop: "15px",
fontSize: "14px"
},

link: {
color: "#007bff",
textDecoration: "none",
marginLeft: "5px"
}

};

export default LoginForm;
