import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const nav = useNavigate();
  const loc = useLocation();

  const gotocart = () => {
    if (localStorage.user) {
      nav('/cart');
    } else {
      alert("Sign in ");
      nav('/login');
    }
  };

  const login = () => {
    nav('/login');
  };

  const logout = () => {
    localStorage.removeItem('user');
    alert("logged out");
    nav('/');
  };

  const goorder = () => {
    if (localStorage.user) {
      nav('/order/' + localStorage.user);
    } else {
      alert("Sign in ");
      nav('/login');
    }
  };

  // Define the side navbar layout
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-blue-500 fixed top-0 left-0 h-full">
        <div className="flex flex-col items-start p-4">
          <a href="/" className="flex items-center mb-4">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">UrbanFusion</span>
          </a>
          <ul className="flex flex-col font-medium space-y-4">
            {loc.pathname !== "/login" && loc.pathname !== "/signup" && (
              <li>
                <button
                  className="block py-2 px-4 text-white bg-gray-700 rounded-lg"
                  onClick={gotocart}
                >
                  Cart
                </button>
              </li>
            )}
            {loc.pathname !== "/login" && loc.pathname !== "/signup" && (
              <li>
                {localStorage.user ? (
                  <button
                    className="block py-2 px-4 text-white bg-gray-700 rounded-lg"
                    onClick={logout}
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    className="block py-2 px-4 text-white bg-gray-700 rounded-lg"
                    onClick={login}
                  >
                    Login
                  </button>
                )}
              </li>
            )}
            {loc.pathname !== "/login" && loc.pathname !== "/signup" && (
              <li>
                <button
                  className="block py-2 px-4 text-white bg-gray-700 rounded-lg"
                  onClick={goorder}
                >
                  Orders
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;


// import { useLocation, useNavigate } from "react-router-dom";

// function Navbar() {
//   const nav = useNavigate();
//   const loc = useLocation()
//   const gotocart=()=>{
//     if(localStorage.user)
//     nav('/cart')
//     else
//     { alert("Sign in ")
//       nav('/login')}
//   }
//   const login=()=>{
//     nav('/login')
//   }
//   const logout =()=>{
//     localStorage.removeItem('user')
//     alert("logged out")
//     nav('/')
    
//   }
//   const goorder=()=>{
//     if(localStorage.user)
//     nav('/order/'+localStorage.user)
//     else
//     { alert("Sign in ")
//       nav('/login')}
//   }
//   return (<div>

//     <nav className="bg-white border-gray-200 dark:bg-blue-500">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <a href="/" className="flex items-center">
//           <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">UrbanFusion</span>
//         </a>
//         <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
//           <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-5 md:mt-0 md:border-0  ">
//             <li>
//              { loc.pathname==="/login" || loc.pathname==="/signup" ? null:  <button className="block py-2 pl-3 pr-4 text-white w-20 bg-gray-700 rounded-lg md:p-1 " onClick={gotocart}>cart</button>}
//             </li>
//             <li>
//              {loc.pathname==="/login" || loc.pathname==="/signup" ? null : localStorage.user ?  <button className="block py-2 pl-3 pr-4 text-white w-20 bg-gray-700 rounded-lg md:p-1 " onClick={logout}>logout</button> :
//                <button className="block py-2 pl-3 pr-4 text-white w-20 bg-gray-700 rounded-lg md:p-1 " onClick={login}>login</button>}
//             </li>
//             <li>
//             { loc.pathname==="/login" || loc.pathname==="/signup" ?null: <button className="block py-2 pl-3 pr-4 text-white w-20 bg-gray-700 rounded-lg md:p-1 " onClick={goorder}>orders</button>}
//             </li>
//             {/* <li>
//         <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
// </li>*/}
//           </ul>
//         </div>
//       </div>
//     </nav>



//   </div>);
// }

// export default Navbar;
