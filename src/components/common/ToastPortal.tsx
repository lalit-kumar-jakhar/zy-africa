"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically load ToastContainer on the client to keep it out of the shared JS chunk
const DynamicToastContainer = dynamic(
  () => import("react-toastify").then((m) => m.ToastContainer),
  {
    ssr: false,
    loading: () => null,
  }
);

const ToastPortal: React.FC = () => {
  useEffect(() => {
    // Inject toast CSS via CDN at runtime to avoid bundling and TS type issues
    const id = "react-toastify-css";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href = "https://cdn.jsdelivr.net/npm/react-toastify@11.0.5/dist/ReactToastify.css";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <DynamicToastContainer
      position="top-right"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnHover
      draggable
      theme="dark"
    />
  );
};

export default ToastPortal;
