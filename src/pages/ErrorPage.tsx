import { Link } from "react-router-dom";

type Props = {
    origin: string;
};

function ErrorPage({ origin }: Props) {
    return (
        <section>
            <div className="text-center text-brand-secondary my-20">
                <p className="text-9xl font-bold mb-8">404</p>
                <div className="md:text-3xl text-2xl">
                    <p className="mb-2">
                        Tady nic není, asi jsme zabloudili 🤷‍♂️
                    </p>
                    <p>
                        <b>{origin}</b> není platný odkaz
                    </p>
                </div>
                <button className="mt-10">
                    <Link to="/">Na hlavní stránku</Link>
                </button>
            </div>
        </section>
    );
}

export default ErrorPage;
