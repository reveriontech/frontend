import React from 'react';
import { FiMoreHorizontal, FiMessageCircle, FiArrowDown } from 'react-icons/fi';

const MyTasks = () => {
  // Mock data for the current user's tasks
  const myTasks = [
    {
      id: 2,
      name: 'Content Migration',
      status: 'In Progress',
      statusColor: 'in-progress',
      dueDate: 'Mar 28, 2025',
      priority: 'Medium',
      priorityColor: 'warning',
      credits: 25,
      comments: 2
    },
    {
      id: 5,
      name: 'Create Website Copy',
      status: 'To Do',
      statusColor: 'to-do',
      dueDate: 'Apr 10, 2025',
      priority: 'High',
      priorityColor: 'urgent',
      credits: 15,
      comments: 1
    },
    {
      id: 6,
      name: 'Mobile Responsiveness',
      status: 'In Progress',
      statusColor: 'in-progress',
      dueDate: 'Apr 15, 2025',
      priority: 'Medium',
      priorityColor: 'warning',
      credits: 20,
      comments: 0
    }
  ];

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'High':
        return 'text-red-600';
      case 'Medium':
        return 'text-orange-600';
      case 'Low':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="slide-in-right">
      <div className="task-list-header">
        <div className="task-list-title">My Task List</div>
        <div className="header-actions">
          <button className="secondary-button">
            <span>Sort by Due Date</span>
            <FiArrowDown className="ml-1" />
          </button>
        </div>
      </div>
      
      <div className="card-body">
        <table className="task-table">
          <thead>
            <tr>
              <th>TASK</th>
              <th>STATUS</th>
              <th>DUE DATE</th>
              <th>PRIORITY</th>
              <th>CREDITS</th>
              <th>COMMENTS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myTasks.map(task => (
              <tr key={task.id}>
                <td>
                  <div className="task-name">{task.name}</div>
                </td>
                <td>
                  <span className={`status-badge ${task.statusColor}`}>
                    {task.status}
                  </span>
                </td>
                <td className="task-date">{task.dueDate}</td>
                <td>
                  <span className={`status-badge ${task.priorityColor}`}>
                    {task.priority}
                  </span>
                </td>
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

export default MyTasks;