import React from 'react'
import { Header, List } from '../Components/Pages/MainPage/index.js';

const arrayTodaysHits = [{
    artist: `Molongui!`,
    songTitle: "I rock!",
    album: "We are cool",
    year: "2023",
    producer: "Mololongui",
    genre: "pop",
    bgImage: "bg-[url('../../../../../../src/assets/images/testImages/test.jpg')]"
  },
  {
    artist: `Molongui!`,
    songTitle: "I rock!",
    album: "We are cool",
    year: "2023",
    producer: "Mololongui",
    genre: "pop",
    bgImage: "bg-[url('../../../../../../src/assets/images/testImages/test.jpg')]"
  },
  {
    artist: `Molongui!`,
    songTitle: "I rock!",
    album: "We are cool",
    year: "2023",
    producer: "Mololongui",
    genre: "pop",
    bgImage: "bg-[url('../../../../../../src/assets/images/testImages/test.jpg')]"
  },
  {
    artist: `Molongui!`,
    songTitle: "I rock!",
    album: "We are cool",
    year: "2023",
    producer: "Mololongui",
    genre: "pop",
    bgImage: "bg-[url('../../../../../../src/assets/images/testImages/test.jpg')]"
  },
   {
    artist: `Molongui!`,
    songTitle: "I rock!",
    album: "We are cool",
    year: "2023",
    producer: "Mololongui",
    genre: "pop",
    bgImage: "bg-[url('../../../../../../src/assets/images/testImages/test.jpg')]"
  },
  {
    artist: `Molongui!`,
    songTitle: "I rock!",
    album: "We are cool",
    year: "2023",
    producer: "Mololongui",
    genre: "pop",
    bgImage: "bg-[url('../../../../../../src/assets/images/testImages/test.jpg')]"
  }
  ,
  {
    artist: `Molongui!`,
    songTitle: "I rock!",
    album: "We are cool",
    year: "2023",
    producer: "Mololongui",
    genre: "pop",
    bgImage: "bg-[url('../../../../../../src/assets/images/testImages/test.jpg')]"
  }
  ]

  const arraySectionTitles = ["Today's hits", "Most popular", "Most listened in the UK", "Spanish music"]

export const MainPage = () => {
  return (
    <>
    <div className="z-0 fixed top-0 left-0 right-0 w-screen h-screen bg-gradient-to-b from-[#02040C] to-[#0A4148]">
    </div>
    <div className="z-2 relative w-screen min-h-screen">
        <div className="pt-[5rem] pl-[2rem] sm:pl-[4rem] md:pl-[6rem] lg:pl-[8rem]">
            <Header/>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-[2rem] pt-[4rem]">
            {arraySectionTitles.map((section)=>{
            return <List object={arrayTodaysHits} sectionTitle={section}/>
            })}
        </div>
    </div>
    </>
  )
}
