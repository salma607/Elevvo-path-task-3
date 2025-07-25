import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import tasksData from "./constTable";

const StatusPill = ({ status }) => {
  const statusMap = {
    Completed: "bg-green-100 text-green-700",
    "In Progress": "bg-yellow-100 text-yellow-700",
    "In Backlog": "bg-blue-100 text-blue-700",
    Delayed: "bg-red-100 text-red-700",
  };
  return (
    <span
      className={
        "px-3 py-1 rounded-full text-xs font-medium " +
        (statusMap[status] || " text-var(--color-main)")
      }
    >
      {status}
    </span>
  );
};

const PAGE_SIZE = 4;

export default function TasksTable() {
  const [page, setPage] = useState(1);
  const [tasks, setTasks] = useState(tasksData);

  const totalPages = Math.ceil(tasks.length / PAGE_SIZE);
  const startIdx = (page - 1) * PAGE_SIZE;
  const currentTasks = tasks.slice(startIdx, startIdx + PAGE_SIZE);

  return (
    <div className="">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-3">
          
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            style={{
              background: "var(--color-header)",
              color: "var(--color-helper)",
              fontWeight: 600,
              textTransform: "none",
              borderRadius: "8px",
              boxShadow: "none",
            }}
          >
            Create Task
          </Button>
        </div>
        <div className="rounded-2xl shadow-md overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="text-sm text-[var(--color-main)] bg-[var(--color-header)]">
                <th className="py-4 px-5 font-medium">
                  <span className="mr-2">Task Name</span> <span>⇵</span>
                </th>
                <th className="py-4 px-2 font-medium">Team</th>
                <th className="py-4 px-2 font-medium">
                  Assigned To <span>⇵</span>
                </th>
                <th className="py-4 px-2 font-medium">
                  Date <span>⇵</span>
                </th>
                <th className="py-4 px-2 font-medium">Status</th>
                <th className="py-4 px-2 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentTasks.map((task) => (
                <tr
                  key={task.id}
                  className={
                    "text-gray-700 text-sm border-b last:border-b-0 " +
                    (task.checked ? "" : "")
                  }
                >
                  {/* Task Name */}
                  <td className="py-3 px-5 flex items-center">
                    <input
                      type="checkbox"
                      checked={task.checked}
                      onChange={() => {
                        const newTasks = tasks.map((t) =>
                          t.id === task.id ? { ...t, checked: !t.checked } : t
                        );
                        setTasks(newTasks);
                      }}
                      className="mr-3 accent-[var(--color-helper)] w-4 h-4"
                    />
                    <span className={task.checked ? "line-through text-[var(--color-helper)]" : ""}>
                      {task.title}
                    </span>
                  </td>
                  {/* Team */}
                  <td className="py-3 px-2">{task.team}</td>
                  {/* Assigned */}
                 <td className="py-3 px-2">
  {task.assigned ? (
    <span className="flex items-center">
      <Avatar
        src={task.assigned.avatar}
        alt={task.assigned.name}
        sx={{ width: 28, height: 28, marginRight: 1 }}
      />
      <span>{task.assigned.name}</span>
    </span>
  ) : null}
</td>
                  {/* Date */}
                  <td className="py-3 px-2">{task.date}</td>
                  {/* Status */}
                  <td className="py-3 px-2">
                    <StatusPill status={task.status} />
                  </td>
                  {/* Actions */}
                  <td className="py-3 px-2">
                    <IconButton size="small" color="inherit">
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" color="inherit">
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination */}
          <div className="flex justify-end items-center px-6 py-3">
            <button
              className="px-3 py-1 rounded  disabled:opacity-40 font-bold"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              &lt;
            </button>
            <span className="mx-2 text-sm">
              Page {page} of {totalPages}
            </span>
            <button
              className="px-3 py-1 rounded hover:bg-[var(--color-main)] disabled:opacity-40 font-bold"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}