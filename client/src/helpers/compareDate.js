const compareDate = (date1, date2) => {
  const compare1 = date1.getMonth() + date1.getDate() + date1.getFullYear();
  const compare2 = date2.getMonth() + date2.getDate() + date2.getFullYear();
  return compare1 !== compare2 ? true : false;
};

module.exports = compareDate;
