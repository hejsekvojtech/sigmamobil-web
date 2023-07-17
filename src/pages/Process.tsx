import TitledCard from "../components/cards/TitledCard";

const Process = () => {
    return (
        <div>
            <section>
                <h1>Servisní postup</h1>
                <p>
                    Zde naleznete informace ohledně servisního postupu a jak
                    připravit zařízení před předáním pro zajištění rychlé
                    diagnostiky a navrhnutí optimálního řešení problému.
                </p>
                <p>
                    Toto je doporučený postup, s postupem budete taktéž
                    obeznámeni při předání zařízení.
                </p>
                <p>
                    Standardně tovární restart u výměny komponentů a diagnostiky
                    problému neprovádím ale i tak je dobré mít zálohu dat.
                </p>
                <section>
                    <div className="grid sm:grid-cols-2 grid-cols-none gap-5">
                        <TitledCard title="Zálohujte data">
                            Před předáním telefonu technikovi je doporučeno
                            zálohovat všechna důležitá data, jako jsou kontakty,
                            fotografie, videa a další soubory. To lze provést
                            pomocí služeb cloudového úložiště, přenesením
                            souborů do počítače nebo pomocí aplikace pro
                            zálohování.
                        </TitledCard>
                        <TitledCard title="Vypněte heslo a zamykací obrazovku">
                            Pokud chcete zajistit, aby servisní technik měl
                            snadný přístup k vašemu telefonu za účelem opravy a
                            otestování funkčnosti, měli byste na svém zařízení
                            vypnout jakékoli heslo nebo zamykací obrazovku.
                        </TitledCard>
                        <TitledCard title="Odstraňte veškeré příslušenství">
                            Pokud je k telefonu připojeno jakékoli externí
                            příslušenství (například pouzdro), před předáním
                            zařízení servisnímu technikovi je odstraňte.
                        </TitledCard>
                        <TitledCard title="Poskytněte podrobné vysvětlení problému">
                            Při předání zařízení je důležité poskytnout jasné a
                            podrobné vysvětlení problému, se kterým se potýkáte.
                            To pomůže technikovi efektivněji diagnostikovat
                            problém.
                        </TitledCard>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default Process;
