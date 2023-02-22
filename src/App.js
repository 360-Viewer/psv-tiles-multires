import React, { useEffect } from 'react';
import { ReactPhotoSphereViewer, EquirectangularTilesAdapter, VisibleRangePlugin } from "react-photo-sphere-viewer";


function App() {
  const [view, setView] = React.useState('day');
  const pSRef = React.useRef(null);
  const [baseUrl, setBaseUrl] = React.useState('./assets/day/');

  const handleClick = () => {
    let currentUrl;
    console.log(pSRef.current);
    if (view === 'day') {
      setView('night');
      setBaseUrl('./assets/night/');
      currentUrl = './assets/night/';
    } else {
      setView('day');
      setBaseUrl('./assets/day/');
      currentUrl = './assets/day/';
    }
    pSRef.current.setPanorama({
      width: 14400,
      rows: 16,
      cols: 8,
      baseUrl: `${currentUrl}pano.jpg`,
      tileUrl: (col, row) => {
        return `${currentUrl}tiles/row-${row + 1}-column-${col + 1}.jpg`;
      }
    }, {
      showLoader: false,
    });
  };

  const handleRangeChange = () => {
    const visibleRange = pSRef.current.getPlugin(VisibleRangePlugin);
    visibleRange.setHorizontalRange(['0deg', '180deg']);
    visibleRange.setVerticalRange(['0deg', '0deg']);
  };

  return (
    <div style={{ width: '100%', height: '100%', top: '0', left: '0', position: 'absolute' }}>
      <button onClick={handleClick} style={{ position: 'absolute', top: '0', left: '0', zIndex: '100' }}>
        switch view
      </button>
      <button onClick={handleRangeChange} style={{ position: 'absolute', top: '0', left: '100px', zIndex: '100' }}>
        change visible range
      </button>
      <ReactPhotoSphereViewer
        ref={pSRef}
        height={"100vh"}
        width={"100%"}
        keyboard={false}
        adapter={EquirectangularTilesAdapter}
        src={{
          width: 14400,
          rows: 16,
          cols: 8,
          baseUrl: `${baseUrl}pano.jpg`,
          baseBlur: true,
          tileUrl: (col, row) => {
            return `${baseUrl}tiles/row-${row + 1}-column-${col + 1}.jpg`;
          }
        }}
        plugins={[
          [VisibleRangePlugin, {
            // horizontalRange: [-Math.PI / 2, Math.PI / 2],
            // verticalRange: [-Math.PI / 3, Math.PI / 3],
          }],
        ]}
      />
    </div>
  );
}

export default App;
