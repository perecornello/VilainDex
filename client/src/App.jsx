import { useState } from "react";
import VilainCard from "./components/VilainCard";


const VilainList = [
  {
    name: "Dio Brando",
    imgSrc:
      "src/assets/images/860814-photo-u463545376.jpeg",
  },
  {
      name: "Gaara",
      imgSrc:
        "src/assets/images/1037677-photo-u-1097812139.jpeg",
  },
  {
      name: "Light yagami",
      imgSrc:
        "src/assets/images/10697446-photo-u-1206602531.jpeg",
    },
    {
      name: "Madara Uchiwa",
      imgSrc:
        "src/assets/images/16306156-photo-u47.jpeg",
    },
    {
      name: "Kaido",
      imgSrc:
        "src/assets/images/85371968-photo-u-251465505.jpeg",
    },
    {
      name: "Makima",
      imgSrc:
        "src/assets/images/87454765-photo-u-1712664759.jpeg",
    },
    {
      name: "Ryomen Sukuna",
      imgSrc:
        "src/assets/images/87455200-photo-u2079861717.jpeg",
    },
    {
      name: "All for One",
      imgSrc:
        "src/assets/images/all-for-one-u1.jpeg",
    },
    {
      name: "Father",
      imgSrc:
        "src/assets/images/father-photo-u1.jpeg",
    },
    {
      name: "Freezer",
      imgSrc:
        "src/assets/images/freeza-film-characters-photo-u1.jpeg",
    },
    {
      name: "Griffith",
      imgSrc:
        "src/assets/images/griffith-photo-1.jpeg",
    },
    {
      name: "Johan Liebert",
      imgSrc:
        "src/assets/images/johan-liebert-u-1642231665.jpeg",
    },
    {
      name: "Kuroro Lucifer",
      imgSrc:
        "src/assets/images/kuroro-lucifer-u-1594702324.jpeg",
    },
    {
      name: "Mahito",
      imgSrc:
        "src/assets/images/mahito-u-1658406850.jpeg",
    },
    {
      name: "Muzan",
      imgSrc:
        "src/assets/images/muzan-kibutsuji-u648506364.jpeg",
    },
    {
      name: "Pain",
      imgSrc:
        "src/assets/images/pain-fictional-characters-photo-u1.jpeg",
    },
    {
      name: "Seto Kaiba",
      imgSrc:
        "src/assets/images/seto-kaiba-u6.jpeg",
    },     
    {
      name: "Stain",
      imgSrc:
        "src/assets/images/stain-u1.jpeg",
    },

];

function App() {
  const [vilainIndex, setvilainIndex] = useState(0);

  const pickPrevious = () => setvilainIndex(vilainIndex - 1);

  const pickNext = () => setvilainIndex(vilainIndex + 1);

  return (
    <div>
      <nav>
        {vilainIndex > 0 && (
          <button type="button" onClick={pickPrevious}>
            previous
          </button>
        )}
        {vilainIndex < VilainList.length - 1 && (
          <button type="button" onClick={pickNext}>
            next
          </button>
        )}
      </nav>
      <VilainCard vilain={VilainList[vilainIndex]} />
    </div>
  );
}

export default App;
