import React from "react";
import { Container } from "react-bootstrap";

export default function FilterBar() {
  return (
    <Container style={{paddingInline:"80px"}}>
    <div className="filter-bar d-flex flex-wrap align-items-center">
      <div className="sorting">
        <select>
          <option value="1">Default sorting</option>
          <option value="1">Default sorting</option>
          <option value="1">Default sorting</option>
        </select>
      </div>
      <div className="sorting mr-auto">
        <select>
          <option value="1">Show 12</option>
          <option value="1">Show 12</option>
          <option value="1">Show 12</option>
        </select>
      </div>
      <div>
        <div className="input-group filter-bar-search">
          <input type="text" placeholder="Search" />
          <div className="input-group-append"> </div>
        </div>
      </div>
    </div>
    </Container>
  );
}