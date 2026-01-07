//api calling
const getdetails = async () => {
  //request data gathering logic
  const userid = document.getElementById("userid").value;
  const para = document.getElementById("sample");
  const res = document.getElementById("simple");
  //validation logic
  if (userid == "") {
    alert("Please Enter UserId");
    return;
  }
  //business logic
  para.style.display = "block";
  res.innerHTML = "";
  //calling multiple promises (or) APIs
  try {
    const [userres, postres] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${userid}`),
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`), // ?: it is called query string
    ]);
    const userdata = await userres.json();
    const postdata = await postres.json();
    //show result on browser
    res.innerHTML = `
    <h3>${userdata.name}</h3>
    <h3>${userdata.email}</h3>
    <h3>Posts</h3>
    <ul>
    ${postdata.map(
      (item) => `<li>
      ${item.title}
    </li>`
    )}
    </ul>
    `;
  } catch (error) {
    res.innerHTML = "something went wrong.";
  }
};
