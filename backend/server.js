const express = require("express");
const app = express();

const port = 3002

// Method:Get  to read
app.get("/", (req, res) => {
    res.send(" show my name is Stanley cool")
});

// Method:Get  to read single document
app.get("/:id", (req, res, ) => {
    res.send(" Show single name")
});

// Method:Post  to create 
app.post("/", (req, res) => {
    res.send("Create my name")
});

// Method:Get  to read single document
app.post("/:id", (req, res) => {
    res.send("Create single name")
});

// Method:Patch  to update 
app.patch("/", (req, res) => {
    res.send("Update name")
});

// Method:Patch  to update single document
app.patch("/:id", (req, res) => {
    res.send("Update single name")
});

// Method:Delete  to delete 
app.delete("/:id", (req, res) => {
    res.send("Name deleted")
});


app.listen(port, () => {
    console.log("server listening on port 3002!");
});