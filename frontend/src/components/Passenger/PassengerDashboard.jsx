import Navbar from "../MainPage/Navbar";
import SearchBar from "./SearchBar";
import SearchFilters from "./SearchFilters";
import BusDetailsCard from "./BusDetailsCard";


const PassengerDashboard = ({ manyBusDetails }) => {
    return (
        <>
            <div className="bg-gradient-to-b from-indigo-400 to-white">
                <SearchBar />
                <div className="w-full flex">
                    <SearchFilters />
                    <div>

                        {manyBusDetails?.map((val, i) => (
                            <BusDetailsCard singleBusDetails={val} />
                        ))}

                        <div>
                            <Map />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PassengerDashboard;