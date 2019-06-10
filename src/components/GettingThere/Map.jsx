import React from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import MapMarker from "./MapMarker";

const Container = styled.div`
  margin: auto;
  height: 50vh;
  max-width: 100%;
  width: 75vw;
`;

const SimpleMap = ({ center, zoom }) => (
  // Important! Always set the container height explicitly
  <Container>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyBILfapY5cb-d1sx2Iwv_pWvWUanEFdxM4" }}
      defaultCenter={center}
      defaultZoom={zoom}
    >
      <MapMarker size={16} lat={51.291847} lng={-0.89444} />
    </GoogleMapReact>
    <a href="https://maps.google.com/?q=46.860191,3.779297">Open In Maps</a>
  </Container>
);

SimpleMap.defaultProps = {
  center: {
    lat: 51.291847,
    lng: -0.89444
  },
  zoom: 16
};

SimpleMap.propTypes = {
  center: {
    lat: PropTypes.number,
    lng: PropTypes.number
  },
  zoom: PropTypes.number
};

export default SimpleMap;
