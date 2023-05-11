import { useState } from "react";
import { Typography, RoundButton, DropDownMenu } from "../../index";
import { FaPlay } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

export const AlbumElement = ({ object }) => {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const { name, thumbnailUrl, artist, _id } = object;

  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const handleOpenDropdown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsDropdownActive(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setIsDropdownActive(false);
  };
  const likedClicked = () => {
    console.log(clicked);
    if (!buttonDisabled) {
      setClicked(!clicked);

      setButtonDisabled(true);
      setTimeout(() => {
        console.log(clicked);
        setButtonDisabled(false);
      }, 1500);
    }
  };
  return (
    <div
      className="relative flex my-4 mx-2 shadow-md"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onContextMenu={handleOpenDropdown}
    >
      <div
        className={
          " bg-gradient-to-tl from-cyan-900 to-gray-900 rounded-[0.5rem] flex flex-col  place-content-between items-center p-2 w-full h-full select-none"
        }
      >
        <Link to={`/album/${_id}`} className="w-full mt-2 px-3">
          <Typography
            text={name}
            type="p1"
            color="white"
            family="lato"
            styles="max-w-[200px] sm:leading-6 line-clamp-2 text-ellipsis truncate"
          />
          <Typography
            text={artist?.fullName}
            type="p2"
            color="white"
            family="lato"
            styles="truncate"
          />
        </Link>
        <img
          src={thumbnailUrl}
          className="w-[4rem] h-[4rem] sm:w-[6rem] sm:h-[6rem] lg:w-[8rem] lg:h-[8rem]  bg-cover bg-center bg-no-repeat lg:min-h-[8rem] m-4 pointer-events-none object-cover"
        />
      </div>
      <div
        className="absolute bottom-2 left-2 cursor-pointer flex justify-center items-center m-3"
        onClick={likedClicked}
      >
        <Typography
          text={clicked ? <AiFillHeart /> : hovered ? <AiOutlineHeart /> : null}
          color={clicked ? "white" : "secondary"}
          styles="hidden xs:flex scale-[2]"
        />
      </div>
      <div
        className={`absolute -bottom-2 -right-2 w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-full
      ${hovered ? "flex animation-pop-glow" : "hidden"}`}
      >
        <RoundButton
          color="gray"
          background="gradient"
          icon={<FaPlay />}
          margin="pl-1"
        />
      </div>
      <div
        className={`${!isDropdownActive && "hidden"} absolute right-3 top-12`}
      >
        <DropDownMenu />
      </div>
    </div>
  );
};
