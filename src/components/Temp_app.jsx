import React,{useState,useEffect} from 'react';
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Modal from "react-modal";
import '../css/app.css';
import bg_img from '../images/main_bg.jpg'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SettingsIcon from '@material-ui/icons/Settings';
import Display from './Display'


const Temp_app = ()=>{
    const [location,setLocation] =useState('Delhi')
    const [api_res,set_api_res] =useState()
    
    const [isOpen, setIsOpen] = useState(false);
    const [unit,setUnit] = useState({unit:'metric',convention:['C',' meter/sec']})

    const key = '7fa4fc93e21f5c2987bd51291b001272'

    async function get_data(){ 
            
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit.unit}&appid=${key}`).then((response)=>{console.log(response);set_api_res(response.data)}).catch((response)=>{set_api_res(null)});
        // set_api_res(()=>{
        //     return(res.data)
        // })
    
    };

   

    useEffect(()=>{
        console.log("__________------------------")
        get_data();
       
        console.log(location)
       
           
    },[location,unit])

    function toggleModal() {
        setIsOpen(!isOpen);
      }

    const change_img = ()=>{
       
        try {
            console.log("This is the culprit*******888",api_res.weather[0].main)
        } catch (error) {
            return(null)
        }
        
       
    }

    const change_happen = (e)=>{
        setLocation(e.target.value)
        change_img()
        console.log("__________!!!!!!!!!!!!!!!!!!!!",api_res)
    }

    return (
        <>
        {console.log("__________~~~~~~~~",api_res)}
       
       <img src={bg_img} style={{position:'absolute',zIndex:'-1',width:'100%',height:'100vh'}} alt="bg-img"/>
        <header>
        <section  >
            <div className="container-fluid">
                <div className="row">
                    <h1 className=" col-lg-12 col-md-12 col-sm-12 text-center text-capitalize my-5 text-dark font-weight-bolder">Weather App</h1>
                </div>

            </div>
        </section>
        </header>

        <section className='container-fluid '>
            <article>
                <div className='row'>
                <div className='col-lg-4 col-sm-11 col-md-4 text-right  float-left'>
                <i className='object mb-3' ><LocationOnIcon/></i>
                </div>
                <div className=" col-lg-4 col-md-4 col-sm-12 ">
                
                    <div className=" form-group ">
                    
                    <input className=" text-center form-control text-center float-left" type="search" value={location} onChange={change_happen} placeholder="Your Location"/>
                   
                    </div>
                </div> <button style={{background:'transparent'}} className='border-0 ' onClick={toggleModal}><SettingsIcon/></button>
                </div>
            </article>

        </section>

       <Display main_data = {api_res} units={unit}/>
      

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={50}

      >
          <section className="container-fluid ">
          <div className="row">
        <h1 className='text-center col-12 border-bottom border-primary'>Setting</h1>
        <h3 className='ml-5 my-5'>Select your prefered unit</h3>

            <div className="btn-group ml-4 my-5">
            <button type="button" className="btn btn-primary" onClick={() =>{setIsOpen(!isOpen);setUnit({unit:'metric',convention:['C',' meter/sec']})}}>C</button>
            <button type="button" className="btn btn-success" onClick={()=>{setIsOpen(!isOpen);setUnit({unit:'Imperial',convention:['F','miles/hour.']})}}>F</button>
            
            </div>
        <button className="btn btn-primary  col-12"onClick={toggleModal}>Close </button>
        </div>
        </section>
      </Modal>
       
        </>
    )

}

export default Temp_app