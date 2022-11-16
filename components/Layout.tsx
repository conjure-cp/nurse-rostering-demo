"use client";
import React, { ReactNode } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  HStack,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
} from "@chakra-ui/react";
import {
  MdOutlineDashboard,
  MdOutlineGroups,
  MdOutlineEvent,
  MdDashboard,
  MdGroups,
  MdEvent,
} from "react-icons/md";
import { IconType } from "react-icons";
import Link from "next/link";
import { useGlobalContext } from "./GlobalContext";
import { FiMenu } from "react-icons/fi";

interface LayoutI {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutI) => {
  return <SidebarWithHeader>{children}</SidebarWithHeader>;
};

interface LinkItemProps {
  name: string;
  icon: IconType;
  iconActive: IconType;
  href: string;
}

const LinkItems: Array<LinkItemProps> = [
  {
    name: "Dashboard",
    icon: MdOutlineDashboard,
    iconActive: MdDashboard,
    href: "/dashboard",
  },
  {
    name: "Staff",
    icon: MdOutlineGroups,
    iconActive: MdGroups,
    href: "/staff",
  },
  {
    name: "Calendar",
    icon: MdOutlineEvent,
    iconActive: MdEvent,
    href: "/calendar",
  },
];

function SidebarWithHeader({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.1000")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.1000")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.800")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Link href={"/"}>
          <img
            src=""
            alt="NRP"
            className={"w-36"}
            draggable={false}
          />
        </Link>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Flex
        flexDirection={"column"}
        justifyContent={"space-between"}
        className={"h-[calc(100%-5rem)]"}
      >
        <Box>
          {LinkItems.map((link) => (
            <NavItem
              key={link.name}
              icon={link.icon}
              iconActive={link.iconActive}
              href={link.href}
            >
              {link.name}
            </NavItem>
          ))}
        </Box>
      </Flex>
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  iconActive: IconType;
  href: string;
}

const NavItem = ({
  icon,
  iconActive,
  href,
  children,
  ...rest
}: NavItemProps) => {
  const { activeNavItem, setActiveNavItem } = useGlobalContext();
  return (
    <Link
      onClick={() => {
        setActiveNavItem(href);
      }}
      href={href}
      style={{ textDecoration: "none" }}
    >
      <Flex
        align="center"
        py="3"
        px="6"
        mx="4"
        my="2"
        borderRadius="400"
        role="group"
        cursor="pointer"
        width="fit-content"
        _hover={{
          bg: "rgba(231, 233, 234, 0.1)",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={activeNavItem ? iconActive : icon}
          />
        )}
        <p
          className={
            activeNavItem === href
              ? "text-white mt-1 font-bold"
              : "text-white mt-1"
          }
        >
          {children}
        </p>
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.1000")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.800")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <HStack
        className={"w-full justify-end md:justify-between"}
        spacing={{ base: "0", md: "6" }}
      >
        <Flex alignItems={"center"} justifyContent={"space-between"}></Flex>
      </HStack>
    </Flex>
  );
};

export default Layout;
