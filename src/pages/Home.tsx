import googleLogo from "../assets/logo.webp";
import Services from "../components/Services";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
// import { v4 as uuidv4 } from 'uuid';
import BasicModal from "../components/Modal";
import ClearIcon from "@mui/icons-material/Clear";
import Search from "../components/Search";

const Home = () => {
  const [saveWebsite, setSaveWebsite] = useState([]);

  const addShortCut = (shortCut) => {
    setSaveWebsite((prev) => {
      return [...prev, shortCut];
    });
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  const removeShortcut = (id) => {
    setSaveWebsite(saveWebsite.filter((item) => item.id !== id));
    setShowAdd(false);
  };

  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    if (saveWebsite.length === 10) {
      setShowAdd(true);
    }
  }, [saveWebsite]);


  return (
    <div className="w-full h-screen bg-[url('https://picsum.photos/1500/800?random=2')] bg-[length:100%_100%] bg-no-repeat">
      <Services />
      <div className=" h-[80%] flex justify-center items-center">
        <div className="w-[600px] text-center p-5 ">
          <div className="w-full flex justify-center">
            <img className="w-[350px]" src={googleLogo} alt="Google Logo" />
          </div>
          <Search/>
          <div className="grid grid-cols-5 py-10 ">
            {saveWebsite.slice(0, 10).map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className="relative hover:bg-white hover:bg-opacity-30 rounded-md p-5"
              >
                <button
                  onClick={() => removeShortcut(item.id)}
                  className={`absolute top-0 right-0 text-white px-2 py-1 rounded-full ${
                    hoveredIndex === index ? "" : "hidden"
                  }`}
                >
                  <ClearIcon fontSize="small" />
                </button>
                <img
                  className="bg-blue-800 mx-auto rounded-3xl p-2 w-12"
                  src={item.url}
                  alt={item.name}
                />
                <p className="text-center text-white">{item.name}</p>
              </div>
            ))}
            {
              !showAdd && (
                <div
              onClick={handleOpen}
              className="relative hover:bg-white hover:bg-opacity-30 rounded-md p-5"
            >
              <AddIcon
                style={{ fontSize: "2.7rem", color: "white" }}
                className="bg-blue-800 mx-auto rounded-3xl p-2 text-white"
              />
              <p className="text-center text-white">Add shortcut</p>
            </div>
              )
            }
          </div>
        </div>
        <BasicModal
          addShortCut={addShortCut}
          open={open}
          handleClose={handleClose}
        />
      </div>
    </div>
  );
};

export default Home;
