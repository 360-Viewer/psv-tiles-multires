import React from 'react';
import { ReactPhotoSphereViewer, EquirectangularTilesAdapter } from "react-photo-sphere-viewer";


function App() {
  const pSRef = React.useRef(null);
  const baseUrl = './assets/';
  // const baseUrl = "https://photo-sphere-viewer-data.netlify.app/assets/";

  return (
    <div style={{ width: '100%', height: '100%', top: '0', left: '0', position: 'absolute' }}>
      <ReactPhotoSphereViewer
        height={"100vh"}
        width={"100%"}
        keyboard={false}
        adapter={EquirectangularTilesAdapter}
        src={{
          width: 14400,
          cols: 16,
          rows: 8,
          baseUrl: `${baseUrl}pano.jpg`,
          tileUrl: (col, row) => {
            return `${baseUrl}tiles/row-${row}-column-${col}.jpg`;
          }
        }}
      />
    </div>
  );
}

export default App;
