"use client";
import { Box } from "@chakra-ui/react";
import SideLayout from "../../components/SideLayout";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box zIndex={1}>
      <SideLayout>
          {children}
        </SideLayout>
    </Box>
  );
}
