import React, { Component } from 'react'
import Email from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import LocationOnIcon from '@material-ui/icons/LocationOn';

class Intro extends Component {
   
    render() {
        return  (
        <div className="max-w-screen-xl mx-auto">
            <div className="flex lg:flex-row flex-col-reverse lg:my-56 my-20">
                <div className="flex justify-center items-center lg:w-1/2 w-full lg:pt-0 pt-10 ">
                    <div className="flex flex-col lg:pr-10 pr-0">
                        <div className="float-left lg:text-6xl text-4xl font-bold text-olive">
                            Alfred Tamayo
                        </div>
                        <div className="flex lg:justify-start justify-center font-semibold text-2xl pt-8 text-olive">
                            API Developer
                        </div>
                        <p className="flex lg:justify-start justify-center text-sm pt-8 text-olive">
                            <Email className="text-olive mr-2" />red.yamato@gmail.com
                        </p>
                        <p className="flex lg:justify-start justify-center text-sm pt-3 text-olive">
                            <PhoneIphoneIcon className="text-olive mr-2" />+639295241537
                        </p>
                    
                        <p className="flex lg:justify-start justify-center text-sm pt-3 text-olive">
                            <LocationOnIcon className="text-red-400 mr-2" />Davao City, Davao Del Sur, 8000
                        </p>
                    </div>
                </div>
            
                <div className="flex justify-center items-center px-10 lg:w-1/2 w-full">
                    <div className=" bg-gray-200 lg:w-80 lg:h-80 w-48 h-48 rounded-full">
                        <img src="/images/me.png" className="relative ml-4 mt-4 rounded-full lg:w-72 lg:h-72 w-40 h-40" />
                    </div>
                   
                </div>
            </div>
        </div>
        );
    }   
}

export default Intro