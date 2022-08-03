import React from "react";

import { Data } from "../components/Data";
import CardM from "./CardM";

export default function Card() {
  return Data.map((value) => {
    return (
      <>
        <CardM value={value} />
      </>
    );
  });
}
