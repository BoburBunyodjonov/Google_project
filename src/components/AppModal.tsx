import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { useState } from 'react';

const style = {
  position: 'absolute' as 'absolute',
  top: '10%',
  right: '0%',
  bgcolor: 'black',
  boxShadow: 24,
  p: 3,
};

export default function AppModal({setOpen, open}) {

  

interface AppType {
  logo: string;
  name: string;
}

const appArray: AppType[] = [
  { 
    logo: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png',
    name: "Search" 
  },
  { 
    logo: 'https://blog.gisplanning.com/hs-fs/hubfs/GoogleMaps-Icon-alone-1.png?width=600&name=GoogleMaps-Icon-alone-1.png',
    name: "Maps" 
  },
  { 
    logo: 'https://helios-i.mashable.com/imagery/articles/04EZglaVzAW19V6FIiDD3TA/images-2.fit_lim.size_376x.png',
    name: "Search" 
  },
  { 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Google_News_icon.svg/2503px-Google_News_icon.svg.png',
    name: "News" 
  },
];
  


  
  const handleClose = () => setOpen(false);


  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} className="border  rounded-xl grid gap-3 grid-cols-3">
          {appArray.map((item, index) => (
              <div key={index} className='relative hover:bg-white hover:bg-opacity-15 rounded-lg p-5 flex flex-col justify-center items-center '>
                <img className='w-12' src={item.logo} alt={item.name} />
                <p className='text-sm text-white'>{item.name}</p>
              </div>
            ))}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
