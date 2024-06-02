import BlockNav from "../modules/blockNav";
import Project from "../modules/project";

const Blog = () => {
  return (
    <>
      <BlockNav />
      <div className="flex flex-col justify-center items-center bg-color2">
        <Project title={"Project de CRUD sencillo con Nest"} projectNum={1} />
        <Project
          title={"Gestión de Inventarios con React y NodeJS"}
          projectNum={3}
        />
        <Project
          title={"Sistema de Blog con NestJS y TypeScript"}
          projectNum={2}
        />
        <Project
          title={"Plataforma de E-learning con Next.js"}
          projectNum={4}
        />
      </div>
    </>
  );
};

export default Blog;
