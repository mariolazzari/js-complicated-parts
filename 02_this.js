// this
const moscow = {
  museums: 400,
  parks: 500,
  theathers: 390,

  logMuseums: function () {
    console.log(this === moscow);
  },
};

moscow.logMuseums();
