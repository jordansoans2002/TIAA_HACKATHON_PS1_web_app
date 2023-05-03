import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { productInputs, userInputs } from "./formSource";
import App from './App'
import { Signup, Login, BusDetailsForm, ViewBus, SeatSelector, PaymentPage, UserDashboard, SearchBar} from './components'
import './index.css'

const seats = [
  ["1A", "2A", "3A", "4A", "5A", "6A"],
  ["1B", "2B", "3B", "4B", "5B", "6B"],
  ["1C", "2C", "3C", "4C", "5C", "6C"],
  ["1D", "2D", "3D", "4D", "5D", "6D"],
  ["1E", "2E", "3E", "4E", "5E", "6E"]
];

const reservedSeats = ["2C", "3D", "4E", "6A", "6B"];

const handleSeatSelect = (selectedSeats) => {
  console.log("Selected seats:", selectedSeats);
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/addbus" element={<BusDetailsForm />} />
        <Route exact path="/viewbus" element={<ViewBus />} />
        <Route exact path="/userboard" element={<UserDashboard />} />

        <Route path="/busopdash">
          <Route index element={<Home />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productsId" element={<Single />} />
            <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
          </Route>
        </Route>

        <Route exact path="/seatSelect" element={<SeatSelector
          seats={seats}
          reservedSeats={reservedSeats}
          onSelect={handleSeatSelect}
        />} />
        <Route exact path="/searchBar" element={<SearchBar />} />
        {/* <Route exact path="/searchfilter" element={<SearchFilters />} /> */}
        
        <Route exact path="/paymentpage" element={<PaymentPage />} />
        {/* <Route exact path="/searchBuses" element={<SearchBusesPage/>} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
