import {Grid, Button} from "@radix-ui/themes";
import "./MainPageProducts.css"
import {useEffect, useState} from "react";
import axios from "axios";

export default function MainPageProducts() {
    const baseUrl = import.meta.env.VITE_BASE_URL;

    const [products, setProducts] = useState([]);

    useEffect(() => {

        axios.get(`${baseUrl}/products/get`).then(response => setProducts(response.data));

    }, []);

    return (
        <Grid
            columns={{initial: "1", sm: "2", md: "3", lg: "4"}}
            gap="4"
            width="100%"
        >
            {products.map((p) => (
                <div key={p.id} className={"mainPageProductContainer"}>
                    <img src={p.imageURL}/>
                    <p>{p.title}</p>
                    <Button onClick={() => window.location.href = `/products/${p.id}`}>Детальніше</Button>
                </div>
            ))}
        </Grid>
    );
}