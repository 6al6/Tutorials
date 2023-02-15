const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.query.name);
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.render("users/new");
});

router.post("/", (req, res) => {
  const isValid = true;
  if (isValid) {
    users.push({ firstName: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("Error");
    res.render("users/new", { firstName: req.body.firstName });
  }
  console.log(req.body.firstName);
  res.send("Hi");
});

//------------------------------------

router.get("/:id", (req, res) => {
  console.log(req.user);
  res.send(`Get user with id ${req.params.id}`);
});

router.put("/:id", (req, res) => {
  res.send(`Update user with id ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.send(`Delete user with id ${req.params.id}`);
});

//------------------------------------

//Join all 3 together in one expression:

/*
router
  .route("/id")
  .get((req, res) => {
    res.send(`Get user with id ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update user with id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Update user with id ${req.params.id}`);
  });*/

const users = [{ name: "Kyle" }, { name: "Sally" }];

router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

module.exports = router;
