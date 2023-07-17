import CommonProps from "../../interfaces/CommonProps";
import Card from "./Card";

function TitledCard({ title, children }: CommonProps) {
    return (
        <Card>
            <h1>{title}</h1>
            <p>{children}</p>
        </Card>
    );
}

export default TitledCard;
