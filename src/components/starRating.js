import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Star from "./star";

// export default function StarRating() {
//     return [
//         <FaStar color="red" />,
//         <FaStar color="red" />,
//         <FaStar color="red" />,
//         <FaStar color="grey" />,
//         <FaStar color="grey" />
//     ];
// }

// const createArray = (length) => [...Array(length)];

// export default function StarRating({ totalStars = 5 }) {
//     return createArray(totalStars).map((n, i) => <Star selected="true" />);

// }


//const createArray = (length) => [...Array(length)];
//static color set
// export default function StarRating({ totalStars = 5, style }) {
//     return (<div style={style}>

//         {
//             createArray(totalStars).map((n, i) => <Star key={i} selected="true" />)
//         }

//     </div>)
// }

// //dynamic color set
// export default function StarRating({ totalStars=10, style }) {

//     const [selectStars, setSelectedStars] = useState(3);
//     return (<div style={{ padding: "10px", ...style }}>

//         {
//             createArray(totalStars).map((n, i) => <Star key={i} selected={selectStars > i} />)
//         }
//         <p>
//             {selectStars} of {totalStars}
//         </p>

//     </div>)
// }

// export default function StarRating({ totalStars = 5, style }) {

//     const [selectStars, setSelectedStars] = useState(3);
//     return (<div style={{ padding: "10px", ...style }}>

//         {
//             createArray(totalStars).map((n, i) => <Star key={i} selected={selectStars > i} onSelect={() => setSelectedStars(i + 1)} />)
//         }
//         <p>
//             {selectStars} of {totalStars}
//         </p>

//     </div>)
// }

const createArray = (length) => [...Array(length)];
// export default function StarRating({ totalStars, selectedStars }) {
//     const [selectStars, setSelectedStars] = useState(3);

//     return (<div style={{ padding: "20px" }}>

//         {
//             createArray(totalStars).map((n, i) => <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)} />)
//         }
//         <p>
//             {selectedStars} of {totalStars}
//         </p>
//     </div>

//     )

// }


export default function StarRating({ totalStars = 5, selectedStars = 0 }) {
    

    return (<>

        {
            createArray(totalStars).map((n, i) => <Star key={i} selected={selectedStars > i} />)
        }
        <p>
            {selectedStars} of {totalStars} stars
        </p>

    </>

    )

}


