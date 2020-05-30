const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function shortDate(dateObject) {
  const monthName = monthNames[dateObject.getMonth()];
  const year = dateObject.getFullYear();
  return `${monthName} ${year}`;
}
