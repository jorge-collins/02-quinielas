import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";

export const ParticipantCard = ({ participant }) => {

    // const { name, image } = participant;

    const router = useRouter();

    const onClick = () => {
        router.push(`/participant/${ participant.name }`);
    }


    return (
        <Grid xs={6} sm={3} md={3} lg={2} xl={1} key={ participant.name }>
            <Card 
                isHoverable 
                isPressable
                onClick={ onClick }
            >
                <Card.Body css={{ p: 0 }}>
                    <Card.Image 
                        src={ participant.image } 
                        height="100%" 
                        width="100%" 
                        objectFit="cover" 
                    />
                </Card.Body>
            </Card>
        </Grid>
    );
};
