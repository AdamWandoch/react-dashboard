import React from 'react';
import './home-style.css';
import { generateParagraphs } from '../../helpers/generateParagraphs';

const paragraphs = generateParagraphs(3);

export const Home = () => {
  return (
    <main>
      {paragraphs.map((p, index) => {
        console.log(index);
        return <p key={index}>{p}</p>;
      })}
    </main>
  );
};
