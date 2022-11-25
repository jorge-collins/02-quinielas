import { Card, Container, Grid, Image, Spacer, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { Layout } from "../../components/layouts";


const participants = [
    {
        image: 'http://corosoftware.com/wp-content/uploads/2022/11/alexei.png', name: 'Alexei',
        teams: ['SEN','FRA','SRB','CMR'], quote: '"¿A donde vas a ir?"',
    },
    {
        image: 'http://corosoftware.com/wp-content/uploads/2022/11/aden.png', name: 'Aden',
        teams: ['NLD','SAU','ESP','DEU'], quote: '"Si ser gey es el concepto de superhombre..."',
    },
    {
        image: 'http://corosoftware.com/wp-content/uploads/2022/11/hugo.png', name: 'Carry',
        teams: ['ECU','MEX','HRV','PRT'], quote: '"Es imposible que un chango pueda hacer eso"',
    },
    {
        image: 'http://corosoftware.com/wp-content/uploads/2022/11/cristian.png', name: 'Cristian',
        teams: ['GB-ENG','GB-WLS','CRI','URY'], quote: '"¿[inserte cualquier cosa] es un país?"',
    },
    {
        image: 'http://corosoftware.com/wp-content/uploads/2022/11/israel.png', name: 'Isra',
        teams: ['IRN','USA','POL','BRA'], quote: '"Aliviana el mosquero"',
    },
    {
        image: 'http://corosoftware.com/wp-content/uploads/2022/11/iesus.png', name: 'Iesus',
        teams: ['AUS','JPN','BEL','MAR'], quote: '"Te lo lavas"',
    },
    {
        image: 'http://corosoftware.com/wp-content/uploads/2022/11/raul.png', name: 'Raúl',
        teams: ['ARG','TUN','CHE','GHA'], quote: '"Saco leche pa tu chamaco"',
    },
    {
        image: 'http://corosoftware.com/wp-content/uploads/2022/11/jorge.png', name: 'Collins',
        teams: ['QAT','DNK','CAN','KOR'], quote: '"¿Quién iba a creer que Bruce Willis estaba muerto?"',
    },
]

const ParticipantPage = () => {

    const router = useRouter();
    const { query } = router;
    const { id } = query;
    // console.log(id);

    let participant = {}

    participants.map( (item) => {
        if ( item.name === id ) {
            participant = item
        }
    })

    console.log(participant);

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
                                src={`https://countryflagsapi.com/svg/${participant.teams[0]}`}
                                width={ 100 }
                                height={ 70 }
                                objectFit="cover"
                                css={{ padding: '4px' }}
                            />
                            <Image 
                                src={`https://countryflagsapi.com/svg/${participant.teams[1]}`}
                                width={ 100 }
                                height={ 70 }
                                objectFit="cover"
                                css={{ padding: '4px' }}
                            />
                            <Image 
                                src={`https://countryflagsapi.com/svg/${participant.teams[2]}`}
                                width={ 100 }
                                height={ 70 }
                                objectFit="cover"
                                css={{ padding: '4px' }}
                            />
                            <Image 
                                src={`https://countryflagsapi.com/svg/${participant.teams[3]}`}
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