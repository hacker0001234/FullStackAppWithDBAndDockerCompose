import MyMap from "../elements/ContactsComponents/MyMap.jsx";
import DefaultComponent from "../DefaultComponent.jsx";
import ContactsElement from "../elements/ContactsComponents/ContactsElement.jsx";
import {Box, Separator} from "@radix-ui/themes";

export default function Contacts() {
    return (
        <DefaultComponent pageName={"contacts"}>

            <ContactsElement/>
              <MyMap/>

        </DefaultComponent>
    )
}