"use client";
import { Center, Spinner } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Center className={"mt-16"}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        size="xl"
        color={"purple"}
      />
    </Center>
  );
}
