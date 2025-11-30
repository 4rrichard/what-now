import React from "react";

function GameRequest({ value }) {
    return (
        <div className="flex content-start text-secondary text-lg mt-4">
            {value ? (
                <p>
                    You searched for: <strong>{value}</strong>
                </p>
            ) : null}
        </div>
    );
}

export default GameRequest;
