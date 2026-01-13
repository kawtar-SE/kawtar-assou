import "./SignIn.css";
const SignIn = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center", color:"white", }}>
      <h1>Sign In</h1>
      <input
        type="email"
        placeholder="Email"
        className="bar"
      />
      <input 
        type="password"
        placeholder="Password"
        className="bar"
      />
      <button className="button-1">
        Sign In
      </button>
    </div>
  );
};

export default SignIn;
