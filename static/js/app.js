// from data.js
var tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  //append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    var row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val); //COULD SPLIT DATE/TIME into separate columns? Does this make fitlering easier?
      }
    );
  });
}

function handleClick() {

  // Grab the datetime value from the filter
  var date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  //else
  // filteredDAta = "No Records";
  }

  // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
}

function handleClickShape() {

  // Grab the datetime value from the filter
  var shape = d3.select("#shape").property("value");
  let filteredData = tableData;

  // Check to see if a date was entered and filter the
  // data using that date.
  if (shape) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.shape === shape);
  //else
  // filteredDAta = "No Records"; //Exception handling
  }

  // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Attach an event to listen for the form button
d3.selectAll("#filter-btn-shape").on("click", handleClickShape);


// Build the table when the page loads
buildTable(tableData);
