import React, { useState } from "react";

function AssignmentProblem() {
  const [matrixSize, setMatrixSize] = useState(3);
  const [matrix, setMatrix] = useState(Array(3).fill(Array(3).fill(0)));
  const [result, setResult] = useState(null);

  const handleMatrixSizeChange = (e) => {
    const size = parseInt(e.target.value, 10);
    setMatrixSize(size);
    setMatrix(Array(size).fill(Array(size).fill(0)));
    setResult(null);
  };

  const handleInputChange = (e, rowIndex, colIndex) => {
    const newMatrix = matrix.map((row, r) =>
      row.map((val, c) => (r === rowIndex && c === colIndex ? +e.target.value : val))
    );
    setMatrix(newMatrix);
  };

  const solveAssignment = () => {
    // Placeholder for Hungarian algorithm
    const assignment = Array(matrixSize).fill().map((_, i) => [i, i]);
    setResult({ assignment });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Assignment Problem</h2>
      <label className="block mb-2">
        Matrix Size:
        <input
          type="number"
          min="2"
          max="10"
          value={matrixSize}
          onChange={handleMatrixSizeChange}
          className="ml-2 p-2 border rounded"
        />
      </label>
      <table className="w-full mt-4 border">
        <tbody>
          {matrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((val, colIndex) => (
                <td key={colIndex} className="p-2 border">
                  <input
                    type="number"
                    value={val}
                    onChange={(e) => handleInputChange(e, rowIndex, colIndex)}
                    className="w-full p-2 border rounded"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={solveAssignment}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Solve Assignment
      </button>
      {result && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Optimal Assignment</h3>
          <ul className="list-disc list-inside">
            {result.assignment.map(([task, agent], index) => (
              <li key={index}>Task {task + 1} assigned to Agent {agent + 1}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AssignmentProblem;
