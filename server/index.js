const express = require("express");
const fs = require("fs").promises;
const path = require("path");
const cors = require("cors");

const app = express();
const port = 5000;
const dataFilePath = path.join(__dirname, "database", "data.json");

// Middleware
app.use(cors());
app.use(express.json());

// Helper function to read data.json
const readData = async () => {
  const rawData = await fs.readFile(dataFilePath, "utf-8");
  return JSON.parse(rawData);
};

// Helper function to write to data.json
const writeData = async (data) => {
  await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));
};

// Helper function to generate a numeric ID
const generateId = async () => {
  const data = await readData();
  const ids = data.planets.map((planet) => parseInt(planet.id)).filter((id) => !isNaN(id));
  const maxId = ids.length > 0 ? Math.max(...ids) : 0;
  return maxId + 1;
};

// GET /planets - Read all planets
app.get("/planets", async (req, res) => {
  try {
    const data = await readData();
    res.json(data.planets);
  } catch (error) {
    res.status(500).json({ error: "Failed to read planets" });
  }
});

// POST /planets - Create a new planet
app.post("/planets", async (req, res) => {
  try {
    const data = await readData();
    const newId = await generateId();
    const newPlanet = {
      id: newId,
      name: req.body.name,
      type: req.body.type,
      distance: parseFloat(req.body.distance) || 0,
      suitabilityId: parseInt(req.body.suitabilityId) || 0,
      note: req.body.note || "",
    };
    data.planets.push(newPlanet);
    await writeData(data);
    res.status(201).json(newPlanet);
  } catch (error) {
    res.status(500).json({ error: "Failed to create planet" });
  }
});

// PUT /planets/:id - Update a planet
app.put("/planets/:id", async (req, res) => {
  try {
    const data = await readData();
    const planetId = req.params.id;
    const updatedPlanet = {
      id: parseInt(planetId),
      name: req.body.name,
      type: req.body.type,
      distance: parseFloat(req.body.distance) || 0,
      suitabilityId: parseInt(req.body.suitabilityId) || 0,
      note: req.body.note || "",
    };
    data.planets = data.planets.map((planet) =>
      planet.id.toString() === planetId ? updatedPlanet : planet
    );
    await writeData(data);
    res.json(updatedPlanet);
  } catch (error) {
    res.status(500).json({ error: "Failed to update planet" });
  }
});

// DELETE /planets/:id - Delete a planet
app.delete("/planets/:id", async (req, res) => {
  try {
    const data = await readData();
    const planetId = req.params.id;
    data.planets = data.planets.filter((planet) => planet.id.toString() !== planetId);
    await writeData(data);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete planet" });
  }
});

// GET /suitabilities - Read all suitabilities
app.get("/suitabilities", async (req, res) => {
  try {
    const data = await readData();
    res.json(data.suitabilities);
  } catch (error) {
    res.status(500).json({ error: "Failed to read suitabilities" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});