function selectForRabbits() {
  const vegetables = [
//    'Tomates',
    'Persil',
    'Endive',
    'Céléri',
    'Topinambourg',
    'Salade',
    'Fenouil',
    'Brocolis',
    'Mâche',
//    'Epinards',
    'Roquette',
//    'Carottes',
    'Bananes'
  ];
  const activeSheet = SpreadsheetApp.getActiveSheet();
  const rangeToUpdate = activeSheet.getRange('B2:B200');
  const rangeToUpdateValues = rangeToUpdate.getValues();
  const rangeToCheckValues = activeSheet.getRange('A2:A200').getValues();

  let updatedValues = rangeToUpdateValues.map(function(cellBooleanValues, index) {
    let booleanValue = cellBooleanValues[0];
    let ingredient = rangeToCheckValues[index][0];

    return (booleanValue || vegetables.indexOf(ingredient) != -1) ? [true] : [undefined];
  });
  
  rangeToUpdate.setValues(updatedValues);
}
