// components/SkeletonLoader.tsx
import React from "react";

const SkeletonLoader: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        backgroundColor: "#f4f4f4",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "40px",
          backgroundColor: "#ddd",
          borderRadius: "4px",
          marginBottom: "20px",
        }}
      ></div>

      <div
        style={{
          width: "60%",
          height: "20px",
          backgroundColor: "#ddd",
          borderRadius: "4px",
          marginBottom: "20px",
        }}
      ></div>

      <div
        style={{
          width: "100%",
          height: "40px",
          backgroundColor: "#ddd",
          borderRadius: "4px",
        }}
      ></div>
    </div>
  );
};

export default SkeletonLoader;
