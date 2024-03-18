import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#2e2e2e",
  boxShadow: 24,
  p: 2,
};

export default function BasicModal({addShortCut,  open, handleClose }) {
   
    const [shortCut, setshortCut] = useState({
        id: "",
        name: "",
        url: "",
      });
    
      const handleDone = (e) => {
        e.preventDefault();
        const newShortcut = { ...shortCut, id: uuidv4() }; // Generate id before adding shortcut
        addShortCut(newShortcut);
        handleClose();
      };

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="space-y-3 shadow-xl rounded-md">
          <h1 className="text-white">Add shortcut</h1>
          <form onSubmit={handleDone} action="" className="space-y-2 flex flex-col">
            <label className="text-xs text-white" htmlFor="">
              Name
            </label>
            <input
              onChange={(e) => setshortCut({...shortCut, name: e.target.value})}
              className="transition duration-150 ease-out focus:ease-in border-b-2 border-[#94716f] focus:border-[#f5a39d] focus:border-b-2 rounded-[10px_10px_0px_0px] bg-[#5e4b4a] text-white outline-0 p-2"
              type="text"
              name=""
              id=""
            />{" "}
            <br />
            <label className="text-xs text-white" htmlFor="">
              URL
            </label>
            <input
              onChange={(e) => setshortCut({...shortCut, url: e.target.value})}
              className="transition duration-150 ease-out focus:ease-in border-b-2 border-[#94716f] focus:border-[#f5a39d] focus:border-b-2 rounded-[10px_10px_0px_0px] bg-[#5e4b4a] text-white outline-0 p-2"
              type="text"
              name=""
              id=""
            />
            <div className="flex justify-end space-x-3 py-5">
              <button
                onClick={handleClose}
                className="text-sm px-3 py-2 rounded-2xl text-[#f5a39d] border border-[#f5a39d]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="text-sm px-3 py-2 rounded-2xl text-[#f5a39d] border border-[#f5a39d]"
              >
                Done
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
