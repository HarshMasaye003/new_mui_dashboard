import { useState } from "react";

const useStatFilter = (activePCs) => {
  const pcFilter = (filter) => {
    let filteredPCs = [];

    if (filter === "CPU") {
      filteredPCs = activePCs
        .slice()
        .sort(
          (a, b) =>
            parseFloat(b.systemInfo["CPU Info"].total_cpu_usage) -
            parseFloat(a.systemInfo["CPU Info"].total_cpu_usage)
        )
        .map((pc) => ({
          pcNo: pc.pcNo,
          value: pc.systemInfo["CPU Info"].total_cpu_usage,
          ...pc
        }));
    } else if (filter === "Memory") {
      filteredPCs = activePCs
        .slice()
        .sort(
          (a, b) =>
            parseFloat(
              b.systemInfo["Memory Usage"].main_memory_details.percentage
            ) -
            parseFloat(
              a.systemInfo["Memory Usage"].main_memory_details.percentage
            )
        )
        .map((pc) => ({
          pcNo: pc.pcNo,
          value: pc.systemInfo["Memory Usage"].main_memory_details.percentage,
          ...pc
        }));
    } else if (filter === "Disk") {
      // Implement disk filtering logic...
    }

    return filteredPCs;
  };

  return { pcFilter };
};

export default useStatFilter;
