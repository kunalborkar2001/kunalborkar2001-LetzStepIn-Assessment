import React, { useEffect, useState } from "react";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import Rating from "@mui/material/Rating";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import './Category.css'

const Catagory = ({ catagoryData }) => {
  const [filteredData, setFilteredData] = useState({
    city: [],
    range: '',
    rating: [],
  });

  useEffect(() => {
    // console.log(filteredData);
    catagoryData(filteredData)
  }, [filteredData]);

  const handleBrand = (city) => {
    setFilteredData((prevData) => {
      const isBrandSelected = prevData.city.includes(city);
      const updatedBrand = isBrandSelected
        ? prevData.city.filter((selectedBrand) => selectedBrand !== city)
        : [...prevData.city, city];

      return {
        ...prevData,
        city: updatedBrand,
      };
    });
  };

  const handleRange = (range) => {
    setFilteredData((prevData) => {
      return {
        ...prevData,
        range,
      };
    });
  };

  const handleRating = (rating) => {
    setFilteredData((prevData) => {
      const isRatingSelected = prevData.rating.includes(rating);
      const updatedRating = isRatingSelected
        ? prevData.rating.filter((selectedRating) => selectedRating !== rating)
        : [...prevData.rating, rating];

      return {
        ...prevData,
        rating: updatedRating,
      };
    });
  };

  const [expandedArr, setExpanded] = useState([true, true, true]);
  const handleExpanded = (i) => () => {
    const newExpandedArr = [...expandedArr];
    newExpandedArr[i] = !newExpandedArr[i];
    setExpanded(newExpandedArr);
  };

  return (
    <div className="Category">
      <AccordionGroup disableDivider className="accordiongroup" style={{ display: "flex", width: "100%" }}>
        <div className="kunal">

          <Accordion expanded={expandedArr[0]} onChange={handleExpanded(0)}>
            <AccordionSummary>City</AccordionSummary>
            <AccordionDetails>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Checkbox
                  value="Mumbai"
                  onChange={() => handleBrand("Mumbai")}
                  checked={filteredData.city.includes("Mumbai")}
                  size="small"
                />
                Mumbai
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Checkbox
                  value="Pune"
                  onChange={() => handleBrand("Pune")}
                  checked={filteredData.city.includes("Pune")}
                  size="small"
                />
                Pune
              </div>
            </AccordionDetails>
          </Accordion>
          <hr />


          {/* <br /> */}


          <Accordion expanded={expandedArr[1]} onChange={handleExpanded(1)}>
            <AccordionSummary>PRICE RANGE</AccordionSummary>
            <AccordionDetails>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Checkbox
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<RadioButtonCheckedIcon />}
                  value="All"
                  onChange={() => handleRange("All")}
                  checked={filteredData.range === "All"}
                  size="small"
                />
                All
              </div>
              {["0-10000", "10000-30000", "30000-50000", "50000-100000"].map((option) => (
                <div key={option} style={{ display: "flex", alignItems: "center" }}>
                  <Checkbox
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                    value={option}
                    onChange={() => handleRange(option)}
                    checked={filteredData.range === option}
                    size="small"
                  />
                  {option}
                </div>
              ))}
            </AccordionDetails>
          </Accordion>
          <hr />
          {/* <br /> */}
          <Accordion expanded={expandedArr[2]} onChange={handleExpanded(2)} className="ratingAccordion">
            <AccordionSummary>RATINGS</AccordionSummary>
            <AccordionDetails>
              {[5, 4, 3, 2, 1].map((rating) => (
                <div
                  key={rating}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Checkbox
                    value={rating}
                    onChange={() => handleRating(rating)}
                    checked={filteredData.rating.includes(rating)}
                    size="small"
                  />
                  <Rating
                    name="simple-controlled"
                    value={rating}
                    readOnly
                  />
                </div>
              ))}
            </AccordionDetails>
          </Accordion>
        </div>
      </AccordionGroup>
    </div>
  );
};

export default Catagory;