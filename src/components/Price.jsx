import React from "react";

export default function Price({ currency, price }) {
  return (
    <React.Fragment>
      {currency}
      <span>{price}</span>
    </React.Fragment>
  );
}
