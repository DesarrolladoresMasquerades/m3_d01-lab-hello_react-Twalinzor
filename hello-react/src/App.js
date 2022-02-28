import './App.css';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import logo from './images/ironhack-logo-xs.png';
import menu from './images/menu-top-xs.png';


function App() {
  return (
  <div className="App" >

    <nav  className="Navbar">
         <img src= {logo} alt="" srcset="" />
         <img src= {menu} alt="" srcset="" />
    </nav>

    <div className="Section1">
        <div className="Title">
           <h1> Say hello to ReactJS </h1>
        </div>

        <div className="Text">
           <p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
        </div>

        <div className="Button">
           <button>Awesome!</button> 
        </div>
    </div>

    <div className="Section2">

         <div className="Declarative">
            <img src= {icon1} alt="" srcset="" />
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs</p>
         </div>

         <div className="Components">
         <img src= {icon4} alt="" srcset="" />
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state</p>
         </div>

         <div className="Single-Way">
         <img src= {icon3} alt="" srcset="" />
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the component's</p>
         </div>

         <div className="Jsx">
         <img src= {icon2} alt="" srcset="" />
           <h2>JSX</h2>
           <p>Staticallu-typed designed to run on modern browsers</p>
         </div>

      </div>
  </div>
  );
}

export default App;