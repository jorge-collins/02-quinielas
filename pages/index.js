import { Button } from "@nextui-org/react";
import axios from "axios";
import { Layout } from "../components/layouts";

export default function Home(props) {

    const { items } = props;
    console.log(items);

    return (
        <Layout title="Quiniela Mundialista">
            <Button color="gradient">Hola mundo</Button>
        </Layout>
    );
}



export const getStaticProps = async (ctx) => {
    // const data = 'https://worldcupjson.net/teams';
    const { data } = await axios.get('https://worldcupjson.net/teams');
    
    return {
        props: {
            items: data
        }
    }
}
