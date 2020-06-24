import React from "react";

// bootstrap
import { Card } from "react-bootstrap";

const sortCourses = ({ length, info }) => {
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
        <select className="filters-dropdown">
          <option>Most Popular</option>
          <option>Top Rated</option>
          <option>Newest</option>
        </select>
      </div>
    </div>
  );
};

export default sortCourses;
