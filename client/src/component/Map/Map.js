import React, { useState, useEffect } from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,

} from "react-google-maps";

import mapStyles from "./mapStyles";

function Map() {


    return (
        <GoogleMap
            defaultZoom={5}
            defaultCenter={{ lat: 20.5937, lng: 78.9629 }}
            defaultOptions={{ styles: mapStyles }}
        >

        </GoogleMap>
    );
}

const wrappedMap = withScriptjs(withGoogleMap(Map));

export default wrappedMap;
