import React from "react";

// bootstrap
import { Card } from "react-bootstrap";

import ViewAs from "./viewas";

const sortCourses = ({ length, info, changeCategory }) => {
  return (
    <div>
      <Card className="courses-info-card">
        <Card.Body>
          <h3 className="courses-info">
            {length} courses found for "{info.title}"
          </h3>
        </Card.Body>
      </Card>
      <div className="filters">
        <span>Sort by:</span>
        <select className="filters-dropdown" onChange={changeCategory}>
          <option>Selection</option>
          <option value="difficulty">Difficulty</option>
          <option value="length">Total Length</option>
          <option value="leactures">Total Leactures</option>
        </select>
        <ViewAs />
      </div>
    </div>
  );
};

export default sortCourses;
