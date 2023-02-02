import React from "react";
import Pagination from "./Pagination";
import ProblemList from "./ProblemsList";
const Landing = () => {
    return(
        <>
         <div class="justify-center">
            <ProblemList/>
         </div>
         <div>
            <Pagination
            nPages={3}
            currentPage={1}
            setCurrentPage={1}/>
         </div>
        </>
    );
}

export default Landing;