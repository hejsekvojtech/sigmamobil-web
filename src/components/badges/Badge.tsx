import CommonProps from "../../interfaces/CommonProps";
import CircleIcon from "./CircleIcon";

function Badge({ heading, icon, children }: CommonProps) {
    return (
        <div id="card-content" className="w-56 flex-col text-center mx-2 my-4">
            <CircleIcon icon={icon} />
            <h1>{heading}</h1>
            <p>{children}</p>
        </div>
    );
}

export default Badge;
