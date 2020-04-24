module.exports = (app, allModels) => {
  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR POKEMON CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  const pokemonControllerCallbacks = require("./controllers/pokemon")(
    allModels
  );

  app.get("/pokemons", pokemonControllerCallbacks.index);
  //app.get('/pokemons/:id', pokemons.getPokemon);

  //=========================================
  //        Sign Up page
  //=========================================

  const signUpPage = require("./controllers/signUpPage.js")(allModels);
  app.get("/signup", signUpPage.signUpPageForm);

  //=========================================
  //        After signing up
  //=========================================

  const signUpVerificationPage = require("./controllers/signUpVerification.js")(
    allModels
  );
  app.post("./signUpVerification", signUpVerificationPage.signUpVerified);

  //=========================================
  //        route for log in page
  //=========================================

  const userLoginForm = require("./controllers/login.js")(allModels);
  app.get("/login", userLoginForm.loginForm);

  //=========================================
  //      route for new tweet (post)
  //=========================================
  const newTweetPage = require("./controllers/newtweet.js")(allModels);
  app.post("/newtweet", newTweetPage.newTweetCallback);
};
