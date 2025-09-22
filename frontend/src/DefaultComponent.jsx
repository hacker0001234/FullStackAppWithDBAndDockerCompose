import {Box, Flex, Separator} from "@radix-ui/themes";
import Header from "../src/Header.jsx";
import Footer from "./Footer.jsx";

export default function DefaultComponent({pageName, children}) {
    return (
        <Flex width={"100%"} justifyContent={"center"} height={"100vh"} direction={"column"} align={"center"} style={{background:"#111827"}}>
            <Header pageName={pageName}/>
            <Box className={"backGroundPage"}>
                <Flex align={"center"} direction={"column"} className={"backGroundBody"}>



                    {children}



                </Flex>
            </Box>
            <Footer/>
        </Flex>
    );
}
