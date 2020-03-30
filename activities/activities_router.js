const express = require("express");
const acts = require("./activities_model.js");

const router = express.Router();

router.get("/", (req, res) => {
  acts
    .get()
    .then(act => {
      res.status(200).json(act);
    })
    .catch(error => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the activities"
      });
    });
});

router.get("/:id", (req, res) => {
  acts
    .getById(req.params.id)
    .then(act => {
      if (act) {
        res.status(200).json(act);
      } else {
        res.status(404).json({ message: "activity not found" });
      }
    })
    .catch(error => {
      res.status(500).json({ errorMessage: "error" });
    });
});

router.post("/", (req, res) => {
  acts
    .insert(req.body)
    .then(act => {
      res.status(201).json(act);
    })
    .catch(error => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: "Error adding the activity"
      });
    });
});

router.put("/:id", (req, res) => {
  acts
    .update(req.params.id, req.body)
    .then(act => {
      if (act) {
        res.status(200).json(act);
      } else {
        res.status(404).json({ message: "the activity could not be found" });
      }
    })
    .catch(error => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: "Error updating the activity"
      });
    });
});

router.delete("/:id", (req, res) => {
  console.log(req.params.id);
  acts
    .remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: "activity has been deleted" });
      } else {
        res.status(404).json({ message: "activity could not be found" });
      }
    })
    .catch(error => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: "Error deleting the activity"
      });
    });
});

module.exports = router;
