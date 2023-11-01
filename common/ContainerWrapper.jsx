import React from "react";

export default function ContainerWrapper({ title, subtitle, children }) {
  return (
    <section className="text-center font-bold p-6 pt-12 lg:p-28">
      <h1 className="text-5xl">{title}</h1>
      <p className="text-lg mt-5 max-w-[450px] m-auto">{subtitle}</p>
      <div className="w-full mt-12 ">{children}</div>
    </section>
  );
}
