import { Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";

export const Navbar = () => {

    const { theme } = useTheme();

    return (
        <div style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            padding: "0px 20px",
            backgroundColor: theme.colors.gray100.value
        }}>
            <Image
                src="https://dwglogo.com/wp-content/uploads/2020/05/FIFA_World_Cup_Qatar_logo_1030x770-1024x766.png"
                alt="App icon"
                width={92}
                height={69}
                priority
            />
            <Spacer />
            <Text color="white" h2>Quiniela Mundialista 2022</Text>
        </div>
    );
};