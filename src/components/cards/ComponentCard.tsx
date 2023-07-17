import CommonProps from "../../interfaces/CommonProps";
import CircleIcon from "../badges/CircleIcon";
import Card from "./Card";

function ComponentCard({ heading, icon, children }: CommonProps) {
    return (
        <Card>
            <CircleIcon icon={icon} />
            <h1>{heading}</h1>
            <p>{children}</p>
        </Card>
    );
}

export default ComponentCard;
