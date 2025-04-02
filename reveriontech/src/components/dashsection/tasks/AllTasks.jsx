import React from 'react';
import { FiMoreHorizontal, FiMessageCircle } from 'react-icons/fi';

const AllTasks = () => {
  // Mock data for tasks
  const tasks = [
    {
      id: 1,
      name: 'Homepage Wireframe',
      status: 'Completed',
      statusColor: 'completed',
      assignee: { initials: 'SK', name: 'Sarah K.', color: 'pink' },
      dueDate: 'Mar 24, 2025',
      credits: 15,
      comments: 0
    },
    {
      id: 2,
      name: 'Content Migration',
      status: 'In Progress',
      statusColor: 'in-progress',
      assignee: { initials: 'MT', name: 'Michael T.', color: 'blue' },
      dueDate: 'Mar 28, 2025',
      credits: 25,
      comments: 2
    },
    {
      id: 3,
      name: 'SEO Implementation',
      status: 'To Do',
      statusColor: 'to-do',
      assignee: null,
      dueDate: 'Apr 2, 2025',
      credits: 20,
      comments: 0
    },
    {
      id: 4,
      name: 'User Testing',
      status: 'In Progress',
      statusColor: 'in-progress',
      assignee: { initials: 'RT', name: 'Rebecca T.', color: 'purple' },
      dueDate: 'Apr 5, 2025',
      credits: 30,
      comments: 4
    },
    {
      id: 5,
      name: 'Create Website Copy',
      status: 'To Do',
      statusColor: 'to-do',
      assignee: { initials: 'JD', name: 'John D.', color: 'green' },
      dueDate: 'Apr 10, 2025',
      credits: 15,
      comments: 1
    }
  ];

  return (
    <div className="slide-in-right">
      <div className="task-list-header">
        <div className="task-list-title">Task List</div>
        <div className="header-actions">
          <button className="secondary-button">
            Group: Status
          </button>
          <button className="secondary-button">
            Subtasks
          </button>
          <button className="secondary-button">
            Columns
          </button>
        </div>
      </div>
      
      <div className="card-body">
        <table className="task-table">
          <thead>
            <tr>
              <th>TASK</th>
              <th>STATUS</th>
              <th>ASSIGNEE</th>
              <th>DUE DATE</th>
              <th>CREDITS</th>
              <th>COMMENTS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <tr key={task.id}>
                <td>
                  <div className="task-name">{task.name}</div>
                </td>
                <td>
                  <span className={`status-badge ${task.statusColor}`}>
                    {task.status}
                  </span>
                </td>
                <td>
                  {task.assignee ? (
                    <div className="assignee">
                      <div className={`assignee-avatar ${task.assignee.color}`}>
                        {task.assignee.initials}
                      </div>
                      <div className="assignee-name">{task.assignee.name}</div>
                    </div>
                  ) : (
                    <span className="task-date">Unassigned</span>
                  )}
                </td>
                <td className="task-date">{task.dueDate}</td>
                <td className="task-credits">{task.credits}</td>
                <td>
                  <div className="task-comments">
                    <FiMessageCircle className="comment-icon" />
                    <span>{task.comments}</span>
                  </div>
                </td>
                <td>
                  <button className="action-button">
                    <FiMoreHorizontal />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTasks;