function clearSelections() {
  const startRange = 'B2';
  const endRange = 'D200';
  const range = SpreadsheetApp.getActiveSheet().getRange(startRange + ':' + endRange);
  const values = range.getValues();

  let updatedValues = values.map(function(row) {
    return row.map(function(cell) {
      if (cell == true) {
        return false;
      }

      if (cell != "") {
        return "";
      }
    });
  });

  range.setValues(updatedValues);
}
