import { useState } from "react";
import "./App.css";
import Logo from "../images/logo.svg";

function App() {
	return (
		<div className="">
			<div id="front" className="h-[100vh]">
				<div class="area">
					<ul class="circles">
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
			</div>
			<div id="front-message" className="absolute h-[100vh] top-0 left-0">
				<div className=" w-full h-full mx-auto p-2 flex justify-center items-center">
					<Logo src="" alt="" width="125" height="30" />
					{/* <p className="text-lg text-black"> */}
				</div>
			</div>
			<div id="second" className="h-[100vh]"></div>

			<div id="footer" className="h-[30vh] bg-slate-600"></div>
		</div>
	);
}

export default App;
