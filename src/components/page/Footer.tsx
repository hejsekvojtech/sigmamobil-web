import { Link } from "react-router-dom";
import Logo from "../../resources/sigmamobil-logo-white.png";
import { navigation } from "../../data/Navigation";
import ContactInfo from "../../data/ContactInfo.json";
import {
    MapPinIcon,
    PhoneIcon,
    EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { formatPhoneNumber } from "../../utils/TextTools";

function Footer() {
    return (
        <div id="#footer" className="bg-zinc-800 text-zinc-200">
            <div className="flex flex-col">
                <div
                    id="footer"
                    className="flex flex-col container p-6 sm:flex-row justify-between"
                >
                    <div>
                        <h3>Navigace</h3>

                        <ul>
                            {navigation.map(
                                (item) =>
                                    item.hidden === false && (
                                        <li key={item.key}>
                                            <Link to={item.href}>
                                                {item.name}
                                            </Link>
                                        </li>
                                    )
                            )}
                        </ul>
                    </div>
                    <div className="my-6 self-center">
                        <img
                            className="h-12 md:h-14"
                            src={Logo}
                            alt="Footer Logo"
                        />
                    </div>
                    <div>
                        <h3>Kontakt</h3>
                        <span>
                            <PhoneIcon />
                            <a href={`tel:${ContactInfo.phone_number}`}>
                                +{formatPhoneNumber(ContactInfo.phone_number)}
                            </a>
                        </span>
                        <span>
                            <EnvelopeIcon />
                            <a href={`mailto:${ContactInfo.email}`}>
                                {ContactInfo.email}
                            </a>
                        </span>
                        <span>
                            <MapPinIcon />
                            <div className="ml-2">
                                <p>{ContactInfo.address_street}</p>
                                <p>{ContactInfo.address_city}</p>
                            </div>
                        </span>
                    </div>
                </div>
                <div className="p-6 bg-zinc-900 text-center font-bold">
                    <div className="flex flex-col md:flex-row justify-between container">
                        <p>© SIGMA MOBIL {new Date().getFullYear()}</p>
                        <p>Based in Tanvald, Czech Republic 🇨🇿</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
