'use client';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React from 'react';

const mapContainerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: 30.76258758144338,
  lng: 76.6602360055528,
};

const locations = [
  {
    name: 'Your Web Hub',
    lat: 30.761694744824002,
    lng: 76.65999943338254,
    description: 'SCO 208, Sector 124, Sunny Enclave, Sahibzada Ajit Singh Nagar, Kharar, Punjab 140301, India',
  },
];

const BranchMap = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyARfVtoh-XSwKvead6E7XgZ_MpKe-iFzPU">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={15}>
        {locations.map((location, index) => (
          <Marker key={index} position={{ lat: location.lat, lng: location.lng }} title={location.name} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default BranchMap;
