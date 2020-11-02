import React from "react";
import img from "./img.png";
import "./App.css";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center"
          maxWidth: 650,
          width: "calc(100% - 50px)",
          margin: 0,
          padding: "0px 25px",
          color: "white",
          fontFamily: "Roboto Mono, Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace",
          fontWeight: 300
        }}
      >
        <div style={{padding: 50}}></div>
        <h1 style={{
          fontWeight: 600,
          // textTransform: "uppercase",
          // fontFamily: "-apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif"
        }}>Rise Age</h1>
        <p>
          New <strong>performance oriented</strong> clinic coming soon to Oslo. Helping
          individuals reach their maximum potential through <strong>mental training</strong>.
        </p>

        <hr style={{
          width: "100%"
        }} />
        <p>Nøkkelord: mental trening, røykeslutt, selvbilde, søvn.</p>
        <p>Ta kontakt med oss: mail@riseage.no</p>

        <div style={{padding: 10}}></div>

        <img src={img} style={{
          width:"100%",
          maxWidth:400,
          height: "auto"
        }} />
        <div style={{padding: 20}}></div>

        <div style={{
          display: "flex",
          justifyContent: "center"
        }} className="anim">
          <div style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            background: "#C27500",
            position: "relative",
            top: 30,
            zIndex: -1
          }}></div>
        </div>
        <hr style={{
          margin: 0,
          width: "100%", zIndex: 10
        }} />
        <div style={{paddingBottom: 50, paddingTop: 5, background: "black", zIndex: 10}}>
        <p>© 2020 Rise Age - All rights reserved</p>
        </div>
        

      </div>
    </div>
  );
}

export default App;
