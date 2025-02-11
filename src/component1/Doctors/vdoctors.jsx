import React from "react";
import Doctor from "../../layout/doctors/doctor1";
import DoctorHead from "../../layout/heading/doctorhead";

function Vdoctors() {       // function to display the doctors page
    return(
        <div>
            <DoctorHead/>
            <br />
            <Doctor/>

        </div>
    )
}

export default Vdoctors;   // export the function Vdoctors