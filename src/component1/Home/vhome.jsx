import React from "react";
import Contentone from "../../layout/contents/contentones";
import ContentTwo from "../../layout/contents/contenttwos";
import Contentthree from "../../layout/contents/contentthrees";
import About from "../../layout/about/about1";
import Appointment from "../../layout/appointment/appointment1";
import Doctor from "../../layout/doctors/doctor1";
import HospitalBranches from "../../layout/branch/branch1";


function Vhome() {       // function to display the home page
    return(
        <div style={{marginTop:"-20px"}}>
            <Contentone/>
            <br />
            <ContentTwo/>
            <br />
            <Contentthree/>
            <br />
            <About/>
            <br />
            <Appointment/>
            <br />
            <Doctor/>
            <br />
            <HospitalBranches/>
        </div>
    )
}

export default Vhome;   // export the function Vhome