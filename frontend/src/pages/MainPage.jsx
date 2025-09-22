import DefaultComponent from "../DefaultComponent.jsx";
import MainPageContent from "../elements/MainPageComponents/MainPageContent.jsx";
import axios from "axios";

export default function MainPage() {
    const baseUrl = import.meta.env.VITE_BASE_URL;

    const testApi = () =>{
        axios.post(`${baseUrl}/test`,{}).then((r) => console.log(r.data));
    }
    return (
        <DefaultComponent pageName={"main"}>
            <MainPageContent/>
            <button onClick={() => testApi()}>fd</button>
        </DefaultComponent>

    )
}