import React from "react";
import Header from "./components/layouts/Header";
import Nav from "./components/layouts/Nav";

function App() {
  return (
    <>
      <Header />
      <div className="grid contenedor contenido-principal">
        <Nav />
        <main className="caja-contenido col-9">
          {
            // todo ROUTING NENE!!
          }
        </main>
      </div>

      <h1> This is app</h1>
    </>
  );
}

export default App;
