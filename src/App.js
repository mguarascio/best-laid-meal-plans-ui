import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PinResults from './PinResults';
import Calendar from './Calendar';


var PINS = [
    {
        "id": "272749321163171462",
        "url": "https://www.pinterest.com/pin/272749321163171462/",
        "note": "Rebecca Katz, author of the new cookbook Clean Soups: Simple, Nourishing Recipes for Health and Vitality (Ten Speed Press), half-jokingly calls herself a “soup shaman.” She’s certainly an evangelist for the healing powers of a delicious bowl of hot soup. “I came by my love of soup-making honestly. It’s in my blood,” says Katz, who [...]",
        "image": "https://s-media-cache-ak0.pinimg.com/originals/52/5b/e0/525be0b8b00a83ebb9b30715662fe0bf.jpg",
        "title": "Coconut Curry Soup with Ginger and Turmeric"
    },
    {
        "id": "272749321162903821",
        "url": "https://www.pinterest.com/pin/272749321162903821/",
        "note": "CHICKEN CABBAGE STIR FRY ... DO NOT LOSE THIS! Ingredients ~ 3 chicken breast halves ~1 teaspoon oil of your liking ~3 cups green cabbage, shredded ~1/2 cup diced red bell peppers ~ 1 tablespoon cornstarch ~1⁄2 teaspoon ground ginger ~1 teaspoon garlic powder ~1⁄2 cup water ~Soy sauce to taste Directions 1. Cut chicken breasts into strips. 2. Heat oil in a frying pan. 3. Add chicken strips and stir fry over medium-high heat, turning constantly until done. 4. Add cabbage and red peppers",
        "image": "https://s-media-cache-ak0.pinimg.com/originals/ab/be/42/abbe42c66e5f53f99614893cb335f339.jpg",
        "title": "Chicken Cabbage Stir Fry"
    },
    {
        "id": "272749321162903762",
        "url": "https://www.pinterest.com/pin/272749321162903762/",
        "note": "French Onion Chicken ingredients 3 tablespoons butter 2 pounds onions, sliced 2 cloves garlic, chopped 1 teaspoon thyme, chopped 2 tablespoons flour 2 cups beef broth or chicken broth 1 tablespoon olive oil 1 pound chicken breasts or thighs (optionally boneless and skinless) salt and pepper to taste 1 tablespoon balsamic vinegar 2 tablespoons Dijon mustard 1 cup gruyere, grated",
        "image": "https://s-media-cache-ak0.pinimg.com/originals/85/97/6b/85976b6ebfe38fc55430480b93d5ae5b.jpg",
        "title": "French Onion Chicken"
    },
    {
        "id": "272749321162903747",
        "url": "https://www.pinterest.com/pin/272749321162903747/",
        "note": "These slow cooker shredded beef tacos are summer slow cooking at its best! Pair it with your favorite toppings.",
        "image": "https://s-media-cache-ak0.pinimg.com/originals/4a/fd/7d/4afd7d1725671d79b5da70a34f1deef6.jpg",
        "title": "Slow Cooker Shredded Beef Tacos"
    },
    {
        "id": "272749321162903745",
        "url": "https://www.pinterest.com/pin/272749321162903745/",
        "note": "5 minutes of prep, and all day of stress-free slow cooking makes THE MOST tender, juicy shredded beef barbacoa for your tacos and salads!",
        "image": "https://s-media-cache-ak0.pinimg.com/originals/e7/0a/db/e70adb15296263031bf287c7ccffc3e9.jpg",
        "title": "Slow Cooker Barbacoa"
    }
    ];

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <PinResults pins={PINS}/>
                </div>
                <div className="col-sm-9">
                    <Calendar/>
                </div>
            </div>
        </div>
      </div>


    );
  }
}

export default App;
