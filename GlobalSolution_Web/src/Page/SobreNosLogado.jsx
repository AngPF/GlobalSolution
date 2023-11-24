import React from 'react';
import Header from '../components/HeaderLogado';
import Footer from '../components/Footer';
import '../Style/SobreNos.css'
import Slider from "react-slick";
import CardSquad from "../components/CardTime";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SobreNos() {

  const participants = [
    {
      name: "Gabrielle da Silva Stanguini",
      rm: "98786",
      role: "Desenvolvedora",
      imgSrc: "https://avatars.githubusercontent.com/u/125506327?v=4",
      social: {
        github: "https://github.com/gabi1482",
        linkedin: "https://www.linkedin.com/in/gabrielle-da-silva-stanguini-41b202265/",
      },
    },

    {
      name: "Angelo Augusto P. Fonseca",
      rm: "98310",
      role: "Desenvolvedor",
      imgSrc: "https://avatars.githubusercontent.com/u/129402181?v=4",
      social: {
        github: "https://github.com/AngPF",
        linkedin: "https://www.linkedin.com/in/angelo-fonseca/",
      },
    },

    {
      name: "Maria Fernanda Ribeiro Mello",
      rm: "98818",
      role: "Desenvolvedora",
      imgSrc: "https://avatars.githubusercontent.com/u/106833193?v=4",
      social: {
        github: "https://github.com/mnandamello",
        linkedin: "https://www.linkedin.com/in/maria-fernanda-b31526243/",
      },
    },

    {
      name: "Nicolas Reis",
      rm: "98819",
      role: "Desenvolvedor",
      imgSrc: "https://avatars.githubusercontent.com/u/106833483?v=4",
      social: {
        github: "https://github.com/Nreis280",
        linkedin: "https://www.linkedin.com/in/nicolas-reis-441167248/",
      },
    },

    {
      name: "Alberto Rubinho Peruchi",
      rm: "99706",
      role: "Desenvolvedor",
      imgSrc:
        "https://avatars.githubusercontent.com/u/116128604?v=4",
      social: {
        github: "https://github.com/AlbertoRP11",
        linkedin: "https://www.linkedin.com/in/alberto-rp/",
      },
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Número de slides visíveis por vez
    slidesToScroll: 1,
  };

  return (
    <div>
      <Header />
      <div className='sobrenos-meio'>
        <div className="propsCards">
          <Slider {...settings}>
            {participants.map((member, index) => (
              <CardSquad key={index} {...member} />
            ))}
          </Slider>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SobreNos;