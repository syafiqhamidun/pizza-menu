/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import './App.css'
import React from 'react';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


function App() {

  return (
    <>
      <div>
        <Header/>
        <Menu/>
        <Footer/>
      </div>
    </>
  )
}

function Header() {
  const style = {
    color: 'red',
    fontSize: '48px',
    textTransform: 'uppercase'
  };

  return(
    <h1 style={style}>
      Fast React Pizza Co.
    </h1>
  )
}
function Menu() {
  return(
    <div>
      <h2> Our Menu</h2>
      <Pizza/>
      <Pizza/>
      <Pizza/>
    </div>
  )
}
function Footer() {

  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen)

  // if (hour >= openHour && hour <= closeHour) {
  //   alert(`We're currently Open`)
  // } else {
  //   alert(`We're close for Today`)
  // }

  return (
    <footer>{new Date().toLocaleTimeString()}  We're Currently Open</footer>
  )
}

function Pizza() {
  return(
    <div>
      <img src="pizzas/spinaci.jpg" alt='Pizza Spinaci'/>
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, spinach</p>
    </div>
  )
}



export default App
