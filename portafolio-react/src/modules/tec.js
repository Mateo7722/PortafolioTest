const images = {
  html: require("../assets/img/html.png"),
  css: require("../assets/img/css.png"),
  javascript: require("../assets/img/javascript.png"),
  react: require("../assets/img/react.png"),
  node: require("../assets/img/node.png"),
  nest: require("../assets/img/nest.png"),
  mysql: require("../assets/img/mysql.png"),
};

const height = 35;
const width = 35;

const Tec = ({ ruta }) => {
  return (
    <img
      src={images[ruta]}
      alt="html"
      width={width}
      height={height}
      className="mx-2"
    ></img>
  );
};

export default Tec;
