'use client'; // Ensure the code runs on the client in Next.js

import dynamic from 'next/dynamic';
import React from 'react';
import 'leaflet/dist/leaflet.css';

// Dynamically import `react-leaflet` components to avoid SSR issues
const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), {
  ssr: false,
});
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), { ssr: false });

// Leaflet needs to access `L` after the window object is available
const L = typeof window !== 'undefined' ? require('leaflet') : null;

// Custom icon for markers
const customIcon = L
  ? L.icon({
      iconUrl: '/map-logo.png', // Path to your custom marker image
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    })
  : null;

// Locations
const locations = [
  {
    name: 'Your Web Hub',
    latitude: 30.76258758144338,
    longitude: 76.6602360055528,
    description: 'SCO 208, Sector 124, Sunny Enclave, Sahibzada Ajit Singh Nagar, Kharar, Punjab 140301, India',
  },
];

const BranchMap = () => {
  if (!L) return null; // Avoid rendering until Leaflet is loaded

  return (
    <div className="z-0 h-[200px] md:h-[500px] w-[290px] md:w-[500px] overflow-hidden">
      <MapContainer center={[30.76258758144338, 76.6602360055528]} zoom={15} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((location, index) => (
          <Marker key={index} position={[location.latitude, location.longitude]} icon={customIcon}>
            <Popup>
              <strong>{location.name}</strong>
              <br />
              {location.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default BranchMap;
