import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="bg-neutral-100">
			<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<LandingPage />} />
			</Routes>
			<Footer />
			</BrowserRouter>

		</div>
	);
}

export default App;
