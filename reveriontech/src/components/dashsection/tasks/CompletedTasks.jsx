import React from 'react';
import { FiMoreHorizontal, FiMessageCircle, FiCheck, FiArrowDown } from 'react-icons/fi';

const CompletedTasks = () => {
  // Mock data for completed tasks
  const completedTasks = [
    {
      id: 1,
      name: 'Homepage Wireframe',
      completedDate: 'Mar 24, 2025',
      completedBy: { initials: 'SK', name: 'Sarah K.', color: 'pink' },
      timeSpent: '8h 30m',
      credits: 15,
      comments: 0
    },
    {
      id: 7,
      name: 'Logo Design',
      completedDate: 'Mar 20, 2025',
      completedBy: { initials: 'JD', name: 'John D.', color: 'green' },
      timeSpent: '5h 45m',
      credits: 20,
      comments: 3
    },
    {
      id: 8,
      name: 'Initial Market Research',
      completedDate: 'Mar 15, 2025',
      completedBy: { initials: 'MT', name: 'Michael T.', color: 'blue' },
      timeSpent: '12h 15m',
      credits: 30,
      comments: 5
    }
  ];

  return (
    <div className="slide-in-right">
      <div className="task-list-header">
        <div className="task-list-title">Completed Tasks</div>
        <div className="header-actions">
          <button className="secondary-button">
            <span>Sort by Completion Date</span>
            <FiArrowDown className="ml-1" />
          </button>
        </div>
      </div>
      
      <div className="card-body">
        <table className="task-table">
          <thead>
            <tr>
              <th>TASK</th>
              <th>COMPLETED</th>
              <th>COMPLETED BY</th>
              <th>TIME SPENT</th>
              <th>CREDITS</th>
              <th>COMMENTS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {completedTasks.map(task => (
              <tr key={task.id}>
                <td>
                  <div className="task-name flex items-center">
                    <FiCheck className="text-green-500 mr-2" />
                    {task.name}
                  </div>
                </td>
                <td className="task-date">{task.completedDate}</td>
                <td>
                  <div className="assignee">
                    <div className={`assignee-avatar ${task.completedBy.color}`}>
                      {task.completedBy.initials}
                    </div>
                    <div className="assignee-name">{task.completedBy.name}</div>
                  </div>
                </td>
                <td className="task-date">{task.timeSpent}</td>
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

export default CompletedTasks;