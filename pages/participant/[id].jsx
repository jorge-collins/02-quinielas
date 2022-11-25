import { Card, Container, Grid, Image, Spacer, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { Layout } from "../../components/layouts";


const participants = [
    {
        image: 'http://corosoftware.com/wp-content/uploads/2022/11/alexei.png', name: 'Alexei',
        quote: '"¿A donde vas a ir?"',
        teams: ['SEN','FRA','SRB','CMR'], 
        team1: 'https://countryflagsapi.com/svg/SEN', 
        team2: 'https://countryflagsapi.com/svg/FRA', 
        team3: 'https://countryflagsapi.com/svg/SRB', 
        team4: 'https://countryflagsapi.com/svg/CMR', 
    },
    {
        image: 'http://corosoftware.com/wp-content/uploads/2022/11/aden.png', name: 'Aden',
        quote: '"Si ser gey es el concepto de superhombre..."',
        teams: ['NLD','SAU','ESP','DEU'], 
        team1: 'https://countryflagsapi.com/svg/NLD', 
        team2: 'https://countryflagsapi.com/svg/SAU', 
        team3: 'https://countryflagsapi.com/svg/ESP', 
        team4: 'https://countryflagsapi.com/svg/DEU', 
    },
    {
        image: 'http://corosoftware.com/wp-content/uploads/2022/11/hugo.png', name: 'Carry',
        quote: '"Es imposible que un chango pueda hacer eso"',
        teams: ['ECU','MEX','HRV','PRT'], 
        team1: 'https://countryflagsapi.com/svg/ECU', 
        team2: 'https://countryflagsapi.com/svg/MEX', 
        team3: 'https://countryflagsapi.com/svg/HRV', 
        team4: 'https://countryflagsapi.com/svg/PRT',         
    },
    {
        image: 'http://corosoftware.com/wp-content/uploads/2022/11/cristian.png', name: 'Cristian',
        quote: '"¿[inserte cualquier cosa] es un país?"',
        teams: ['GB-ENG','GB-WLS','CRI','URY'], 
        team1: 'https://countryflagsapi.com/svg/GB-ENG', 
        team2: 'https://countryflagsapi.com/svg/GB-WLS', 
        team3: 'https://countryflagsapi.com/svg/CRI', 
        team4: 'https://countryflagsapi.com/svg/URY',
    },
    {
        image: 'http://corosoftware.com/wp-content/uploads/2022/11/israel.png', name: 'Isra',
        quote: '"Aliviana el mosquero"',
        teams: ['IRN','USA','POL','BRA'], 
        team1: 'https://countryflagsapi.com/svg/IRN', 
        team2: 'https://countryflagsapi.com/svg/USA', 
        team3: 'https://countryflagsapi.com/svg/POL', 
        team4: 'https://countryflagsapi.com/svg/BRA',
    },
    {
        image: 'http://corosoftware.com/wp-content/uploads/2022/11/iesus.png', name: 'Iesus',
        quote: '"Te lo lavas"',
        teams: ['AUS','JPN','BEL','MAR'], 
        team1: 'https://countryflagsapi.com/svg/AUS', 
        team2: 'https://countryflagsapi.com/svg/JPN', 
        team3: 'https://countryflagsapi.com/svg/BEL', 
        team4: 'https://countryflagsapi.com/svg/MAR',
    },
    {
        image: 'http://corosoftware.com/wp-content/uploads/2022/11/raul.png', name: 'Raúl',
        quote: '"Saco leche pa tu chamaco"',
        teams: ['ARG','TUN','CHE','GHA'], 
        team1: 'https://countryflagsapi.com/svg/ARG', 
        team2: 'https://countryflagsapi.com/svg/TUN', 
        team3: 'https://countryflagsapi.com/svg/CHE', 
        team4: 'https://countryflagsapi.com/svg/GHA',
    },
    {
        image: 'http://corosoftware.com/wp-content/uploads/2022/11/jorge.png', name: 'Collins',
        quote: '"¿Quién iba a creer que Bruce Willis estaba muerto?"',
        teams: ['QAT','DNK','CAN','KOR'], 
        team1: 'https://countryflagsapi.com/svg/QAT', 
        team2: 'https://countryflagsapi.com/svg/DNK', 
        team3: 'https://countryflagsapi.com/svg/CAN', 
        team4: 'https://countryflagsapi.com/svg/KOR',
    },
]

const ParticipantPage = () => {

    const router = useRouter();
    const { query } = router;
    const { id } = query;

    let participant = {}

    participants.map( (item) => {
        if ( item.name === id ) {
            participant = item
        }
    })

    // console.log(participant);

  return (
    <Layout title={`El ${ participant.name }`}>

        <Grid.Container css={{ marginTop: '5px' }} gap={ 2 }>

            <Grid xs={ 12 } sm={ 4 } >
                <Card isHoverable >
                    <Card.Body css={{ padding: '0px' }}>
                        <Card.Image 
                            src={ participant.image }
                            alt={ participant.name }
                            width="100%"
                            height="100%"
                            objectFit="cover"
                        />
                    </Card.Body>
                </Card>
            </Grid>

            <Grid xs={ 12 } sm={ 8 } >
                <Card>
                    <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Text h1>{ participant.name }</Text>
                    </Card.Header>
                    <Card.Header>
                        <Text h4>Frase celebre:</Text>
                        <Spacer />
                        <Text h4 i css={{ transform: ''}}>{ participant.quote }</Text>
                    </Card.Header>
                    
                    <Card.Body>
                        <Text size={ 30 }>Equipos:</Text>

                        <Container css={{ display: 'flex', direction: 'row', justifyContent: 'space-between' }} >
                            <Image 
                                // src={`https://countryflagsapi.com/svg/${participant.teams[0]}`}
                                src={ participant.team1 }
                                width={ 100 }
                                height={ 70 }
                                objectFit="cover"
                                css={{ padding: '4px' }}
                            />
                            <Image 
                                src={ participant.team2 }
                                width={ 100 }
                                height={ 70 }
                                objectFit="cover"
                                css={{ padding: '4px' }}
                            />
                            <Image 
                                src={ participant.team3 }
                                width={ 100 }
                                height={ 70 }
                                objectFit="cover"
                                css={{ padding: '4px' }}
                            />
                            <Image 
                                src={ participant.team4 }
                                width={ 100 }
                                height={ 70 }
                                objectFit="cover"
                                css={{ padding: '4px' }}
                            />
                        </Container>
                    </Card.Body>
                </Card>
            </Grid>


        </Grid.Container>
        {/* <div>ParticipantPage</div> */}
    </Layout>
  )
}

export default ParticipantPage;