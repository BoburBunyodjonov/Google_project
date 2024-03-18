import { Link } from "react-router-dom"
import ScienceIcon from '@mui/icons-material/Science';
import AppsIcon from '@mui/icons-material/Apps';
import  AppModal  from "./AppModal";
import React from "react";

const Services = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);

    
  return (
    <>
        <div className="w-full py-5 flex justify-end items-center">
            <ul className=" space-x-2">
                <li className="cursor-pointer  text-white p-2 inline">
                 <Link className="hover:underline" to="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">Gmail</Link>
                </li>
                <li className="cursor-pointer  text-white p-2 inline">
                 <Link className="hover:underline" to="https://www.google.com/imghp?hl=en&tab=ri&ogbl">Images</Link>
                </li>
                <li className="cursor-pointer rounded-2xl  text-white p-2 inline">
                    <ScienceIcon/>
                </li>
                <li onClick={handleOpen}  className="cursor-pointer rounded-2xl  text-white p-2 inline">
                    <AppsIcon/>

                </li>
                <li className="cursor-pointer rounded-2xl  text-white p-2 inline">
                <img
                    src="https://docs.material-tailwind.com/img/face-2.jpg"
                    alt="avatar"
                    className="relative inline-block h-8 w-8 !rounded-full  object-cover object-center"
                />    
                </li>
            </ul>

        </div>
        <AppModal setOpen={setOpen} open={open} />

    </>
  )
}

export default Services
