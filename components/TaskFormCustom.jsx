"use client";

import { createTaskCustom } from "@/utils/actions";
import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-primary uppercase join-item"
      disabled={pending}
    >
      {pending ? "please wait..." : "create task"}
    </button>
  );
};

const initialState = {
  message: null,
};

const TaskForm = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState);

  useEffect(() => {
    if (state.message === "error") {
      toast.error("there was an error");
      return;
    }
    if (state.message) {
      toast.success("task created");
    }
  }, [state]);

  return (
    <>
      <form action={formAction}>
        {/* {state.message ? <p className="mb-2">{state.message}</p> : null} */}
        <div className="join w-full">
          <input
            type="text"
            name="content"
            className="input input-bordered w-full join-item"
            placeholder="type here"
            required
          />
          <SubmitBtn />
        </div>
      </form>
    </>
  );
};

export default TaskForm;
