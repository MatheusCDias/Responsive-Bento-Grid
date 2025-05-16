import { useState } from "react";
import { Filters, GridContainer, GridItems, BoxContent } from "./Styles";
import "material-symbols";

const boxes = [
  {
    id: 1,
    title: "Title",
    subtitle: "Subtitle",
    icon: "code",
    className: "box-one",
    tags: ["1"],
    description:
      "Lorem ipsum dolor sit amet. Vel iusto cumque ut dignissimos consequatur non voluptas voluptatum aut dolorem eius. Hic autem vitae rem illo voluptas est velit sint.",
    label: "Box",
  },
  {
    id: 2,
    title: "Title",
    subtitle: "Subtitle",
    icon: "code",
    className: "box-two",
    tags: ["2"],
    description:
      "Lorem ipsum dolor sit amet. Vel iusto cumque ut dignissimos consequatur non voluptas voluptatum aut dolorem eius. Hic autem vitae rem illo voluptas est velit sint.",
    label: "Box",
  },
  {
    id: 3,
    title: "Title",
    subtitle: "Subtitle",
    icon: "code",
    className: "box-three",
    tags: ["1", "2"],
    description:
      "Lorem ipsum dolor sit amet. Vel iusto cumque ut dignissimos consequatur non voluptas voluptatum aut dolorem eius.",
    label: "Box",
  },
  {
    id: 4,
    title: "Title",
    subtitle: "Subtitle",
    icon: "code",
    className: "box-four",
    tags: ["2"],
    description:
      "Lorem ipsum dolor sit amet. Vel iusto cumque ut dignissimos consequatur non voluptas voluptatum aut dolorem eius. Hic autem vitae rem illo voluptas est velit sint.",
    label: "Box",
  },
  {
    id: 5,
    title: "Title",
    subtitle: "Subtitle",
    icon: "code",
    className: "box-five",
    tags: ["1"],
    description:
      "Lorem ipsum dolor sit amet. Vel iusto cumque ut dignissimos consequatur non voluptas voluptatum aut dolorem eius. Hic autem vitae rem illo voluptas est velit sint.",
    label: "Box",
  },
  {
    id: 6,
    title: "Title",
    subtitle: "Subtitle",
    icon: "code",
    className: "box-six",
    tags: ["1", "2"],
    description:
      "Lorem ipsum dolor sit amet. Vel iusto cumque ut dignissimos consequatur non voluptas voluptatum aut dolorem eius. Hic autem vitae rem illo voluptas est velit sint.",
    label: "Box",
  },

  {
    id: 7,
    title: "Title",
    subtitle: "Subtitle",
    icon: "code",
    className: "box-seven",
    tags: ["1"],
    description:
      "Lorem ipsum dolor sit amet. Vel iusto cumque ut dignissimos consequatur non voluptas voluptatum aut dolorem eius.",
    label: "Box",
  },
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
              <div className="top">
                <div class="main-header-content">
                  <div class="icon">
                    <span class="material-symbols-outlined">{box.icon}</span>
                  </div>
                  <div class="title">
                    <h1>{box.title}</h1>
                    <h2>{box.subtitle}</h2>
                  </div>
                </div>
                <div class="tag">
                  <h3>{box.tags}</h3>
                </div>
              </div>
              <div className="content">
                <p>
                  {box.description.length > 200
                    ? box.description.substring(0, 200) + "..."
                    : box.description}
                </p>
              </div>
              <div className="bottom">
                <div class="bottom-content">
                  <div class="info">
                    <span>{box.label}</span>
                  </div>
                  <div class="see-more-button">
                    <a href="#page">
                      <button>
                        <span>See More</span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </BoxContent>
          </GridItems>
        ))}
      </GridContainer>
    </main>
  );
}
