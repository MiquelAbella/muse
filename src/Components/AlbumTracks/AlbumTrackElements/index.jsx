import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Typography, DropDownMenu } from "../../index";

import { TrackInfo } from "./TrackInfo";
import { BsThreeDots } from "react-icons/bs";

export const AlbumTrackElements = ({
  id,
  duration,
  nombre,
  artist,
  idx,
  activeDropdown,
  handleToggleDropdown,
  track,
}) => {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

   const dropdownItems = [
    {
      text: "Play Next",
      path: null,
    },
    {
      text: "Go to Artist",
      path: `/user`,
    },
  ];

  const hadleMouseOut = () => {
    setHovered(false);
    handleToggleDropdown(null);
  };

  return (
    <div
      className={`flex flex-row gap-3 sm:gap-5 items-center justify-between border-b-2 border-white/20 py-5 hover:bg-[#07333f] ${
        idx === 0 && "border-t-2"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={hadleMouseOut}
    >
      <TrackInfo
        hovered={hovered}
        id={id}
        nombre={nombre}
        artist={artist}
        duration={duration}
      />
      <div className="flex flex-row gap-2 sm:gap-10 pr-[6vw]">
        <div
          className="cursor-pointer flex justify-center items-center"
          onClick={() => (clicked ? setClicked(false) : setClicked(true))}
        >
          <Typography
            text={!clicked ? <AiOutlineHeart /> : <AiFillHeart />}
            color="white"
            styles="hidden xs:flex"
          />
        </div>
        <div
          className={`cursor-pointer mt-[0.4rem] ${
            hovered ? "visible" : "sm:invisible"
          }`}
        >
          <button
            onClick={() => handleToggleDropdown(id)}
            id="dropdownMenuIconHorizontalButton"
            className="inline-flex items-center text-sm font-medium text-center text-gray-900 rounded-lg focus:outline-none "
            type="button"
          >
            <Typography text={<BsThreeDots />} color="white" />
          </button>

          <DropDownMenu
            id={id}
            color="white"
            activeDropdown={activeDropdown}
            track={track}
            items={dropdownItems}
          />
        </div>
      </div>
    </div>
  );
};
