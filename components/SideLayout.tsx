"use client";
import React, { ReactNode } from "react";
import {
  Box,
  BoxProps,
  CloseButton,
  Drawer,
  DrawerContent,
  Flex,
  FlexProps,
  HStack,
  Icon,
  IconButton,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  MdDashboard,
  MdEvent,
  MdGroups,
  MdOutlineAdd,
  MdOutlineDashboard,
  MdOutlineEvent,
  MdOutlineGroups,
  MdStar,
  MdStarOutline,
} from "react-icons/md";
import { IconType } from "react-icons";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import CreateStaffModal from "./StaffModal/CreateStaffModal";
import { usePathname } from "next/navigation";

interface LayoutI {
  children?: React.ReactNode;
}

const SideLayout = ({ children }: LayoutI) => {
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
    name: "Qualifications",
    icon: MdStarOutline,
    iconActive: MdStar,
    href: "/qualifications",
  },
  {
    name: "Calendar",
    icon: MdOutlineEvent,
    iconActive: MdEvent,
    href: "/calendar",
  },
];

interface SidebarWithHeaderI {
  children: ReactNode;
}

function SidebarWithHeader({ children }: SidebarWithHeaderI) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Flex>
        <SidebarContent
          onClose={() => onClose}
          display={{ base: "none", md: "block" }}
          className={"bg-surface m-4 rounded-xl"}
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
      </Flex>
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
      transition="500ms ease"
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h={"100%"}
      sx={{ height: "calc(100vh - 2rem)" }}
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Link href={"/"}>
          <img
            src=""
            alt="NRP"
            className={"w-36 text-3xl font-bold pl-2"}
            draggable={false}
          />
        </Link>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Flex
        flexDirection={"column"}
        justifyContent={"space-between"}
        className={"h-[calc(100%-10rem)]"}
      >
        <Box className={"[& p]:mt-0"}>
          {LinkItems.map((link) => (
            <NavItem
              key={link.name}
              icon={link.icon}
              iconActive={link.iconActive}
              href={link.href}
              onClick={onClose}
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
  const path = usePathname();
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
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
          bg: "rgba(231, 233, 234, 0.5)",
        }}
        className={
          path === href ? "bg-secondaryContainer text-primaryText" : ""
        }
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{}}
            as={path === href ? iconActive : icon}
          />
        )}
        <p className={path === href ? "font-bold" : ""}>{children}</p>
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();
  const path = usePathname();
  return (
    <Flex
      ml={{ base: 5, md: "275px" }}
      px={{ base: 4, md: 4 }}
      height="14"
      width="100%"
      alignItems="center"
      className={"bg-surface1 rounded-xl mr-4 mt-4"}
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
        className={"border-none"}
        icon={<FiMenu />}
      />

      <HStack
        className={"w-full justify-between pl-4"}
        spacing={{ base: "0", md: "6" }}
      >
        <Flex
          className={"uppercase font-bold"}
          justifyContent={"space-between"}
        >
          <p className={"text-bottom pt-1"}>{path ? path.slice(1) : ""}</p>
        </Flex>
        {path === "/staff" ? (
          <IconButton
            className={"bg-primary text-white"}
            aria-label={"Add staff"}
            icon={<MdOutlineAdd />}
            onClick={onModalOpen}
          />
        ) : null}
      </HStack>
      <CreateStaffModal
        isModalOpen={isModalOpen}
        onModalOpen={onModalOpen}
        onModalClose={onModalClose}
      />
    </Flex>
  );
};

export default SideLayout;
