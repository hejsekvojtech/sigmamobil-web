import SamsungLogo from "../resources/logo-samsung.png";
import XiaomiLogo from "../resources/logo-xiaomi.png";
import OneplusLogo from "../resources/logo-oneplus.png";
import AppleLogo from "../resources/logo-apple.png";
import HuaweiLogo from "../resources/logo-huawei.png";
import LenovoLogo from "../resources/logo-lenovo.png";
import PixelLogo from "../resources/logo-pixel.png";
import BannerImage from "../resources/dan-cristian-padure-pHw08h_EvO4-unsplash.jpg";
import Badge from "../components/badges/Badge";
import {
    DevicePhoneMobileIcon,
    BoltSlashIcon,
    Battery50Icon,
    ClockIcon,
    CurrencyDollarIcon,
    ClipboardDocumentCheckIcon,
    ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { PhoneArrowUpRightIcon } from "@heroicons/react/24/solid";
import ContactForm from "../components/forms/ContactForm";
import ComponentCard from "../components/cards/ComponentCard";
import ContactInfo from "../data/ContactInfo.json";

const Home = () => {
    return (
        <div className="flex flex-col">
            <div className="bg-cover bg-center w-full h-72 md:h-96 relative flex items-center justify-center">
                <img
                    className="w-full h-full object-cover absolute"
                    src={BannerImage}
                    alt="Banner"
                />

                <div className="absolute inset-0 bg-red-50 bg-opacity-80 backdrop-blur-sm" />

                <div className="absolute container justify-between px-4 flex flex-col md:flex-row space-y-5 md:space-y-0">
                    <div className="flex justify-center max-w-screen-sm items-center">
                        <h1 className="drop-shadow-lg m-0 ">
                            Provádím pozáruční servis mobilních telefonů
                        </h1>
                    </div>

                    <div className="flex justify-center items-center">
                        <div>
                            <div className="hidden md:block drop-shadow-lg font-bold text-brand-main mb-4 text-lg md:text-xl">
                                <p>{ContactInfo.address_street}</p>
                                <p>{ContactInfo.address_city}</p>
                            </div>
                            <button>
                                <span>
                                    <PhoneArrowUpRightIcon className="h-6 w-6" />
                                    <a href={`tel:${ContactInfo.phone_number}`}>
                                        OBJEDNAT SERVIS
                                    </a>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <h1>Co opravuji?</h1>
                <p>
                    Opravuji telefony od většiny výrobců, nejčastěji však
                    produkty od Apple, Samsungu, Xiaomi a Huawei
                </p>
                <p>
                    Máte zájem? Skvělé, budu rád, když mne kontaktujete ať už
                    telefonicky nebo mailem přes formulář 🙂 diagnostika je
                    nezávazná a zdarma
                </p>
            </section>
            <section>
                <div
                    id="brand-carousel"
                    className="flex md:my-6 my-3 flex-wrap justify-center"
                >
                    <img src={XiaomiLogo} alt="Xiaomi Logo" />
                    <img src={AppleLogo} alt="Apple Logo" />
                    <img src={HuaweiLogo} alt="Huawei Logo" />
                    <img src={OneplusLogo} alt="OnePlus Logo" />
                    <img src={SamsungLogo} alt="Samsung Logo" />
                    <img src={LenovoLogo} alt="Lenovo Logo" />
                    <img src={PixelLogo} alt="Google Pixel Logo" />
                </div>
            </section>
            <section>
                <h1>Proč zvolit SIGMA MOBIL?</h1>
                <p>
                    Místo toho, aby zdálnivě nefunkční zařízení skončilo na
                    skládce nebo zastrčené někde v šuplíku, ho můžete přinést do
                    opravny, což pomůže prodloužít životnost zařízení a ulevíte
                    tak přírodě.
                </p>
                <p>
                    Mám za sebou několik desítek oprav od těch jednoduších po ty
                    náročnější, které vyžadují preciznost a pečlivost.
                </p>
                <p>
                    Zaručuji vám, že váš telefon bude u nás v dobrých rukou.
                    Nabízím nejen přijatelné ceny, ale také používám vysoce
                    kvalitní náhradní díly a nástroje.
                </p>
            </section>
            <section>
                <p className="self-center italic text-2xl my-10 text-slate-600 text-center md:max-w-xl">
                    Jsem malý servis ale práci provádím čistě a efektivně, mou
                    prioritou je spokojenost zákazníka a prodloužení životnosti
                    zařízení.
                </p>
            </section>
            <section>
                <div className="flex uppercase flex-wrap justify-center">
                    <Badge heading="Rychlost" icon={<ClockIcon />}>
                        Bez telefonu dlouho nebudete, zvládnu to i do jednoho
                        dne
                    </Badge>
                    <Badge
                        heading="Kvalita"
                        icon={<ClipboardDocumentCheckIcon />}
                    >
                        Díly získávám od prověřených dodavatelů
                    </Badge>
                    <Badge heading="Cena" icon={<CurrencyDollarIcon />}>
                        Skvělá cena za profesionální servis
                    </Badge>
                    <Badge heading="Záruka" icon={<ShieldCheckIcon />}>
                        Na práci poskytuji záruku 3 měsíce, na díly 2 roky
                    </Badge>
                </div>
            </section>
            <section>
                <h1>Nejčastěji opravované</h1>
                <p>
                    Nejčastěji vyměňovanými nebo opravovanými součástmi telefonu
                    jsou obrazovka, baterie a nabíjecí port. Obrazovka je
                    nejkřehčí částí telefonu a je náchylná k prasknutí nebo
                    rozbití při pádu telefonu.
                </p>
                <p>
                    Nabíjecí port je další často opravovanou součástí, protože
                    se může časem uvolnit nebo poškodit častým používáním. Bez
                    funkčního nabíjecího portu nelze telefon nabíjet, a proto se
                    stává nepoužitelným.
                </p>
            </section>
            <section>
                <div className="self-center max-w-screen-lg grid grid-flow-row sm:grid-cols-3 gap-4">
                    <ComponentCard
                        heading="Displej"
                        icon={<DevicePhoneMobileIcon />}
                    >
                        Obvykle prasklý displej. Buďto jen sklo, nebo i panel
                        samotný. Většinou bývá nejdražší komponent na
                        výměnu/opravu
                    </ComponentCard>
                    <ComponentCard heading="Baterie" icon={<Battery50Icon />}>
                        Baterie přirozeně podléhá degradaci. Přehřívání,
                        předčasné vypínání zařízení a časté nabíjení jsou běžné
                        symptomy
                    </ComponentCard>
                    <ComponentCard
                        heading="Nabíjecí konektor"
                        icon={<BoltSlashIcon />}
                    >
                        Opotřebovaný konektor nemusí zrovna nejlíp udržovat
                        kontakt při nabíjení. To může mít za následek
                        přerušované nabíjení
                    </ComponentCard>
                </div>
            </section>
            <section>
                <h1>Objednat opravu E-mailem</h1>
                <p>
                    U objednaných zakázek lze opravy provést co nejrychleji,
                    jelikož můžu dostupnost požadovaných dílů ověřit a chybějící
                    díly okamžitě přiobjednat.
                </p>
                <p>Navíc budete hned vědět, kolik Vás oprava bude stát</p>
                <div className="flex justify-center">
                    <ContactForm />
                </div>
            </section>
        </div>
    );
};

export default Home;
