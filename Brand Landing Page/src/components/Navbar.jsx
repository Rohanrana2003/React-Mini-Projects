

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img id="logo" src="src\images\logo.png" alt="" />
      </div>

      <div className="info">
        <a href="">Menu</a>
        <a href="">Location</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>

      <div className="login">
        <button>Login</button>
      </div>
    </nav>

  )
}

export default Navbar
