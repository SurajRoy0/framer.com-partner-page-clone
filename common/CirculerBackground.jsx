import React from "react";

export default function CirculerBackground({ isBigComponent, color }) {
  return (
    <>
      {isBigComponent && (
        <>
          {" "}
          <div
            className={`w-[1000px] h-[1000px] rounded-full ${color} absolute left-[50%] top-[110%] transform translate-x-[-50%] translate-y-[-50%] opacity-[0.02] shadow-2xl shadow-black`}
          ></div>
          <div
            className={`w-[1400px] h-[1400px] rounded-full ${color} absolute left-[50%] top-[110%] transform translate-x-[-50%] translate-y-[-50%] opacity-[0.02] shadow-2xl shadow-black`}
          ></div>
          <div
            className={`w-[1300px] h-[1300px] rounded-full ${color} absolute left-[50%] top-[110%] transform translate-x-[-50%] translate-y-[-50%] opacity-[0.03] shadow-2xl shadow-black`}
          ></div>
          <div
            className={`w-[1200px] h-[1200px] rounded-full ${color} absolute left-[50%] top-[110%] transform translate-x-[-50%] translate-y-[-50%] opacity-[0.04] shadow-2xl shadow-black`}
          ></div>
          <div
            className={`w-[1100px] h-[1100px] rounded-full ${color} absolute left-[50%] top-[110%] transform translate-x-[-50%] translate-y-[-50%] opacity-5 shadow-2xl shadow-black`}
          ></div>
        </>
      )}
      <div
        className={`w-[1000px] h-[1000px] rounded-full ${color} absolute left-[50%] top-[110%] transform translate-x-[-50%] translate-y-[-50%] opacity-5 shadow-2xl shadow-black`}
      ></div>
      <div
        className={`w-[900px] h-[900px] rounded-full ${color} absolute left-[50%] top-[110%] transform translate-x-[-50%] translate-y-[-50%] opacity-5 shadow-2xl shadow-black`}
      ></div>
      <div
        className={`w-[800px] h-[800px] rounded-full ${color} absolute left-[50%] top-[110%] transform translate-x-[-50%] translate-y-[-50%] opacity-10 shadow-2xl shadow-black`}
      ></div>
      <div
        className={`w-[700px] h-[700px] rounded-full ${color} absolute left-[50%] top-[110%] transform translate-x-[-50%] translate-y-[-50%] opacity-10 shadow-2xl shadow-black`}
      ></div>
      <div
        className={`w-[600px] h-[600px] rounded-full ${color} absolute left-[50%] top-[110%] transform translate-x-[-50%] translate-y-[-50%] opacity-10 shadow-2xl shadow-black`}
      ></div>
      <div
        className={`w-[500px] h-[500px] rounded-full ${color} absolute left-[50%] top-[110%] transform translate-x-[-50%] translate-y-[-50%] opacity-10 shadow-2xl shadow-black`}
      ></div>
      <div
        className={`w-[400px] h-[400px] rounded-full ${color} absolute left-[50%] top-[110%] transform translate-x-[-50%] translate-y-[-50%] opacity-10 shadow-2xl shadow-black`}
      ></div>
      <div
        className={`w-[300px] h-[300px] rounded-full ${color} absolute left-[50%] top-[110%] transform translate-x-[-50%] translate-y-[-50%] opacity-10 shadow-2xl shadow-black`}
      ></div>{" "}
    </>
  );
}
