import React, { useState } from "react";
export default function Display(props) {
    return(
        <div class="cal-output">
            <div class="text" type="text" id="output-box" name="result">
                <a id="output">{props.value}</a>
            </div>
        </div>


    );
}


