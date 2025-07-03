import { HotelBlock } from "./HotelBlock";
async function getData() {

    const res = await fetch("https://snowtooth-hotel-api.fly.dev")
    
    return res.json();
    
}

export default async function Page(){

    const data = await getData();
    return(
        <main className="flex min-h-screen flex-col items-center justify-beteen p-24">
            <div>
                <h1>
                    Hotel Details
                    </h1>
                <div>
                    {data.map((hotel)=>(
                        <HotelBlock 
                        key={hotel.id}
                        id={hotel.id} 
                        name={hotel.name} 
                        capacity={hotel.capacity}/>
                    ))}
                </div>
            </div>
        </main>
    );
}