const Human = {FirstName:"Aakash", LastName:"suthar", age:18};
for (let H in Human) {
    document.write("<br/>"+H);
  }
document.write("<hr/>");
for (let H in Human) {
  document.write("<br/>"+Human[H]);
}