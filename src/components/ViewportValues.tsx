import React, { useEffect, useState } from "react";

const ViewportValues: React.FC = () => {
  const [viewport, setViewport] = useState({
    dvw: 0,
    lvw: 0,
    svw: 0,
    containerWidth: 0,
    parentWidth: 0,
    percentage: 0,
  });

  useEffect(() => {
    const calculateValues = () => {
      const dvw = window.visualViewport?.width || window.innerWidth; // Dynamic viewport width
      const lvw = window.screen.width; // Large viewport width (physical screen width)
      const svw = Math.min(dvw, lvw); // Smallest viewport width

      // Optional: Calculate percentage width for a container
      const container = document.querySelector<HTMLDivElement>(".my-container"); // Replace with your class
      const parent = container?.parentElement as HTMLElement;

      const containerWidth = container?.offsetWidth || 0;
      const parentWidth = parent?.offsetWidth || 0;
      const percentage = parentWidth ? (containerWidth / parentWidth) * 100 : 0;

      setViewport({ dvw, lvw, svw, containerWidth, parentWidth, percentage });
    };

    // Initial calculation
    calculateValues();

    // Recalculate on resize
    window.addEventListener("resize", calculateValues);
    return () => window.removeEventListener("resize", calculateValues);
  }, []);

  return (
    <div className="p-4 bg-gray-100 text-gray-900 rounded-lg shadow">
      <h1 className="text-xl font-bold mb-4">Viewport Values</h1>
      <p><strong>dvw:</strong> {viewport.dvw}px</p>
      <p><strong>lvw:</strong> {viewport.lvw}px</p>
      <p><strong>svw:</strong> {viewport.svw}px</p>
      <p><strong>Container Width:</strong> {viewport.containerWidth}px</p>
      <p><strong>Parent Width:</strong> {viewport.parentWidth}px</p>
      <p><strong>Percentage Width:</strong> {viewport.percentage.toFixed(2)}%</p>
    </div>
  );
};

export default ViewportValues;
