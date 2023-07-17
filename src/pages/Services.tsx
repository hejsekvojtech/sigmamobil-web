import ServicePrices from "../data/Services.json";

const Services = () => {
    return (
        <div>
            <section>
                <h1>Ceník</h1>
                <p>
                    Zde naleznete aktuální fixní ceník za služby mimo servis
                    telefonů.
                </p>
                <p>
                    Jedná se o služby jako přehrání firmwaru záloha a přenos dat
                    do nového zařízení. Přesnou cenu běžné opravy se dozvíte
                    e-mailem, nebo telefonicky při objednávce.
                </p>
            </section>
            <div className="flex justify-center">
                <div className="overflow-x-scroll rounded-lg">
                    <table className="table-auto md:text-lg text-sm">
                        <thead className="uppercase bg-red-100">
                            <tr>
                                <th>Služba</th>
                                <th>Časová náročnost</th>
                                <th>Cena</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ServicePrices.map((service) => {
                                return (
                                    <tr key={service.id}>
                                        <td>{service.name}</td>
                                        <td>{service.time_consumption}</td>
                                        <td>{service.price}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <section>
                <p>
                    Ačkoliv je u obnovy dat ze zničeného telefonu uvedená časová
                    náročnost 2 - 3 hodiny, doba přípravy se může pohybovat v
                    řádu několika dnů.
                </p>
                <p>
                    Je potřeba zajistit funkční "dárcovskou desku", na kterou
                    bude osazen paměťový modul procesor z poškozeného zařízení.
                </p>
            </section>
        </div>
    );
};

export default Services;
