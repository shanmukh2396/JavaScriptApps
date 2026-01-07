//Apply method
const pinfo = {
  pdetails: function (rating, price) {
    return this.pid + " " + this.pname + " " + rating + " " + price;
  },
};
const product = {
  pid: 1001,
  pname: "LG",
};
console.log(pinfo.pdetails.apply(product, [4, 30000]));
