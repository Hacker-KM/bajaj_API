const express = require("express");
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(cors());

app
  .route("/bfhl")
  .get((req, res) => {
    res.status(200).json({ operation_code: 1 });
  })
  .post((req, res) => {
    const data = req.body.data || [];
    const numbers = [];
    const alphabets = [];
    let highest_lowercase_alphabet = "";

    for (const item of data) {
      if (!isNaN(item)) {
        numbers.push(item);
      } else if (item.length === 1 && isNaN(item)) {
        alphabets.push(item);
        if (item >= "a" && item <= "z") {
          if (
            !highest_lowercase_alphabet ||
            item>highest_lowercase_alphabet
          ) {
            highest_lowercase_alphabet = item;
          }
        }
      }
    }

    res.json({
      is_success: true,
      user_id: "kartik_mishra_03062003",
      email: "kartik.mishra2021@vitbhopal.ac.in",
      roll_number: "21BSA10006",
      numbers: numbers,
      alphabets: alphabets,
      highest_lowercase_alphabet: highest_lowercase_alphabet
        ? [highest_lowercase_alphabet]
        : [],
    });
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
