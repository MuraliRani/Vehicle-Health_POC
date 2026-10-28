import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VehicleHealth3 from './Pages/VehicleHealth3';
import Sidebar from './components/Sidebar';

import VehicleHealth from './Pages/VehicleHealth';
import VehicleHealth1 from './Pages/VehicleHealth1';
import VehicleHealth2 from './Pages/VehicleHealth2';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <header className="header">
          Vehicle Health POC
        </header>

        <div className="app-layout">
          <Sidebar />

          <div className="content">
            <Routes>
              <Route
                path="/"
                element={<VehicleHealth />}
              />

              <Route
                path="/vehicle-health/:modelId"
                element={<VehicleHealth />}
              />

              <Route
                path="/vehicle-health-1/:modelId"
                element={<VehicleHealth1 />}
              />

              <Route
                path="/vehicle-health-2"
                element={<VehicleHealth2 />}
              />
              <Route
                path="/vehicle-health-3/:modelId"
                element={<VehicleHealth3 />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;