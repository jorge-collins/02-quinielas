import { Button, Card, Container, Grid, Row, Spacer, Text } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Layout } from "../components/layouts";


const participants = [
    {
        image: 'http://corosoftware.com/wp-content/uploads/2022/11/alexei.png', name: 'Alexei',
        teams: ['SEN','FRA','SRB','CMR'],
    },
    {
        image: 'http://corosoftware.com/wp-content/uploads/2022/11/aden.png', name: 'Aden',
        teams: ['NED','KSA','ESP','GER'],
    },
    {
        image: 'http://corosoftware.com/wp-content/uploads/2022/11/hugo.png', name: 'Carry',
        teams: ['ECU','MEX','CRO','POR'],
    },
    {
        image: 'http://corosoftware.com/wp-content/uploads/2022/11/cristian.png', name: 'Cristian',
        teams: ['ENG','WAL','CRC','URU'],
    },
    {
        image: 'http://corosoftware.com/wp-content/uploads/2022/11/israel.png', name: 'Isra',
        teams: ['IRN','USA','POL','BRA'],
    },
    {
        image: 'http://corosoftware.com/wp-content/uploads/2022/11/iesus.png', name: 'Iesus',
        teams: ['AUS','JPN','BEL','MAR'],
    },
    {
        image: 'http://corosoftware.com/wp-content/uploads/2022/11/raul.png', name: 'Raúl',
        teams: ['ARG','TUN','SUI','GHA'],
    },
    {
        image: 'http://corosoftware.com/wp-content/uploads/2022/11/jorge.png', name: 'Collins',
        teams: ['QAT','DEN','CAN','KOR'],
    },
]


export default function HomePage(props) {

    const { items } = props;
    const { groups } = items;
    
    const [matchesToday, setMatchesToday] = useState([]);

    const teams = [];
    groups.map((group) => (
        teams.push(...group.teams)
    ))

    teams.forEach( (team, index) => {
        const cCode = team.country;
        teams[index].flagURL = `https://countryflagsapi.com/png/${cCode}`;

        participants.forEach( ({ name, teams }) => {

            if ( teams.includes(cCode) ) {
                team.participant = name;
            }

        })
    })


    const getTodayMatches = async() => {
        const date = new Date();
        const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
        
        const { data } = await axios.get(`https://worldcupjson.net/matches?start_date=${year}-${month+1}-${day}`);  

        setMatchesToday(data);
    }


    useEffect(() => {
        getTodayMatches();
    }, [ ])
    

    return (
        <Layout title="Quiniela mundialista">
   
        <Text css={{ pl: 40, pt: 20 }} h2 color="primary">Los Participantes</Text>
        <Grid.Container gap={ 4 } justify='center'>
            {
                participants.map( ({name, image}) => (
                    <Grid xs={ 6 } sm={ 3 } md={ 3 } lg={ 2 } xl={ 1 } key={ name }>
                        <Card isHoverable isPressable>
                            <Card.Body css={{ p: 0 }}>
                                <Card.Image
                                    src={ image }
                                    height="100%"
                                    width="100%"
                                    objectFit="cover"
                                />
                            </Card.Body>
                        </Card>
                    </Grid>
                ))
            }
        </Grid.Container>

            <Text css={{ p: 40 }} h2 color="primary">Los juegos de hoy</Text>
            <Grid.Container gap={ 1 } justify='flex-start'>
                {
                    matchesToday.map( ( {venue, status, home_team, away_team} ) => (
                        <Grid xs={ 12 } sm={ 6 } md={ 3 } xl={ 3 } key={ venue }>
                            <Card>
                                <Card.Header>
                                    <Row>
                                        <Text h3 color="gray">{ venue }</Text>
                                    </Row>
                                </Card.Header>
                                <Card.Body>
                                    <Row justify='space-evenly'>
                                        <Text h5 color="secondary">{ home_team.name }</Text>
                                        <Text h5>{ home_team.goals ?? 0 }</Text>
                                        <Text h5> · </Text>
                                        <Text h5>{ away_team.goals ?? 0 }</Text>
                                        <Text h5 color="secondary">{ away_team.name }</Text>
                                    </Row>
                                </Card.Body>
                                <Card.Footer>
                                    <Row justify='center'>
                                        <Text h5 transform="lowercase" color="forestgreen">{ (status === 'in_progress') ? 'in progress' : status }</Text>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid.Container>

            <Text css={{ p: 40 }} h2 color="primary">Las asignaciones por grupos</Text>
            <Grid.Container gap={ 1 } justify='flex-start'>
                { 
                    groups.map( ({letter, teams} ) => (
                        <Grid xs={ 12 } sm={ 3 } md={ 3 } xl={ 1 } key={ letter }>
                            <Card isHoverable >
                                <Card.Header>
                                    <Row>
                                        <Text h3 color="gray">Grupo { letter }</Text>
                                    </Row>
                                </Card.Header>

                                <Card.Body>
                                { teams.map( (team) => (
                                    <Container key={team.name}>

                                        <Row justify='space-between'>
                                            <Text h5 color="cyan">{ team.name }</Text>
                                            <Text h5 color="secondary">{ team.participant }</Text>
                                        </Row>
                                    </Container>
                                    
                                    ))
                                }
                                </Card.Body>

                            </Card>
                        </Grid>
                    ))

                }
            </Grid.Container>

        </Layout>
    );
}



export const getStaticProps = async (ctx) => {

    const { data } = await axios.get('https://worldcupjson.net/teams');
    
    return {
        props: {
            items: data
        }
    }
}
