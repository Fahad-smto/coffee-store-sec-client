import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";



const Home = () => {

    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees);

    return (
        <div className="m-20">
            <h1 className="text-center text-green-500 mb-20 text-3xl"> Hot coffee {coffees.length}</h1>

            <div className="grid md:grid-cols-2 gap-4">
                {
                    coffees.map(coffee => <CoffeeCard
                        coffees={coffees}
                        setCoffees={setCoffees}
                        key={coffee._id}
                        coffee={coffee}
                    ></CoffeeCard>)
                }
            </div>

        </div>
    );
};

export default Home;