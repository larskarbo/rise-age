import React from "react";
import img from "./img.png";
import lars from "./lars.png";
import julie from "./julie.png";
import "./App.css";

function App() {
  return (
    <div
      className="flex justify-center"
    >
      <div
        className="flex flex-col text-white max-w-xl pt-20"
      >
        <h1
          className="text-4xl uppercase font-bold"
        >
          Rise Age
        </h1>
        <div className="uppercase pb-10 font-extralight text-xl">Hypnosis therapy</div>

        <p className="font-light pb-10">
          Rise Age is a hypnotherapy clinic specializing in:

          <ul className="list-disc list-inside pl-2">
            <li>addictions (smoking, alcohol)</li>
            <li>weight loss</li>
            <li>motivation & performance</li>
          </ul>
        </p>


        <div
          className="flex flex-row"
        >
          <div
            className="flex flex-col"
          >
            <img
              src={julie}
              className="w-80 mb-3"
            />
            <div>
              <strong>Julie Kamp</strong>
            </div>
            <div>Kommende hypnoterapeut</div>
          </div>
          <div
            className="flex flex-col ml-20"
          >
            <img
              src={lars}
              className="w-80 mb-3"
            />
            <div>
              <strong>Lars Karbø</strong>
            </div>
            <div>Kommende hypnoterapeut</div>
          </div>
        </div>
        <div style={{ padding: 20 }}></div>

        <div
          className="flex justify-center anim"
        >
          <div
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              background: "#C27500",
              position: "relative",
              top: 30,
              zIndex: -1,
            }}
          ></div>
        </div>
        <hr
          style={{
            margin: 0,
            width: "100%",
            zIndex: 10,
          }}
        />
        <div
          style={{
            paddingBottom: 50,
            paddingTop: 5,
            background: "#171E24",
            zIndex: 10,
          }}
        >
          <p>© 2020 Rise Age - All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default App;
