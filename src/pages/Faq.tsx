import FaqBlock from "../components/FaqBlock";

function Faq() {
    return (
        <section id="faq">
            <h1>Často kladené otázky</h1>
            <FaqBlock question="Kolik stojí diagnostika závady?">
                Diagnostika závady je zdarma v případě, že je diagnostikované
                zařízení opravováno u nás.
            </FaqBlock>
            <FaqBlock question="Používáte originální díly?">
                Snažím se u co nejvíce oprav používat originální díly, bohužel u
                některých značek je buďto obtížné získat originální díly, nebo
                použití originálního dílu (například displej u iPhonů) omezuje
                funkčnost některých funkcí (True Tone) a v těchto případech
                používám díly tzv. OEM kvality.
            </FaqBlock>
            <FaqBlock question="Jaký je rozdíl mezi originálním dílem a OEM?">
                OEM (Original Equipment Manufacturer) kvalita označuje díly,
                které byly vyrobeny subdodavatelem výrobce pomocí stejných
                postupů a materiálů.
            </FaqBlock>
            <FaqBlock question="Mám rozbitý displej a chci OEM díl, co to v praxi znamená?">
                Cena je obvykle nižší než u originálních dílů, které jsou
                dodávány přímo výrobcem zařízení. Obě kvality jsou téměř
                nerozpoznatelné s marginálním rozdílem v kontrastu a jasu.
            </FaqBlock>
            <FaqBlock question="Provádíte expresní opravy na počkání?">
                Ano, podle vytížení a náročnosti požadované oprav. Expresní
                opravy jsou za příplatek.
            </FaqBlock>
            <FaqBlock question="Utopil/a jsem telefon, co dál? Mám to dát vysušit do rýže?">
                V žádném případě, tohle je mýtus. Pokud telefon disponuje
                odnímatelnou baterií, ihned ji vyjměte. Připojená baterie pouze
                urychlí proces oxidace obvodů. Telefon ihned doneste do servisu.
            </FaqBlock>
            <FaqBlock question="Jak doložím záruku na opravu?">
                Pomocí servisního protokolu, na kterém máte uvedené číslo
                opravy. Získáte jak fyzickou kopii při dokončení zakázky tak
                digitální na Váš e-mail
            </FaqBlock>
        </section>
    );
}

export default Faq;
