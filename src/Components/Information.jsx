import  { Box, Typography,styled} from "@mui/material";
import { LocationOn, SettingsBrightness,Opacity,Brightness5,Brightness6, Dehaze, Cloud  } from "@mui/icons-material";

const Row = styled (Typography)({
    padding: 7,
    fontSize: 20,
    letterSpacing: 2,
    '& > svg': {
        marginRight: 10
    }
});

const Wrapper = styled (Box) ({
      backgroundColor: '#afeeee',
      width: 450,
      height: 400
})

const Information = ({ result }) => {

    return (
        result && Object.keys(result).length > 0 ?
        <Wrapper> 
          <Row><LocationOn />Location: {result.name}, {result.sys.country}</Row>
          <Row><SettingsBrightness />Temparute: {result.main.temp}</Row>
          <Row><Opacity /> Humidity: {result.main.humidity}</Row>
          <Row><Brightness5 />Sun Rise: {new Date(result.sys.sunrise*1000).toLocaleTimeString()}</Row>
          <Row><Brightness6 />Sun Set: {new Date(result.sys.sunset*1000).toLocaleTimeString()}</Row>
          <Row><Dehaze />Humidity: {result.weather[0].main}</Row>
          <Row><Cloud /> Clouds: {result.clouds.all}%</Row>
        </Wrapper>

        : null
    )
}

export default Information;