export const scrollTo_calendy = () => {
  const sectiion = document.getElementById("calendy");
  // console.log(section);
  if (sectiion) {
    window.scrollTo({
      top: sectiion.offsetTop,
      behavior: "smooth",
    });
  }
};
