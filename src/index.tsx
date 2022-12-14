import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Backend from './features/backend/App';
import { store as backendStore } from './features/backend/store';
import ChangePassword from './features/changePassword/App';
import Frontend from './features/frontend/App';
import { store as frontendStore } from './features/frontend/store';
import Validate from './features/validate/App';

export const API_BASE_URL = "https://api.mcs-rbg.de/entschuldigungen/"

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={
					<Provider store={frontendStore}>
						<Frontend />
					</Provider>
				} />
				<Route path="/backend" element={
					<Provider store={backendStore}>
						<Backend />
					</Provider>
				} />
				<Route path="/validate" element={<Validate />} />
				<Route path="/changePassword" element={<ChangePassword />} />
			</Routes>
		</BrowserRouter>
	</StrictMode >
);

const title = createRoot(document.getElementById('title')!);
title.render(`${process.env.REACT_APP_NAME}`[0].toUpperCase() + `${process.env.REACT_APP_NAME}`.slice(1));