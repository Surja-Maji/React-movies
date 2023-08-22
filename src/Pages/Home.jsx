import { useState } from "react";
import { Box, styled } from "@mui/material";
import Sunset from '../assets/bg.jpg';
import Form from "../Components/Form";
import Information from "../Components/Information";

const Image = styled(Box) ({
    backgroundImage: `url(${Sunset})`,
    width: '60%',
    height: '70%',
    backgroundSize: 'cover'
})

const Component = styled(Box) ({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    width: '65%',
})


const Home = () => {
   const [result, setResult ] = useState({})


    return (
        <Component>
            <Image></Image>
            <Box style={{ width: '57%', height: '70%' }}>
                <Form setResult={setResult}/>
                <Information result={result}/>
            </Box>
        </Component>

    )
}
export default Home;