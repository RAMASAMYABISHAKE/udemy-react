function Navbar(){
   return( <div class="navbar">
   <div class="navbar__left">
       <h1 class="navbar__left__title">Udemy</h1>
   </div>
   <div className="navbar__search">
       <i className="fa-solid fa-magnifying-glass" style={{color: "#000205"}}></i>
       <input placeholder="search for anything here"></input>
   </div>
   <div className="navbar__right">
       <p>Courses</p>
      <div className="mylearning"> <p>My Learning</p>
      <div className="mylearning__popup"> <p>You did not purchase anything yet </p></div></div>

       <i className="fa-solid fa-cart-shopping" style={{color: "#00060f"}}></i>
       <i className="fa-solid fa-bell" style={{color: "#00060f"}}></i>
       <i className="fa-solid fa-user" style={{color: "#00060f"}}></i>

   </div>
   <div className="navbar__menu"><i class="fa-solid fa-bars"></i></div>
</div>)
}
export default Navbar