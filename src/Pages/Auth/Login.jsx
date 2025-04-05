function Login() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-base-100">
        <div className="card w-96 bg-primary text-primary-content shadow-xl">
          <div className="card-body space-y-4">
            <h2 className="text-4xl font-bold text-center text-white">Login</h2>
  
            <input
              autoComplete="one-time-code"
              type="text"
              placeholder="User ID"
              className="input input-bordered w-full text-white"
            />
  
            <input
              autoComplete="one-time-code"
              type="password"
              placeholder="Password"
              className="input input-bordered w-full text-white"
            />
  
            <button className="btn btn-warning w-full font-bold text-lg mt-2">
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Login;
  