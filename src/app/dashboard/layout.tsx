import "../globals.css";
import SidebarProvider from "../../components/SidebarContext";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex">
        <Sidebar />
        <div className="w-full bg-[#131619]">
          <div>
            <Navbar />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </SidebarProvider>
  );
}
