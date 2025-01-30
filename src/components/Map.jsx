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
      iconUrl: '/user.webp', // Path to your custom marker image
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    })
  : null;

// Locations in India and Pakistan
const locations = [
  {
    name: 'Branch in Delhi, India',
    latitude: 28.613939,
    longitude: 77.209023,
    description: 'This is the branch in Delhi, India.',
  },
  {
    name: 'Branch in Karachi, Pakistan',
    latitude: 24.860735,
    longitude: 67.001137,
    description: 'This is the branch in Karachi, Pakistan.',
  },
  {
    name: 'Branch in Lahore, Pakistan',
    latitude: 31.549722,
    longitude: 74.343611,
    description: 'This is the branch in Lahore, Pakistan.',
  },
];

const BranchMap = () => {
  if (!L) return null; // Avoid rendering until Leaflet is loaded

  return (
    <div className="z-0 h-[200px] md:h-[500px] w-[290px] md:w-[500px] overflow-hidden">
      <MapContainer center={[27.0, 77.0]} zoom={5} className="h-full w-full">
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
