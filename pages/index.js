import { Card, Container, Divider, Grid, Row, Spacer, Text } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Layout } from "../components/layouts";
import { ParticipantCard } from "../components/participant";

const participants = [
    {
        image: 'http://corosoftware.com/wp-content/uploads/2022/11/alexei.png', name: 'Alexei',
        quote: '"¿A donde vas a ir?"',
        teams: ['SEN','FRA','SRB','CMR'], 
        codes: ['SEN','FRA','SRB','CMR'],
        team1: 'https://countryflagsapi.com/svg/SEN', 
        team2: 'https://countryflagsapi.com/svg/FRA', 
        team3: 'https://countryflagsapi.com/svg/SRB', 
        team4: 'https://countryflagsapi.com/svg/CMR', 
    },
    {
        image: 'http://corosoftware.com/wp-content/uploads/2022/11/aden.png', name: 'Aden',
        quote: '"Si ser gey es el concepto de superhombre..."',
        teams: ['NLD','SAU','ESP','DEU'], 
        codes: ['NED','KSA','ESP','GER'],
        team1: 'https://countryflagsapi.com/svg/NLD', 
        team2: 'https://countryflagsapi.com/svg/SAU', 
        team3: 'https://countryflagsapi.com/svg/ESP', 
        team4: 'https://countryflagsapi.com/svg/DEU', 
    },
    {
        image: 'http://corosoftware.com/wp-content/uploads/2022/11/hugo.png', name: 'Carry',
        quote: '"Es imposible que un chango pueda hacer eso"',
        teams: ['ECU','MEX','HRV','PRT'], 
        codes: ['ECU','MEX','CRO','POR'],
        team1: 'https://countryflagsapi.com/svg/ECU', 
        team2: 'https://countryflagsapi.com/svg/MEX', 
        team3: 'https://countryflagsapi.com/svg/HRV', 
        team4: 'https://countryflagsapi.com/svg/PRT',         
    },
    {
        image: 'http://corosoftware.com/wp-content/uploads/2022/11/cristian.png', name: 'Cristian',
        quote: '"¿[inserte cualquier cosa] es un país?"',
        teams: ['GB-ENG','GB-WLS','CRI','URY'], 
        codes: ['ENG','WAL','CRC','URU'],
        team1: 'https://countryflagsapi.com/svg/GB-ENG', 
        team2: 'https://countryflagsapi.com/svg/GB-WLS', 
        team3: 'https://countryflagsapi.com/svg/CRI', 
        team4: 'https://countryflagsapi.com/svg/URY',
    },
    {
        image: 'http://corosoftware.com/wp-content/uploads/2022/11/israel.png', name: 'Isra',
        quote: '"Aliviana el mosquero"',
        teams: ['IRN','USA','POL','BRA'], 
        codes: ['IRN','USA','POL','BRA'],
        team1: 'https://countryflagsapi.com/svg/IRN', 
        team2: 'https://countryflagsapi.com/svg/USA', 
        team3: 'https://countryflagsapi.com/svg/POL', 
        team4: 'https://countryflagsapi.com/svg/BRA',
    },
    {
        image: 'http://corosoftware.com/wp-content/uploads/2022/11/iesus.png', name: 'Iesus',
        quote: '"Te lo lavas"',
        teams: ['AUS','JPN','BEL','MAR'], 
        codes: ['AUS','JPN','BEL','MAR'],
        team1: 'https://countryflagsapi.com/svg/AUS', 
        team2: 'https://countryflagsapi.com/svg/JPN', 
        team3: 'https://countryflagsapi.com/svg/BEL', 
        team4: 'https://countryflagsapi.com/svg/MAR',
    },
    {
        image: 'http://corosoftware.com/wp-content/uploads/2022/11/raul.png', name: 'Raúl',
        quote: '"Saco leche pa tu chamaco"',
        teams: ['ARG','TUN','CHE','GHA'], 
        codes: ['ARG','TUN','SUI','GHA'],
        team1: 'https://countryflagsapi.com/svg/ARG', 
        team2: 'https://countryflagsapi.com/svg/TUN', 
        team3: 'https://countryflagsapi.com/svg/CHE', 
        team4: 'https://countryflagsapi.com/svg/GHA',
    },
    {
        image: 'http://corosoftware.com/wp-content/uploads/2022/11/jorge.png', name: 'Collins',
        quote: '"¿Quién iba a creer que Bruce Willis estaba muerto?"',
        teams: ['QAT','DNK','CAN','KOR'], 
        codes: ['QAT','DEN','CAN','KOR'],
        team1: 'https://countryflagsapi.com/svg/QAT', 
        team2: 'https://countryflagsapi.com/svg/DNK', 
        team3: 'https://countryflagsapi.com/svg/CAN', 
        team4: 'https://countryflagsapi.com/svg/KOR',
    },
]

export default function HomePage() {
    
    const [matches, setMatches] = useState([]);
    const [matchesToday, setMatchesToday] = useState([]);
    const [groups, setGroups] = useState([]);
    const [teams, setTeams] = useState([]);


    teams.forEach( (team, index) => {
        const cCode = team.country;
        teams[index].flagURL = `https://countryflagsapi.com/png/${cCode}`;

        participants.forEach( ({ name, codes }) => {

            if ( codes.includes(cCode) ) {
                team.participant = name;
            }

        })
    })


    const getMatches = async() => {
        
        const { data } = await axios.get(`https://worldcupjson.net/matches`);  

        data.forEach( (match) => {

            participants.forEach( ({ image, codes }) => {

                if ( codes.includes(match.away_team_country) ) {
                    match.away_team.participant = image;
                }
                if ( codes.includes(match.home_team_country) ) {
                    match.home_team.participant = image;
                }
    
            })
        })
        console.log(data);
        //
        // TODO: 
        // - subir las imagenes ´defeated´, 
        // - agregar los enlaces en el array ´participants´
        // - agregar esos enlaces (defeated) a cada ´match´ como se hizo en esta funcion
        // - - por ejemplo: match.away_team.participant_defeated

        setMatches( data.slice(48,) );
    }


    const getTodayMatches = async() => {
        const date = new Date();
        const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
        
        const { data } = await axios.get(`https://worldcupjson.net/matches?start_date=${year}-${month+1}-${day}`);  

        setMatchesToday(data);
    }

    const getTeamsStats = async() => {
        const { data } = await axios.get('https://worldcupjson.net/teams');
        const { groups } = data;

        setGroups(groups);

        groups.map((group) => (
            teams.push(...group.teams)
        ))
    }
    
    useEffect(() => {
        getMatches();
        getTodayMatches();
        getTeamsStats();

    }, [ ])
    

    return (
        <Layout title="Quiniela mundialista">

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
   
            <Text css={{ p: 40 }} h2 color="primary">Los juegos de eliminación directa</Text>
            <Grid.Container gap={ 1 } justify='center'>
                {
                    matches.map( ( {id, venue, stage_name, status, home_team, away_team, winner_code} ) => (
                        <Grid xs={ 12 } sm={ 6 } md={ 4 } xl={ 3 } key={ id }>
                            <Card>
                                <Card.Header>
                                    <Row>
                                        <Text h3 color="gray">{ venue }</Text>
                                    </Row>
                                </Card.Header>

                                <Card.Body css={{ p: 0 }}>
                                    <Row justify='space-evenly'>

                                        <Card css={{ w: 100, h: 100, backgroundColor:"SkyBlue" }}>
                                            <Card.Body css={{ p: 0 }}>
                                                <Card.Image 
                                                    src={ (status === 'completed' && winner_code === home_team.country) ? 
                                                        home_team.participant_defeated 
                                                        : 
                                                        home_team.participant 
                                                    } 
                                                    height="100px" 
                                                    width="100px" 
                                                    objectFit="cover" 
                                                />
                                            </Card.Body>
                                        </Card>

                                        <Text h1 color="white"> v s </Text>

                                        <Card css={{ w: 100, h: 100, backgroundColor:"SkyBlue" }}>
                                            <Card.Body css={{ p: 0 }}>
                                                <Card.Image 
                                                    src={ (status === 'completed' && winner_code === away_team.country) ?
                                                        away_team.participant_defeated
                                                        :
                                                        away_team.participant 
                                                    } 
                                                    height="100px" 
                                                    width="100px" 
                                                    objectFit="cover" 
                                                />
                                            </Card.Body>
                                        </Card>

                                    </Row>
                                </Card.Body>

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
                                        <Text h5 color="forestgreen">{ stage_name } ·</Text>
                                        <Text h5 transform="lowercase" color="forestgreen">· { (status === 'in_progress') ? 'in progress' : status }
                                        </Text>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid.Container>

            <Text css={{ pl: 40, pt: 20 }} h2 color="primary">Los Participantes</Text>
            <Grid.Container gap={ 4 } justify='center'>
                {
                    participants.map( ( participant ) => (
                        <ParticipantCard participant={ participant } key={ participant.name } />
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
                                        <Row>
                                            <Text h6>
                                                Puntos: { team.group_points }
                                            </Text>
                                        </Row>
                                        <Row justify='space-between'>
                                            <Text h6 color="white">
                                                JJ: { team.games_played } · JG: { team.wins } · JP: { team.losses } · JE: { team.draws }
                                            </Text>
                                        </Row>
                                        <Spacer />
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

