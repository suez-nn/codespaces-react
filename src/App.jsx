import './App.css';
import { redirect, useNavigate } from 'react-router';
// import { useState } from 'react';

// function Button({id, icon, onClick}){
//   return (
//     <>
//       <button className="square"
//         id={id}
//         onClick={onClick}
//         disabled={icon!=""}
//         style={{width:30, height:30}}
//       >
//         {icon}
//       </button>
//     </>
//   );
// }

// function Board(){
//   const [icons, setIcons] = useState(Array(9).fill(""));
//   const [playerTurn, setPlayerTurn] = useState("X");
//   const [winner, setWinner] = useState("");

//   function reset(){
//     setIcons(Array(9).fill(""));
//     setWinner("");
//   }

//   function checkWinCondition(){
//     const row1 = icons.slice(0,3);
//     const row2 = icons.slice(3,6);
//     const row3 = icons.slice(6,9);

//     const col1 = [icons[0], icons[3], icons[6]];
//     const col2 = [icons[1], icons[4], icons[7]];
//     const col3 = [icons[2], icons[5], icons[8]];

//     const diag1 = [icons[0], icons[4], icons[8]];
//     const diag2 = [icons[2], icons[4], icons[6]];

//     if(row2[1]!="" && (row2.every(i => i==row2[0]) || col2.every(i => i==col2[0]) ||
//                       diag1.every(i => i==diag1[0]) || diag2.every(i => i==diag2[0]))){
//       setWinner(row3[2])
//     }

//     if(row1[0]!="" && (row1.every(i => i==row1[0]) ||col1.every(i => i==col1[0]))){
//       setWinner(row1[0])
//     }

//     if(row3[2]!="" && (row3.every(i => i==row3[0]) ||col3.every(i => i==col3[0]))){
//       setWinner(row3[2])
//     }
//   }

//   function updateButton(e){
//     if(winner==""){
//       const id = e.target.id;
//       // update icons
//       icons[id] = playerTurn;
//       setIcons(icons); 
//       checkWinCondition();
//       setPlayerTurn(playerTurn=="X" ? "O" : "X"); 
//     }

//   }

//   const buttons = Array.from(Array(9).keys()).map(i => 
//     <Button 
//       id={i}
//       icon={icons[i]}
//       onClick={(e)=>updateButton(e)}
//     />
//   )
//   return (
//     <>
//       <p>{winner=="" ? playerTurn +'\'s turn' : winner + ' WINS!'}</p>
//       <div className="container">
//         {buttons}
//       </div>
//       <br/>
//       <button onClick={reset}>Reset</button>
//     </>
//   );
// }

// function Button({ project, onClick }) {
//   return (
//     <>
//       <button onClick={onClick}>{project}</button>
//     </>
//   )
// }

// function App() {
//   let navigate = useNavigate();
//   function route() {
//     navigate('/Tic-Tac-Toe/Tic-Tac-Toe.jsx');
//   }
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src="react-icon.png" className="App-logo" alt="react-logo" />
//         <p style={{ fontWeight: "bold" }}>
//           React Projects <span className="heart">♥️</span>
//         </p>
//         <p className="medium">
//           A collection of webpages created using React.
//         </p>
//         <div style={{ display: "flex", gap: "1rem" }}>
//           <Button project="Tic-Tac-Toe" onClick={route}/>
//           <Button project="Product Table" />
//         </div>

//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./Home";
import Game from "./Tic-Tac-Toe/Tic-Tac-Toe";
import Products from "./Products/Products";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        exact
                        path="/tic-tac-toe"
                        element={<Game />}
                    />
                    <Route
                        exact
                        path="/products"
                        element={<Products />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
