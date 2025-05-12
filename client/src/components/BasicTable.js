import React, { useMemo, useState, useEffect } from "react";
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { COLUMNS } from "./columns";
import "./table.css";

export const BasicTable = () => {
  const [planets, setPlanets] = useState([]);
  const [suitabilities, setSuitabilities] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    type: "",
    distance: "",
    suitabilityId: "",
    note: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  // Fetch planets and suitabilities on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [planetsResponse, suitabilitiesResponse] = await Promise.all([
          fetch("http://localhost:5000/planets"),
          fetch("http://localhost:5000/suitabilities"),
        ]);
        const planetsData = await planetsResponse.json();
        const suitabilitiesData = await suitabilitiesResponse.json();
        setPlanets(planetsData);
        setSuitabilities(suitabilitiesData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, []);

  // Memoized columns
  const columns = useMemo(
    () => [
      ...COLUMNS.filter((col) => col.accessorKey !== "suitabilityId"),
      {
        id: "suitability",
        header: "Пригодность для жизни",
        accessorFn: (row) => {
          const suitability = suitabilities.find((s) => s.id === row.suitabilityId);
          return suitability ? suitability.name : row.suitabilityId || "Unknown";
        },
      },
      {
        id: "actions",
        header: "Действия",
        cell: ({ row }) => (
          <div className="d-column justify-content-center">
            <button className="btn btn-outline-secondary mb-1 w-100" onClick={() => handleEdit(row.original)} >Изменить</button>
            <button className="btn btn-outline-danger w-100" onClick={() => handleDelete(row.original.id)} >Удалить</button>
          </div>
        ),
      },
    ],
    [suitabilities]
  );

  // Memoized data
  const data = useMemo(() => planets, [planets]);

  // Table instance
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission (Create or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const planetData = {
      name: formData.name,
      type: formData.type,
      distance: parseFloat(formData.distance) || 0,
      suitabilityId: parseInt(formData.suitabilityId) || 0,
      note: formData.note,
    };

    try {
      if (isEditing) {
        // Update existing planet
        const response = await fetch(`http://localhost:5000/planets/${formData.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(planetData),
        });
        if (response.ok) {
          const updatedPlanet = await response.json();
          setPlanets((prev) =>
            prev.map((planet) => (planet.id.toString() === formData.id ? updatedPlanet : planet))
          );
        }
      } else {
        // Create new planet
        const response = await fetch("http://localhost:5000/planets", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(planetData),
        });
        if (response.ok) {
          const newPlanet = await response.json();
          setPlanets((prev) => [...prev, newPlanet]);
        }
      }
      // Reset form with defined values
      setFormData({
        id: "",
        name: "",
        type: "",
        distance: "",
        suitabilityId: "",
        note: "",
      });
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to save planet:", error);
    }
  };

  // Handle edit button click
  const handleEdit = (planet) => {
    // Ensure all fields are defined to prevent uncontrolled inputs
    setFormData({
      id: planet.id?.toString() || "",
      name: planet.name || "",
      type: planet.type || "",
      distance: (planet.distance ?? planet.distanceFromEarth ?? "").toString(),
      suitabilityId: planet.suitabilityId?.toString() || "",
      note: planet.note || "",
    });
    setIsEditing(true);
  };

  // Handle delete button click
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/planets/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        // Update state by filtering out the deleted planet
        setPlanets((prev) => {
          const updatedPlanets = prev.filter((planet) => planet.id.toString() !== id.toString());
          // console.log("Updated planets:", updatedPlanets); // Debug log
          return updatedPlanets;
        });
      } else {
        console.error("Delete request failed with status:", response.status);
      }
    } catch (error) {
      console.error("Failed to delete planet:", error);
    }
  };

  // Handle form reset/cancel
  const handleCancel = () => {
    // Reset form with defined values
    setFormData({
      id: "",
      name: "",
      type: "",
      distance: "",
      suitabilityId: "",
      note: "",
    });
    setIsEditing(false);
  };

  return (
    <div className="w-100 p-3">
      {/* Form for creating/editing planets */}
      <form onSubmit={handleSubmit} className="planet-form mb-4 mt-2 w-100 p-3" style={{backgroundColor: '#f2f2f2'}}>
        <h3>{isEditing ? "Отредактируйте данные о планете" : "Добавьте новую планету"}</h3>
        <div className="row g-3">
          {/* Left Column: Name, Type, Distance */}
          <div className="col-md-6">
            <div className="form-group mb-2">
              <label htmlFor="name">Название:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="form-control"
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="type">Тип:</label>
              <input
                type="text"
                id="type"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                required
                className="form-control"
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="distance">Расстояние до Земли (св. год):</label>
              <input
                type="number"
                id="distance"
                name="distance"
                value={formData.distance}
                onChange={handleInputChange}
                required
                className="form-control"
              />
            </div>
          </div>
          {/* Right Column: Note, Suitability */}
          <div className="col-md-6">
            <div className="form-group mb-2">
              <label htmlFor="note">Примечание:</label>
              <input
                type="text"
                id="note"
                name="note"
                value={formData.note}
                onChange={handleInputChange}
                required
                className="form-control"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="suitabilityId">Пригодность для жизни</label>
              <select
                id="suitabilityId"
                name="suitabilityId"
                value={formData.suitabilityId}
                onChange={handleInputChange}
                required
                className="form-control"
              >
                <option value="">Выберите из выпадающего списка</option>
                {suitabilities.map((suitability) => (
                  <option key={suitability.id} value={suitability.id}>
                    {suitability.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {/* Centered Buttons */}
        <div className="d-flex justify-content-center mt-3">
          <button type="submit" className="btn btn-success me-2">
            {isEditing ? "Изменить" : "Добавить"}
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleCancel}>
            Отмена
          </button>
        </div>
      </form>

      {/* Table */}
      <div className="table-responsive">
        <table className="w-100">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};