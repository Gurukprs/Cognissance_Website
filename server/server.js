const express = require("express");
const { google } = require("googleapis");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const credentials = JSON.parse(fs.readFileSync("./credentials.json"));

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

// Endpoint for corn Job
app.get('/ping', (req, res) => {
  res.status(200).send('OK');
});

// app.post("/submit", async (req, res) => {
//   const { spreadsheetId, sheetName, name, email, rollNumber, teamMembers } = req.body;

//   if (!spreadsheetId || !sheetName) {
//     return res.status(400).json({ success: false, message: "Missing spreadsheetId or sheetName" });
//   }

//   try {
//     await sheets.spreadsheets.values.append({
//       spreadsheetId,
//       range: `${sheetName}!A:D`,
//       valueInputOption: "RAW",
//       insertDataOption: "INSERT_ROWS",
//       resource: {
//         values: [[name, email, rollNumber, teamMembers]],
//       },
//     });

//     res.json({ success: true, message: "Data added successfully!" });
//   } catch (error) {
//     console.error("Error adding data:", {
//       message: error.message,
//       stack: error.stack,
//       responseData: error.response?.data,
//       responseStatus: error.response?.status,
//     });
//     res.status(500).json({ success: false, message: "Error adding data" });
//   }
// });
app.post("/submit", async (req, res) => {
  const { spreadsheetId, sheetName, data } = req.body;

  if (!spreadsheetId || !sheetName || !Array.isArray(data)) {
    return res.status(400).json({ success: false, message: "Missing or invalid data" });
  }

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}`,
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      resource: {
        values: [data], // single row of data
      },
    });

    res.json({ success: true, message: "Data added successfully!" });
  } catch (error) {
    console.error("Error adding data:", {
      message: error.message,
      stack: error.stack,
      responseData: error.response?.data,
      responseStatus: error.response?.status,
    });
    res.status(500).json({ success: false, message: "Error adding data" });
  }
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
