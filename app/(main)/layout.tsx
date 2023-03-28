"use client";
import SideLayout from "../../components/SideLayout";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SideLayout>{children}</SideLayout>;
}
