import React, { Component } from 'react'
import Email from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

class Intro extends Component {
   
    render() {
        const styles = {
            smallIcon: {
              width: 28,
              height: 28,
            },
          
        };
        return  (
            <div className="relative h-screen bg-trueGrey">
                <div className="absolute w-full">
                    <div className="max-w-screen-xl mx-auto">
                        <div className="flex lg:flex-row flex-col-reverse lg:my-56 my-20">
                            <div className="flex flex-wrap justify-center items-center lg:w-1/2 w-full lg:pt-0 pt-10 pl-12">
                                <div className="flex flex-col lg:pr-10 pr-0 w-full">
                                    <div className="flex lg:justify-start justify-center lg:text-6xl font-bold text-4xl text-gray-400">
                                    Alfred Tamayo
                                    </div>
                                    <div className="flex lg:justify-start justify-center font-semibold text-2xl pt-3 text-gray-400">
                                        API Developer
                                    </div>
                                    <p className="flex lg:justify-start justify-center text-sm pt-10 text-gray-400">
                                        <Email className="text-gray-400 mr-2" />red.yamato@gmail.com
                                    </p>
                                    <p className="flex lg:justify-start justify-center text-sm pt-3 text-gray-400">
                                        <PhoneIphoneIcon className="text-gray-400 mr-2" />+639295241537
                                    </p>
                                
                                    <p className="flex lg:justify-start justify-center text-sm pt-3 text-gray-400">
                                        <LocationOnIcon className="text-red-400 mr-2" />Davao City, Davao Del Sur, 8000
                                    </p>
                                </div>
                                <div className="flex flex-row w-full pt-6">
                                
                                    <a className="pr-2 " href="https://linkedin.com/in/alfred-christopher-tamayo-53522a166" target="_blank" >
                                        <LinkedInIcon style={styles.smallIcon} className="text-blue-500"/>
                                    </a>
                                    <a className="px-2" href="https://github.com/tamayoac" target="_blank" >
                                        <GitHubIcon className="text-gray-600 " />
                                    </a>
                                    <a className="px-2" href="https://www.upwork.com/freelancers/~0171fc1d0d468e4b4b?viewMode=1" target="_blank">
                                        <img src="/images/upwork-icon.png" className="w-6 h-6"/>
                                    </a>
                                </div>
                            </div>
                        
                            <div className="flex justify-center items-center pr-12   lg:w-1/2 w-full">
                                <img src="/images/me.png" className="rounded-full lg:w-72 lg:h-72 w-40 h-40" />    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        );
    }   
}

export default Intro