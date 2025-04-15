const express = require("express");
const { google } = require("googleapis");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const credentials = JSON.parse(fs.readFileSync(""));

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

const SPREADSHEET_ID = "1jAuwsKSVDEZsPMwFXHbW4qoumn4p6AFRQRLmn42awnU"; // Replace with your spreadsheet ID
// The ID can be found in the URL of your Google Sheet, between "/d/" and "/edit"
const SHEET_NAME = "Trial"; // Change this based on your sheet name

app.post("/submit", async (req, res) => {
  const { name, email, rollNumber, teamMembers } = req.body;

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:D`,
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      resource: {
        values: [[name, email, rollNumber, teamMembers]],
      },
    });

    res.json({ success: true, message: "Data added successfully!" });
  } catch (error) {
    console.error("Error adding data:", error);
    res.status(500).json({ success: false, message: "Error adding data" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
