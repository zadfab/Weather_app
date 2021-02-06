import React from 'react';
import cloud_img from '../images/cloud.gif'
import sunny_img from '../images/sunny.gif'
import rain_img from '../images/rain.gif'
import snow_img from '../images/snow.gif'
import thunder_img from '../images/thunder.gif'
import mist_img from '../images/mist.gif'

import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import VisibilityIcon from '@material-ui/icons/Visibility';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import FlagIcon from '@material-ui/icons/Flag';
import GrainIcon from '@material-ui/icons/Grain';
import default_img from '../images/default.gif'
import CloudIcon from '@material-ui/icons/Cloud';
import NearMeIcon from '@material-ui/icons/NearMe';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import AdjustIcon from '@material-ui/icons/Adjust';
import OpacityIcon from '@material-ui/icons/Opacity';

var bg_name = ''
var weather_icon = ''
const Display = (props) => {
    var theme = 'black'
    try {
        console.log(props.main_data.weather[0].main)
        if (props.main_data.weather[0].main === 'Smoke' || props.main_data.weather[0].main === 'Mist' || props.main_data.weather.main === 'Fog' || props.main_data.weather[0].main === 'Dust'){
            bg_name = mist_img    
            theme = 'white' 
            weather_icon = <CloudIcon/>
        }
        else if (props.main_data.weather[0].main === 'Clouds'){ 
            bg_name = cloud_img
            weather_icon = <CloudIcon/>
        }
        else if(props.main_data.weather[0].main === 'Drizzle' || props.main_data.weather[0].main === 'Rain'){
            bg_name = rain_img
            theme = 'black'
            weather_icon = <OpacityIcon/>
        }else if(props.main_data.weather[0].main === 'Thunderstorm'){
         bg_name = thunder_img
         weather_icon = <FlashOnIcon/>
        }else if(  props.main_data.weather[0].main === 'Snow'){
           bg_name = snow_img
           weather_icon = <AcUnitIcon/>
        }else if(  props.main_data.weather[0].main === 'Clear'){
           bg_name = sunny_img
           weather_icon = <WbSunnyIcon/>
        }else {
            bg_name = default_img;
            weather_icon = <AdjustIcon/>

    
        }
    } catch (error) {
        console.log(error)
        bg_name = default_img
    }
    
    return(
        <>
         <section style={{color: theme}}>
            <div className="container">
                <div className="row " >
                    <div className="col-2"></div>
                   
                   
                    {!props.main_data?<h1 className="text-center">No data found</h1>:
                    <div className="col-8 border text-center img-fluid " style={{backgroundImage:`url(${bg_name})` ,backgroundSize:`100% 100%`,borderRadius:`15px`}}>
                        <h1 className='mt-5 text-capitalize'>{props.main_data.name},{props.main_data.sys.country}</h1>
                        <h1 >{props.main_data.main.temp}<sup>o</sup>C</h1>
                        <p>Feels like {props.main_data.main.feels_like}<sup>o</sup>C</p>
                        <h2>{weather_icon} {props.main_data.weather[0].main} </h2>
                        <div className='mb-5'>
                            <span className="mx-2 ">Min Temp:{props.main_data.main.temp_min}<sup>o</sup>C</span><span className="mx-2">Max Temp:{props.main_data.main.temp_max}<sup>o</sup>C</span>   </div> 
                        <div  className='mb-5'>
                            <span className="mx-2 "><i><DragIndicatorIcon/></i>Pressure:{props.main_data.main.pressure} hPa</span><span className="mx-2"><i><OpacityIcon/></i>Humidity:{props.main_data.main.humidity}%</span>    </div>                       
                        <div className='mb-5'> 
                            <span className="mx-2 "><i><VisibilityIcon/></i>Visibility:{props.main_data.visibility/1000} Km</span><span className="mx-2"><i><NearMeIcon/></i>wind:{props.main_data.wind.speed} m/s</span> 
                        </div>
                        <div className='mb-5'> 
                            <span className="mx-2 "><i><SwapVertIcon/></i>longitude:{props.main_data.coord.lon} </span><span className="mx-2"><i><SwapHorizIcon/></i>latitude:{props.main_data.coord.lat}</span> 
                        </div>
                        
                       
                    </div>}
                </div>
            </div>
        </section>
     
        </>
    )
}

export default Display