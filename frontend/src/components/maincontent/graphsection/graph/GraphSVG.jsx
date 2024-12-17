import React from 'react';

const GraphSvg = (props) => {
    return (
        <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">

                {/*
                     115 - 158
                     200 - 274
                     210 - 288
                     110 - 151
                     10 - 14
                     105 - 144
                     20 - 27
                     43 - 59
                     100 - 137
                     76 - 104
                     143 - 196
                     176 - 241
                     120 - 164
                     181 - 248
                     148 - 203
                     81 - 111
                     48 - 66

                */}
                {/* X-Axis */}
                <line x1="14" y1="151" x2="288" y2="151" stroke="black" />
                <polygon points="288,151 274,144 274,158" />


                {/* Y-Axis */}
                <line x1="151" y1="14" x2="151" y2="288" stroke="black" />
                <polygon points="151,14 144,27 158,27" />

                {/* X-Axis coordinates */}
                <line x1="59" y1="144" x2="59" y2="158" stroke="black" />
                <text x={59 - (-props.rValue).toString().length * 3} y="137" fontSize="14">{-props.rValue}</text>

                <line x1="104" y1="144" x2="104" y2="158" stroke="black" />
                <text x={104 - (-props.rValue / 2).toString().length * 3} y="137" fontSize="14">{-props.rValue / 2}</text>

                <line x1="196" y1="144" x2="196" y2="158" stroke="black" />
                <text x={196 - (props.rValue / 2).toString().length * 3} y="137" fontSize="14">{props.rValue / 2}</text>

                <line x1="241" y1="144" x2="241" y2="158" stroke="black" />
                <text x={241 - props.rValue.toString().length * 3} y="137" fontSize="14">{props.rValue}</text>

                {/* Y-Axis coordinates */}
                <line x1="144" y1="241" x2="158" y2="241" stroke="black" />
                <text x="164" y="248" fontSize="14">{-props.rValue}</text>

                <line x1="144" y1="196" x2="158" y2="196" stroke="black" />
                <text x="164" y="203" fontSize="14">{-props.rValue / 2}</text>

                <line x1="144" y1="104" x2="158" y2="104" stroke="black" />
                <text x="164" y="111" fontSize="14">{props.rValue / 2}</text>

                <line x1="144" y1="59" x2="158" y2="59" stroke="black" />
                <text x="164" y="66" fontSize="14">{props.rValue}</text>


                <rect x="90" y="52" width="120" height="23" fill="#0000FF" fill-opacity="0.5"
                      stroke="#0000FF"></rect>


                <rect x="90" y="180" width="120" height="25" fill="#0000FF" fill-opacity="0.5"
                      stroke="#0000FF"></rect>
                <rect x="90" y="115" width="120" height="25" fill="#0000FF" fill-opacity="0.5"
                      stroke="#0000FF"></rect>

                <polygon fill="#0000FF" fill-opacity="1" points="185,75 90,180 115,180 210,75"
                         stroke="#0000FF"></polygon>
                <polygon fill="#0000FF" fill-opacity="0.5" points="90,115 115,115 155,75 130,75"
                         stroke="#0000FF"></polygon>
                <polygon fill="#0000FF" fill-opacity="0.5" points="210,140 185,140 150,180 175,180"
                         stroke="#0000FF"></polygon>

                <line stroke="white" stroke-width="3" stroke-opacity="0.7" x1="211" x2="116" y1="75"
                      y2="180"></line>

        </svg>

    );
}

export default GraphSvg;