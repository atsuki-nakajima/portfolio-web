import React from "react";

const Header = () => {
  return (
    <header
      style={{
        width: "100%",
        padding: "16px 32px",
        background: "#f5f5f5",
        borderBottom: "1px solid #ddd",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>マイポートフォリオサイト</div>
      <nav>
        <ul
          style={{
            display: "flex",
            gap: "24px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <a href="#" style={{ textDecoration: "none", color: "#333" }}>
              Profile
            </a>
          </li>
          <li>
            <a href="#" style={{ textDecoration: "none", color: "#333" }}>
              Skills
            </a>
          </li>
          <li>
            <a href="#" style={{ textDecoration: "none", color: "#333" }}>
              Works
            </a>
          </li>
          <li>
            <a href="#" style={{ textDecoration: "none", color: "#333" }}>
              My pets
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
