import { LatLngTuple, LeafletMouseEvent } from 'leaflet'
import { useEffect, useRef, useState } from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import styled from 'styled-components'

const Map = styled.section`
  .leaflet-container{
    width: 100%;
    height: 342px;
    margin-bottom: 24px;
  }
`

export type MapzoneProps = {
  position: LatLngTuple
  setSelectedPosition: React.Dispatch<React.SetStateAction<[number, number]>>
} 


const Mapzone  = ({position, setSelectedPosition}: MapzoneProps) => {
  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0])
  const mapRef = useRef()
  
  function handleMapClick(event: LeafletMouseEvent) {
    setSelectedPosition([
      event.latlng.lat,
      event.latlng.lng
    ])
  }
  
  useEffect(() => { 
    const { current: map } = mapRef
    // const { leafletElement: map } = current
    console.log(map)
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      setInitialPosition([ latitude, longitude ])
    })

    setTimeout(() => {
      map.flyTo(initialPosition, {
        duration: 3
      })
    }, 1000)
  }, [mapRef])
  
  return (
    <Map>
      <MapContainer 
      // [-21.7561196,-48.1263616]
        ref={mapRef}
        center={initialPosition} 
        zoom={15} 
        onClick={handleMapClick}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <Marker position={position}/>
      </MapContainer>
    </Map>
  )
}

export default Mapzone