import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import Head from '../components/header/Header';

class Map extends Component{

    render(){
        return(
            <div>
                <Head/>
                <div style={{width: '70rem', height: '90rem'}}>
                    <GoogleMap bootstrapURLKeys={{key: this.props.googleApiKey}}
                               center={this.props.mapCenter}
                               zoom={this.props.mapZoom}>
                    </GoogleMap>
                </div>
            </div>
        );
    }

}

export default Map;