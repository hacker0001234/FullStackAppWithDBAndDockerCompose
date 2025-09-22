import {AspectRatio, Box, Flex, TabNav, DropdownMenu, Button} from "@radix-ui/themes";
import "../src/Header.css"
import logo from "../src/assets/logo.png";
import {useState} from "react";
import BurgerMenuIcon from "./vender components/components/BurgerMenuIcon.jsx";

export default function Header({pageName}) {
    const [open, setOpen] = useState(false);


    return (
        <>
            <Flex justify="center" align="center" width={'100%'}>
                <Box className={"headerBox"}>
                    <Flex justify={"between"} className={"headerContainer"}>
                        <AspectRatio ratio={16 / 8}>
                            <img src={logo} className={"headerLogo"} onClick={() => window.location.href = "/"}
                                 alt={"logo"}/>
                        </AspectRatio>

                        <Box className={"headerNavBarBox"}>

                            <TabNav.Root className={"headerNavBarTabNav"}>
                                <TabNav.Link href="/" active={pageName === "main"}>Головна</TabNav.Link>
                                <TabNav.Link href="/service" active={pageName === "service"}>Сервіс</TabNav.Link>
                                <TabNav.Link href="/paymentAndDelivery" active={pageName === "payment and delivery"}>Оплата | Доставка</TabNav.Link>
                                <TabNav.Link href="/contacts" active={pageName === "contacts"}>Контакти</TabNav.Link>
                            </TabNav.Root>


                            <DropdownMenu.Root open={open} onOpenChange={setOpen}>
                                <DropdownMenu.Trigger>
                                    <Button className={"headerNavBarMenuButton"}>
                                        <BurgerMenuIcon active={open}/>
                                    </Button>
                                </DropdownMenu.Trigger>

                                <DropdownMenu.Content style={{fontWeight: "bold"}}>
                                    <DropdownMenu.Item onClick={() => window.location.href = "/"}
                                                       color={pageName === "main" ? "blue" : "gray"}>
                                        Головна
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item onClick={() => window.location.href = "/service"}
                                                       color={pageName === "service" ? "blue" : "gray"}>
                                        Сервіс
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item onClick={() => window.location.href = "/paymentAndDelivery"}
                                                       color={pageName === "payment and delivery" ? "blue" : "gray"}>
                                        Оплата | Доставка
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item onClick={() => window.location.href = "/contacts"}
                                                       color={pageName === "contacts" ? "blue" : "gray"}>
                                        Контакти
                                    </DropdownMenu.Item>

                                </DropdownMenu.Content>
                            </DropdownMenu.Root>

                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </>
    )
}