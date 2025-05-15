import { useState } from "react";
import { Filters, GridContainer, GridItems, BoxContent } from "./Styles";
import "material-symbols";

const boxes = [
  { id: 1, label: "1", className: "box-one", tags: ["1"] },
  { id: 2, label: "2", className: "box-two", tags: ["2"] },
  { id: 3, label: "3", className: "box-three", tags: ["1", "2"] },
  { id: 4, label: "4", className: "box-four", tags: ["2"] },
  { id: 5, label: "5", className: "box-five", tags: ["1"] },
  { id: 6, label: "6", className: "box-six", tags: ["1", "2"] },
  { id: 7, label: "7", className: "box-seven", tags: ["1"] },
];

const filters = [
  { label: "All", value: "all" },
  { label: "1", value: "1" },
  { label: "2", value: "2" },
];

export default function Grid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (value) => {
    setActiveFilter(value);
  };

  const isDimmed = (tags) => {
    return activeFilter !== "all" && !tags.includes(activeFilter);
  };

  return (
    <main>
      <Filters>
        {filters.map((filter) => (
          <button
            key={filter.value}
            className={filter.value === activeFilter ? "active" : ""}
            onClick={() => handleFilterClick(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </Filters>
      <GridContainer>
        {boxes.map((box) => (
          <GridItems
            key={box.id}
            className={box.className}
            data-tags={box.tags.join(" ")}
            dimmed={isDimmed(box.tags)}
          >
            <BoxContent>
            </BoxContent>
          </GridItems>
        ))}
      </GridContainer>
    </main>
  );
}
