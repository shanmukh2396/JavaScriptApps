//bind method demo
const einfo = {
  eid: 2001,
  ename: "Shannu",
  edetails: function () {
    return this.eid + " " + this.ename;
  },
};
const emp = {
  eid: 3002,
  ename: "Steve Harrington",
};
let res = einfo.edetails.bind(emp);
console.log(res());
