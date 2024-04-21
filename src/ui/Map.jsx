import { MapContainer, TileLayer } from "react-leaflet";

const Map = () => {
  return (
    <MapContainer
    className="flex-1 di h-full "
      center={[33, -84]} // Valid latitude and longitude values
      zoom={10}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;