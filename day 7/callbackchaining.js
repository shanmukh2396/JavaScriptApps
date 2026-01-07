const personinfo = () => {
  setTimeout(() => {
    console.log("INFO");
    let pid = [1001, 1002, 1003];
    console.log(pid);
    setTimeout(
      (rollno) => {
        const data = {
          name: "Shannu",
          qualification: "B.Tech",
        };
        console.log(
          `student name ${data.name} and qualification is ${data.qualification} and id is ${rollno}`
        );
      },
      2000,
      pid[1]
    );
  }, 2000);
};
personinfo();
