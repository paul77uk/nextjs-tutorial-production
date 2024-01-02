import { createTask } from "@/utils/actions.js";

const TaskForm = () => {
  return (
    <>
      <form action={createTask}>
        <div className="join w-full">
          <input
            type="text"
            name="content"
            className="input input-bordered w-full join-item"
            placeholder="type here"
            required
          />
          <button type="submit" className="btn btn-primary uppercase join-item">
            create task
          </button>
        </div>
      </form>
    </>
  );
};

export default TaskForm;
