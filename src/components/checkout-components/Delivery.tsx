import React from "react";
import { useForm } from "react-hook-form";
import { Radio } from "@blueprintjs/core"




export default function deliveryMethod() {

    return (
        <div>

            <Radio label="PostNord" value="one" defaultChecked={true} />
            <Radio label="DHL" value="two" />
            <Radio label="Express" value="three" />
            what is this

        </div>
    );
}
