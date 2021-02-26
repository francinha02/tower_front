import styled from 'styled-components'

export const MapsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  .leaflet-container {
    width: 100%;
    height: 69vh;
  }

  .map {
    width: 100%;
    height: 69vh;
  }

  .table-section {
    overflow-x: auto;
    overflow-y: auto;
    white-space: nowrap;
  }

  /* th,
  td {
    border: 1px solid #999;
    padding: 0.5rem;
  } */
`
