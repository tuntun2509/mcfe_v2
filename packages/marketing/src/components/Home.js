import React from "react";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      <Link to="/pricing">Pricing</Link>
      <Link to="/landing">Landing</Link>
    </div>
  );
};
