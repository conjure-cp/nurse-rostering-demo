"use client";
import type { NextPage } from "next";
import { Button, Flex } from "@chakra-ui/react";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <main className={"flex flex-col items-center justify-center h-screen"}>
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          width={"3xl"}
          gap={"8"}
        >
          <Flex gap={4}>
            <Flex flexDirection={"column"} justifyContent={"right"}>
              <h1 className={"text-6xl text-right font-bold"}>NURSE</h1>
              <h1 className={"text-6xl text-right font-bold"}>ROSTERING</h1>
            </Flex>
            <Flex flexDirection={"column"} justifyContent={"left"}>
              <h2 className={"font-thin mb-4 w-80 text-left text-xl"}>free.</h2>
              <h2 className={"font-thin mb-4 w-80 text-left text-xl"}>
                for everyone.
              </h2>
              <h2 className={"font-thin mb-4 w-80 text-left text-xl"}>
                forever.
              </h2>
            </Flex>
          </Flex>
          <Link href={"/dashboard"}>
            <Button
              size="lg"
              variant="outline"
            >
              Enter App
            </Button>
          </Link>
          <Flex flexDirection={"column"} gap={4}>
            <div>
              <h2>What is Lorem Ipsum?</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div>
              <h2>Why do we use it?</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content heremaking it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for lorem
                ipsum will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
            <div>
              <h2>Where does it come from?</h2>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus
                Bonorum et Malorum (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line
                in section 1.10.32.
              </p>
            </div>
          </Flex>
        </Flex>
      </main>
    </div>
  );
};

export default Home;
