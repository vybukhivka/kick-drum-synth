import './index.css'

function App() {
  return (
		<>
			<KickSynth />
		</>
	)
}

function KickSynth() {
	return (
		<div className="synth-container">
			<div className="synth-knobs">
				<div className="knob">
					<input type="range" />
				</div>
				<div className="knob">
					<input type="range" />
				</div>
				<div className="knob">
					<input type="range" />
				</div>
			</div>		
			<div className="trig-container">
				<button>trig</button>
			</div>
		</div>
	)
}

export default App
