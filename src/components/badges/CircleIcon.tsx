import React from "react";
import CommonProps from "../../interfaces/CommonProps";

function CircleIcon({ icon }: CommonProps) {
    return (
        <div className="w-full flex justify-center">
            <div className="rounded-full bg-red-200 p-3">
                <div
                    id="icon"
                    className="text-red-500 h-16 w-16 md:h-20 md:w-20"
                >
                    {icon}
                </div>
            </div>
        </div>
    );
}

export default CircleIcon;
