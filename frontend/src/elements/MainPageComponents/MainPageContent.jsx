import {Box, Flex, Grid, Separator} from "@radix-ui/themes";
import "./MainPageContent.css";
import "../ContactsComponents/ContactsElement.css"
import MainPageProducts from "./MainPageProducts.jsx";

export default function MainPageContent() {
    return (
        <Box width={"100%"} height={"100%"}>
            <Flex justify={"center"}>
                <p className={"mainPageH1"}>Продукти</p>
            </Flex>

            <Flex justify={"center"}>
                <Separator className={'contactTitleSeparator'}/>
            </Flex>

            <Flex justify={"center"} width={"100%"}>
                <MainPageProducts/>
            </Flex>

        </Box>
    )
}