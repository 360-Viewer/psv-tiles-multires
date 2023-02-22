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
          rows: 16,
          cols: 8,
          baseUrl: `${baseUrl}pano.jpg`,
          tileUrl: (col, row) => {
            console.log(`col: ${col}, row: ${row}`);
            return `${baseUrl}tiles/row-${row + 1}-column-${col + 1}.jpg`;
          }
        }}
      />
    </div>
  );
}

export default App;
