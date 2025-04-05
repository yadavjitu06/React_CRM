function Signup() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-base-100">
      <div className="card w-96 bg-primary text-primary-content shadow-xl">
        <div className="card-body space-y-4">
          <h2 className="text-4xl font-bold text-center text-white">Signup</h2>

          <input
            autoComplete="one-time-code"
            type="text"
            placeholder="User ID"
            className="input input-bordered w-full text-white"
          />

          <input
            autoComplete="one-time-code"
            type="email"
            placeholder="email..."
            className="input input-bordered w-full text-white"
          />

          <input
            autoComplete="one-time-code"
            type="password"
            placeholder="Password"
            className="input input-bordered w-full text-white"
          />

          <details className="dropdown w-full">
            <summary className="btn m-1">User Type</summary>
            <ul className="menu dropdown-content bg-base-100   text-white rounded-box z-1 w-52 p-2 shadow-sm">
              <li>
                <a>customer</a>
              </li>
              <li>
                <a>Engineer</a>
              </li>
            </ul>
          </details>

          <button className="btn btn-warning w-full font-bold text-lg mt-2">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
