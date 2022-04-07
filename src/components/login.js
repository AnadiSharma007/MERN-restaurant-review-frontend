import React, {useState} from 'react'

const Login = (props) => {


  const [user, setUser] = useState({
    user: "",
    id: ""
  });

  const handleUserInputChange = (e) => setUser({ ...user, name: e.target.value })
  const handleIdInputChange = (e) => setUser({...user, id: e.target.value})
  
  const login = () => {
    props.login(user)
    props.history.push('/');
  }

  return (
    <div className="submit-form">
    <div>
      <div className="form-group">
        <label htmlFor="user">Username</label>
        <input
          type="text"
          className="form-control"
          id="name"
          required
          value={user.name}
          onChange={handleUserInputChange}
          name="name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="id">ID</label>
        <input
          type="text"
          className="form-control"
          id="id"
          required
          value={user.id}
          onChange={handleIdInputChange}
          name="id"
        />
      </div>

      <button onClick={login} className="btn btn-success">
        Login
      </button>
    </div>
  </div>
  )
}

export default Login