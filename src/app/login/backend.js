const express = require("express");
const XLSX = require("xlsx");
const app = express();
const port = 3001;

app.use(express.json());

// Path to your Excel file
const excelFilePath = "https://docs.google.com/spreadsheets/d/1qj0znpi2uNNFgmjRSYFhLFiOj3YH5lmtWV3DNFB0yIc/edit?usp=sharing";

// Read users data from Excel file
const getUsersData = () => {
  const workbook = XLSX.readFile(excelFilePath);
  const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
  const worksheet = workbook.Sheets[sheetName];
  const usersData = XLSX.utils.sheet_to_json(worksheet);
  return usersData;
};

// Write user data to Excel
const saveUserData = (user) => {
  const workbook = XLSX.readFile(excelFilePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const usersData = XLSX.utils.sheet_to_json(worksheet);
  usersData.push(user);
  const newWorksheet = XLSX.utils.json_to_sheet(usersData);
  workbook.Sheets[sheetName] = newWorksheet;
  XLSX.writeFile(workbook, excelFilePath);
};

// Login Endpoint
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const users = getUsersData();

  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    res.status(200).json({ message: "Login successful", user });
  } else {
    res.status(400).json({ message: "Invalid credentials" });
  }
});

// Signup Endpoint
app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  const users = getUsersData();

  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const newUser = { name, email, password };
  saveUserData(newUser);
  res.status(200).json({ message: "Signup successful", user: newUser });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
