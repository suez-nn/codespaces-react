import React from "react";
import { useNavigate } from "react-router-dom";

function Button({ project, onClick }) {
  return (
    <>
      <button onClick={onClick}>{project}</button>
    </>
  )
}

function Home() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <img src="react-icon.png" className="App-logo" alt="react-logo" />
        <p style={{ fontWeight: "bold" }}>
          React Projects <span className="heart">♥️</span>
        </p>
        <p className="medium">
          A collection of webpages created using React.
        </p>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Button project="Tic-Tac-Toe" onClick={() => navigate("/Tic-Tac-Toe")}/>
          <Button project="Product Table" onClick={() => navigate("/Products")}/>
        </div>

      </header>
    </div>
  );
}

export default Home;