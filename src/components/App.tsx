import React, { useState } from "react";
import { getText, updateText } from "../utils/contractInteraction";
import toast, { Toaster } from "react-hot-toast";
import "../stiles.css";

export const App: React.FC = () => {
  const [currentText, setCurrentText] = useState("");
  const [newText, setNewText] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchText = async () => {
    setLoading(true);
    try {
      const text = await getText();
      setCurrentText(text);
      toast.success("Texto cargado exitosamente!");
    } catch (error: any) {
      const errorMessage = error.message || "Error al cargar el texto.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateText = async () => {
    if (!newText) {
      toast.error("Por favor, ingresa un nuevo texto.");
      return;
    }

    setLoading(true);
    try {
      await updateText(newText);
      await fetchText();
      toast.success("Texto actualizado exitosamente!");
    } catch (error: any) {
      const errorMessage = error.message || "Error al actualizar el texto.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">Interacción con Contrato Inteligente</h1>
        <button className="button green" onClick={fetchText}>
          Obtener Texto Actual
        </button>
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          placeholder="Nuevo texto"
          className="input"
        />
        <button className="button blue" onClick={handleUpdateText}>
          Actualizar Texto
        </button>
      </div>
      <div className="current-text">
        {loading ? (
          <div className="spinner"></div>
        ) : (
          <span>
            Texto actual: <strong>{currentText || "No disponible"}</strong>
          </span>
        )}
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default App;
