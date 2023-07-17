import { Link } from "react-router-dom";
import { navigation } from "../../data/Navigation";

type Props = { dividerSymbol: string; currPath: string };

function Breadcrumbs({ dividerSymbol, currPath }: Props) {
    let pathSlices: string[] = ["/"];

    currPath.split("/").forEach((slice, index) => {
        if (index > 0) {
            if (index === 1) {
                pathSlices.push("/" + slice);
            } else {
                pathSlices.push(pathSlices[index - 1] + "/" + slice);
            }
        }
    });

    return (
        <div
            className={`${
                currPath === "/" ? "hidden" : ""
            } border-2 border-red-200 flex mt-2 py-2 px-3 bg-red-100 rounded-md`}
        >
            {pathSlices.map((path, index) =>
                navigation.map(
                    (item) =>
                        path === item.href &&
                        (index !== pathSlices.length - 1 ? (
                            <div className="text-slate-800 flex">
                                <Link to={item.href}>
                                    <p className="italic hover:text-brand-main duration-500">
                                        {item.name}
                                    </p>
                                </Link>
                                <p className="px-4">{dividerSymbol}</p>
                            </div>
                        ) : (
                            <p>{item.name}</p>
                        ))
                )
            )}
        </div>
    );
}

export default Breadcrumbs;
