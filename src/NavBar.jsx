import { useSelector } from "react-redux";

export const NavBar = () => {
  const { taskList } = useSelector((state) => state.tasks);
  return (
    <div>
      <h2 className="text-center my-2 text-primary">To Do List</h2>
      <p className="text-center lead">task assigned({taskList.length})</p>
    </div>
  );
};
