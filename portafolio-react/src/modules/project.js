const projects = {
  1: require("../assets/img/project1.webp"),
  2: require("../assets/img/project2.jpg"),
  3: require("../assets/img/project3.avif"),
  4: require("../assets/img/project4.avif"),
};

const width = 600;
const height = 600;

const Project = ({ title, projectNum }) => {
  return (
    <div className="flex mb-10">
      <img
        src={projects[projectNum]}
        alt={`Proyecto ${projects[projectNum]}`}
        width={width}
        height={height}
        className="rounded-2xl"
      ></img>

      <div className="max-w-md ml-5">
        <div className="flex">
          <p className="text-color4 mr-4 text-lg">#React</p>
          <p className="text-color4 mr-4 text-lg">#Node.js</p>
          <p className="text-color4 mr-4 text-lg">#Nest</p>
        </div>

        <h2 className="text-white font-bold text-3xl mb-4">{title}</h2>

        <p className="text-stone-400 text-lg mb-4">
          7 min de lectura | JUL 3 2022
        </p>
        <p className="text-stone-400 text-lg text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac massa
          id ex fermentum tempor at ut turpis. Fusce dapibus libero aliquet erat
          fringilla interdum. Nunc eget egestas erat. Morbi blandit ante quis
          ante porttitor, ut faucibus elit consectetur. Integer nec ligula vitae
          enim dictum faucibus. Ut ultricies dictum ante. Morbi aliquam vehicula
          augue sed viverra. Aliquam sed vestibulum orci, vitae volutpat enim.
          Nullam consectet
        </p>
      </div>
    </div>
  );
};

export default Project;
