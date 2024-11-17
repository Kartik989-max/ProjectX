"use client"
import { useOrganization, useUser } from "@clerk/nextjs";
import { BarLoader } from "react-spinners";

const UserLoader =() =>{
    const { isLoaded } = useOrganization();
    const { isLoaded: isUserLoaded } = useUser();

    if(!isLoaded || !isUserLoaded){
        return <BarLoader className="mb-4" width={"100%"} color="#36b7b7"/>
    }
    else{
        <></>
    }

}
export default UserLoader;