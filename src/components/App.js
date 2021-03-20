import React from 'react';
import {Box, Grid, makeStyles} from '@material-ui/core';
/*import MainBg from '../img/mainBg.jpg';
import MainBg2 from '../img/bgPhoto2.jpg';*/
import MainBg3 from '../img/bgPhoto3.jpg';
import Countdown from 'react-countdown';
import KakaoMap from './KakaoMap';

const useStyles = makeStyles({
    MainBg: {
        height: '100vh',
        width: '100%',
        // backgroundImage: `url(${MainBg})`,
        background: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(${MainBg3}) center;`,
        // backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    MainText: {
        maxWidth: '600px',
        border: '2px solid #fff',
        padding: '50px 20px',
        color: '#ffffff',
        fontSize: '45px',
        textAlign: 'center',
        fontFamily: 'Poiret One, cursive',
    },
    MainFont: {
        fontFamily: 'Poiret One, cursive',
    },
    FontLobster: {
        fontFamily: 'Lobster, cursive',
    },
    FontPacifico: {
        fontFamily: 'Pacifico, cursive',
    }

});

const Completionist = () => <Box textAlign={'center'}>You are good to go!</Box>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <Completionist />;
    } else {
        // Render a countdown
        return (
            <Grid container justify={'space-between'}>
                <Grid item>
                    <Box fontSize={'24px'}>Дней</Box>
                    <Box mt={'10px'}>{days}</Box>
                </Grid>
                <Grid item>
                    <Box fontSize={'24px'}>Часов</Box>
                    <Box mt={'10px'}>{hours}</Box>
                </Grid>
                <Grid item>
                    <Box fontSize={'24px'}>Минут</Box>
                    <Box mt={'10px'}>{minutes}</Box>
                </Grid>
                <Grid item>
                    <Box fontSize={'24px'}>Секунд</Box>
                    <Box mt={'10px'}>{seconds}</Box>
                </Grid>
            </Grid>
        );
    }
};

function App() {
    const classes = useStyles();

    const markerPositions = [];
    const mapSize = [400, 400];

    /* const [markerPositions, setMarkerPositions] = useState([]);
    const [mapSize, setMapSize] = useState([400, 400]);*/
    /*const markerPositions1 = [
        [33.452278, 126.567803],
        [33.452671, 126.574792],
        [33.451744, 126.572441]
    ];
    const markerPositions2 = [
        [37.499590490909185, 127.0263723554437],
        [37.499427948430814, 127.02794423197847],
        [37.498553760499505, 127.02882598822454],
        [37.497625593121384, 127.02935713582038],
        [37.49629291770947, 127.02587362608637],
        [37.49754540521486, 127.02546694890695],
        [37.49646391248451, 127.02675574250912]
    ];
*/


    return(
        <React.Fragment>
            <Box classes={{root: classes.MainBg}}>
                <Grid container alignItems={'center'} justify={'center'} style={{height: '100%'}}>
                    <Grid item>
                        <Box classes={{root: classes.MainText}} mx={{xs: 2, md: 'auto'}}>
                            <Box fontSize='56px'>Андриан и Ирина</Box>
                            <Box fontSize='28px' mt={'20px'}>24 апреля 2021 года</Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            {/* <Box bgcolor={'#B1B882'} py={4} color={'#fff'} fontFamily={'Poiret One, cursive'}>
                <Box textAlign={'center'} fontSize={'35px'} >Свадьба начнется через</Box>
                <Box px={2} mt={'30px'} mx={'auto'} textAlign={'center'} maxWidth={'800px'}>
                    <Countdown
                        date={new Date('2021/04/24 13:30:00')}
                        renderer={renderer}
                    />
                </Box>
            </Box>*/}
            <Box py={'87px'} bgcolor={'#f2d47f'} textAlign={'center'}>
                <Box textAlign={'center'} fontSize={'35px'} >До свадьбы осталось</Box>
                <Box px={2} mt={'30px'} mx={'auto'} textAlign={'center'} maxWidth={'800px'}>
                    <Countdown
                        date={new Date('2021/04/24 13:30:00')}
                        renderer={renderer}
                    />
                </Box>
                <Box my={'30px'} borderColor="black" width={'80%'} component={'hr'} />
                <Box classes={{root: classes.FontPacifico}} fontSize={'25px'} lineHeight={'1.5em'}>КАК<br />ДОБРАТЬСЯ</Box>
                <Box mt={'10px'} fontSize={'22px'}>서울 종로구 대학로 39</Box>
            </Box>
            <Box>
                <KakaoMap markerPositions={markerPositions} size={mapSize} />
            </Box>
        </React.Fragment>
    );
}

export default App;
