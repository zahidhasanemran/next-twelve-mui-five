import { Box } from "@mui/material";
import React, { useState } from "react";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="menus">
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "100px",
          }}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="">{children}</div>
    </div>
  );
};

export default Layout;
