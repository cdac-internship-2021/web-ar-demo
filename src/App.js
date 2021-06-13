import "@google/model-viewer";
import "./App.css";
import ModelGeoPlanter from "./assets/GeoPlanter/GeoPlanter.glb";
import ModelChair from "./assets/Chair/Chair.glb";
import PosterGeoPlanter from "./assets/GeoPlanter/GeoPlanter.png";
import PosterChair from "./assets/Chair/Chair.png";

function App() {
	return (
		<div className='App'>
			<div className='renderer'>
				<h1 className='model-name'>Cactus Model</h1>
				<model-viewer
					src={ModelGeoPlanter}
					alt='A 3D model of an cactus plant'
					ar
					ar-modes='webxr scene-viewer quick-look'
					poster={PosterGeoPlanter}
					environment-image='neutral'
					auto-rotate
					camera-controls></model-viewer>

				<h1 className='model-name'>Chair Model</h1>
				<model-viewer
					src={ModelChair}
					alt='A 3D model of an chair'
					ar
					ar-modes='webxr scene-viewer quick-look'
					poster={PosterChair}
					environment-image='neutral'
					auto-rotate
					camera-controls></model-viewer>
			</div>
		</div>
	);
}

export default App;
