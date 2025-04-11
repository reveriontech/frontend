import React, { useState, useEffect, useRef } from 'react';
import '../../assets/dashcss/task.css';
import AddDate from './taskcomponent/Adddate';
import Priority from '../dashsection/taskcomponent/Priority';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [visibleStatuses, setVisibleStatuses] = useState([]);
  const [expandedSections, setExpandedSections] = useState({
    'COMPLETE': true,
    'IN PROGRESS': true,
    'TO DO': true
  });
  const [newTask, setNewTask] = useState({
    name: '',
    assignee: '',
    dueDate: '',
    priority: '',
    status: 'TO DO',
    comments: '',
    taskType: 'Task',
    description: ''
  });
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(null);
  const [showStatusOptions, setShowStatusOptions] = useState(false);
  const [showTaskTypeDropdown, setShowTaskTypeDropdown] = useState(false);
  const [showDescriptionInput, setShowDescriptionInput] = useState(false);
  const statusButtonRef = useRef(null);
  const statusDropdownRef = useRef(null);
  const taskTypeButtonRef = useRef(null);
  const taskTypeDropdownRef = useRef(null);

  // Effect to determine which status tables to show based on task data
  useEffect(() => {
    const statuses = [...new Set(tasks.map(task => task.status))];
    setVisibleStatuses(statuses);
  }, [tasks]);

  // Handle outside click for dropdowns
  useEffect(() => {
    function handleClickOutside(event) {
      // Status dropdown
      if (
        statusDropdownRef.current && 
        !statusDropdownRef.current.contains(event.target) &&
        statusButtonRef.current &&
        !statusButtonRef.current.contains(event.target)
      ) {
        setShowStatusOptions(false);
      }

      // Task type dropdown
      if (
        taskTypeDropdownRef.current && 
        !taskTypeDropdownRef.current.contains(event.target) &&
        taskTypeButtonRef.current &&
        !taskTypeButtonRef.current.contains(event.target)
      ) {
        setShowTaskTypeDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Get all tasks with a specific status
  const getTasksByStatus = (status) => {
    return tasks.filter(task => task.status === status);
  };

  // Toggle section expansion
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Handle adding a new task
  const handleAddTask = () => {
    if (!newTask.name.trim()) return;
    
    // Default to TO DO status if not set
    const taskStatus = newTask.status || 'TO DO';
    
    const taskToAdd = {
      ...newTask,
      id: Date.now(),
      status: taskStatus,
      name: newTask.name.trim()
    };
    
    setTasks(prev => [...prev, taskToAdd]);
    
    // Add this status to visible statuses if it's not already there
    if (!visibleStatuses.includes(taskStatus)) {
      setVisibleStatuses(prev => [...prev, taskStatus]);
    }
    
    // Ensure section is expanded for the new task's status
    setExpandedSections(prev => ({
      ...prev,
      [taskStatus]: true // Expand the section for the new task
    }));
    
    // Reset form
    setNewTask({
      name: '',
      assignee: '',
      dueDate: '',
      priority: '',
      status: 'TO DO',
      comments: '',
      taskType: 'Task',
      description: ''
    });
    
    setShowAddTaskModal(false);
  };

  // Handle input changes in modal
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask(prev => ({ ...prev, [name]: value }));
  };

  // Handle status change in add task modal
  const handleStatusChange = (status) => {
    setNewTask(prev => ({ ...prev, status }));
    setShowStatusOptions(false);
  };

  // Handle task type change
  const handleTaskTypeChange = (taskType) => {
    setNewTask(prev => ({ ...prev, taskType }));
    setShowTaskTypeDropdown(false);
  };

  // Get placeholder text based on task type
  const getPlaceholderByTaskType = () => {
    switch(newTask.taskType) {
      case 'Milestone':
        return "Milestone Name";
      case 'Form Response':
        return "Form Response Name";
      default:
        return "Task Name or type '/' for commands";
    }
  };

  // Get create button text based on task type
  const getCreateButtonText = () => {
    switch(newTask.taskType) {
      case 'Milestone':
        return "Create Milestone";
      case 'Form Response':
        return "Create Form Response";
      default:
        return "Create Task";
    }
  };

  // Handle priority change (used by Priority component)
  const handlePriorityChange = (priority) => {
    setNewTask(prev => ({ ...prev, priority }));
  };

  // Handle due date change (used by AddDate component)
  const handleDueDateChange = (dueDate) => {
    setNewTask(prev => ({ ...prev, dueDate }));
  };

  // Handle status change for existing task
  const handleTaskStatusChange = (taskId, newStatus) => {
    setTasks(prev => 
      prev.map(task => 
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
    setShowStatusDropdown(null);
  };

  // Render task type dropdown
  const renderTaskTypeDropdown = () => {
    return (
      <div className="task-type-dropdown" ref={taskTypeDropdownRef}>
        <div className="task-type-header">Task Types</div>
        <div 
          className={`task-type-option ${newTask.taskType === 'Task' ? 'selected' : ''}`}
          onClick={() => handleTaskTypeChange("Task")}
        >
          <span className="task-type-radio">⚪</span>
          <span className="task-type-label">Task (default)</span>
          {newTask.taskType === 'Task' && <span className="task-type-check">✓</span>}
        </div>
        <div 
          className={`task-type-option ${newTask.taskType === 'Milestone' ? 'selected' : ''}`}
          onClick={() => handleTaskTypeChange("Milestone")}
        >
          <span className="task-type-radio">◇</span>
          <span className="task-type-label">Milestone</span>
          {newTask.taskType === 'Milestone' && <span className="task-type-check">✓</span>}
        </div>
        <div 
          className={`task-type-option ${newTask.taskType === 'Form Response' ? 'selected' : ''}`}
          onClick={() => handleTaskTypeChange("Form Response")}
        >
          <span className="task-type-radio">📄</span>
          <span className="task-type-label">Form Response</span>
          {newTask.taskType === 'Form Response' && <span className="task-type-check">✓</span>}
        </div>
      </div>
    );
  };

  // Render status dropdown in add task modal
  const renderStatusOptionsDropdown = () => {
    return (
      <div className="status-options-dropdown" ref={statusDropdownRef}>
        <div className="status-dropdown-search">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="status-dropdown-options">
          <div className="status-dropdown-group">
            <div className="status-dropdown-group-label">Not started</div>
            <div 
              className={`status-dropdown-option ${newTask.status === 'TO DO' ? 'selected' : ''}`}
              onClick={() => handleStatusChange('TO DO')}
            >
              <span className="status-icon todo-icon">○</span>
              <span>TO DO</span>
              {newTask.status === 'TO DO' && <span className="checkmark">✓</span>}
            </div>
          </div>
          
          <div className="status-dropdown-group">
            <div className="status-dropdown-group-label">Active</div>
            <div 
              className={`status-dropdown-option ${newTask.status === 'IN PROGRESS' ? 'selected' : ''}`}
              onClick={() => handleStatusChange('IN PROGRESS')}
            >
              <span className="status-icon progress-icon">○</span>
              <span>IN PROGRESS</span>
              {newTask.status === 'IN PROGRESS' && <span className="checkmark">✓</span>}
            </div>
          </div>
          
          <div className="status-dropdown-group">
            <div 
              className={`status-dropdown-option ${newTask.status === 'COMPLETE' ? 'selected' : ''}`}
              onClick={() => handleStatusChange('COMPLETE')}
            >
              <span className="status-icon complete-icon">✓</span>
              <span>COMPLETE</span>
              {newTask.status === 'COMPLETE' && <span className="checkmark">✓</span>}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render status dropdown for existing task
  const renderTaskStatusDropdown = (taskId, currentStatus) => {
    return (
      <div className="status-dropdown">
        <div className="status-dropdown-header">
          <div>Status</div>
          <div>Task Type</div>
        </div>
        <div className="status-dropdown-search">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="status-dropdown-options">
          <div className="status-dropdown-group">
            <div className="status-dropdown-group-label">Not started</div>
            <div 
              className={`status-dropdown-option ${currentStatus === 'TO DO' ? 'selected' : ''}`}
              onClick={() => handleTaskStatusChange(taskId, 'TO DO')}
            >
              <span className="status-icon todo-icon">○</span>
              <span>TO DO</span>
              {currentStatus === 'TO DO' && <span className="checkmark">✓</span>}
            </div>
          </div>
          
          <div className="status-dropdown-group">
            <div className="status-dropdown-group-label">Active</div>
            <div 
              className={`status-dropdown-option ${currentStatus === 'IN PROGRESS' ? 'selected' : ''}`}
              onClick={() => handleTaskStatusChange(taskId, 'IN PROGRESS')}
            >
              <span className="status-icon progress-icon">○</span>
              <span>IN PROGRESS</span>
              {currentStatus === 'IN PROGRESS' && <span className="checkmark">✓</span>}
            </div>
          </div>
          
          <div className="status-dropdown-group">
            <div 
              className={`status-dropdown-option ${currentStatus === 'COMPLETE' ? 'selected' : ''}`}
              onClick={() => handleTaskStatusChange(taskId, 'COMPLETE')}
            >
              <span className="status-icon complete-icon">✓</span>
              <span>COMPLETE</span>
              {currentStatus === 'COMPLETE' && <span className="checkmark">✓</span>}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render section with tasks
  const renderSection = (status) => {
    const statusTasks = getTasksByStatus(status);
    const statusCount = statusTasks.length;
    
    // Don't render section if no tasks with this status
    if (statusCount === 0 && !visibleStatuses.includes(status)) {
      return null;
    }
    
    let statusIcon = '○';
    let statusClass = 'todo-status';
    
    if (status === 'COMPLETE') {
      statusIcon = '✓';
      statusClass = 'complete-status';
    } else if (status === 'IN PROGRESS') {
      statusIcon = '○';
      statusClass = 'progress-status';
    }
    
    return (
      <div className="task-section" key={status}>
        <div className="section-header" onClick={() => toggleSection(status)}>
          <div className="section-title">
            <span className={`section-icon ${statusClass}`}>{statusIcon}</span>
            <span className="section-name">{status}</span>
            <span className="section-count">{statusCount}</span>
          </div>
          <div className="section-actions">
            <span className="section-toggle">{expandedSections[status] ? '▼' : '▶'}</span>
          </div>
        </div>
        
        {expandedSections[status] && (
          <div className="section-content">
            <table className="task-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Assignee</th>
                  <th>Due date</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Comments</th>
                </tr>
              </thead>
              <tbody>
                {statusTasks.length > 0 ? (
                  statusTasks.map(task => (
                    <tr key={task.id} className="task-row">
                      <td className="task-name">
                        <div className="task-name-content">
                          <span className={`task-status-indicator ${statusClass}`}>{statusIcon}</span>
                          <span>{task.name}</span>
                          {task.description && <span className="task-description-indicator">📝</span>}
                        </div>
                      </td>
                      <td className="task-assignee">
                        {task.assignee && (
                          <div className="assignee-avatar">
                            {task.assignee.charAt(0)}
                          </div>
                        )}
                      </td>
                      <td className="task-date">
                        {task.dueDate && (
                          <span>{task.dueDate}</span>
                        )}
                      </td>
                      <td className="task-priority">
                        {task.priority && (
                          <span className={`priority-indicator priority-${task.priority.toLowerCase()}`}>
                            {task.priority === 'Urgent' && '🔴'}
                            {task.priority === 'High' && '🟡'}
                            {task.priority === 'Normal' && '🔵'}
                            {task.priority === 'Low' && '⚪'}
                            {task.priority}
                          </span>
                        )}
                      </td>
                      <td className="task-status">
                        <div 
                          className={`status-badge ${statusClass}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowStatusDropdown(task.id === showStatusDropdown ? null : task.id);
                          }}
                        >
                          <span className="status-text">{task.status}</span>
                        </div>
                        {showStatusDropdown === task.id && renderTaskStatusDropdown(task.id, task.status)}
                      </td>
                      <td className="task-comments">
                        {task.comments && (
                          <div className="comments-badge">
                            <span className="comments-icon">💬</span>
                            <span>{task.comments}</span>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="no-tasks-message">
                      No tasks yet. Click "+ Add Task" to create one.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <div className="section-footer">
              <button 
                className="section-add-task-footer"
                onClick={() => {
                  setNewTask(prev => ({ ...prev, status }));
                  setShowAddTaskModal(true);
                }}
              >
                + Add Task
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Get status badge styles for Add Task modal
  const getStatusBadgeClass = (status) => {
    if (status === 'COMPLETE') return 'task-status-badge-complete';
    if (status === 'IN PROGRESS') return 'task-status-badge-progress';
    return 'task-status-badge-todo';
  };

  return (
    <div className="tasks-container">
      <div className="tasks-header">
        <div className="tasks-actions">
          <button 
            className="add-task-button"
            onClick={() => setShowAddTaskModal(true)}
          >
            + Add Task
          </button>
        </div>
      </div>
      
      {/* Only render sections that exist in visibleStatuses */}
      {visibleStatuses.includes('COMPLETE') && renderSection('COMPLETE')}
      {visibleStatuses.includes('IN PROGRESS') && renderSection('IN PROGRESS')}
      {visibleStatuses.includes('TO DO') && renderSection('TO DO')}
      
      {/* Empty state when no tasks */}
      {tasks.length === 0 && (
        <div className="empty-state">
          <div className="empty-state-message">No tasks yet 📋</div>
          <div className="empty-state-description">Get started by adding your first task</div>
          <button 
            className="empty-state-button"
            onClick={() => setShowAddTaskModal(true)}
          >
            + Add Task
          </button>
        </div>
      )}
      
      {/* Add Task Modal */}
      {showAddTaskModal && (
        <div className="modal-overlay" onClick={(e) => {
          // Only close if clicking directly on the overlay, not on modal content
          if (e.target === e.currentTarget) {
            setShowAddTaskModal(false);
          }
        }}>
          <div className="task-modal">
            <div className="task-modal-tabs">
              <button className="task-modal-tab active">Task</button>
              <div className="task-modal-actions">
                <button className="task-modal-close" onClick={() => setShowAddTaskModal(false)}>×</button>
              </div>
            </div>

            <div className="task-modal-section">
              <div className="task-project-selector">
                <button 
                  className="task-type-btn"
                  onClick={() => setShowTaskTypeDropdown(!showTaskTypeDropdown)}
                  ref={taskTypeButtonRef}
                >
                  <span className="task-type-icon">
                    {newTask.taskType === 'Task' || !newTask.taskType ? '⚪' : 
                     newTask.taskType === 'Milestone' ? '◇' : 
                     newTask.taskType === 'Form Response' ? '📄' : '⚪'}
                  </span>
                  <span className="task-type-text">{newTask.taskType || 'Task'}</span>
                  <span className="task-type-arrow">▼</span>
                </button>
                {showTaskTypeDropdown && (
                  <div className="task-type-dropdown" ref={taskTypeDropdownRef}>
                    <div className="task-type-header">Task Types</div>
                    <div 
                      className={`task-type-option ${newTask.taskType === 'Task' || !newTask.taskType ? 'selected' : ''}`}
                      onClick={() => handleTaskTypeChange("Task")}
                    >
                      <span className="task-type-radio">⚪</span>
                      <span className="task-type-label">Task (default)</span>
                      {(newTask.taskType === 'Task' || !newTask.taskType) && <span className="task-type-check">✓</span>}
                    </div>
                    <div 
                      className={`task-type-option ${newTask.taskType === 'Milestone' ? 'selected' : ''}`}
                      onClick={() => handleTaskTypeChange("Milestone")}
                    >
                      <span className="task-type-radio">◇</span>
                      <span className="task-type-label">Milestone</span>
                      {newTask.taskType === 'Milestone' && <span className="task-type-check">✓</span>}
                    </div>
                    <div 
                      className={`task-type-option ${newTask.taskType === 'Form Response' ? 'selected' : ''}`}
                      onClick={() => handleTaskTypeChange("Form Response")}
                    >
                      <span className="task-type-radio">📄</span>
                      <span className="task-type-label">Form Response</span>
                      {newTask.taskType === 'Form Response' && <span className="task-type-check">✓</span>}
                    </div>
                  </div>
                )}
              </div>

              <div className="task-name-input-container">
                <input
                  type="text"
                  className="task-name-input"
                  placeholder={getPlaceholderByTaskType()}
                  name="name"
                  value={newTask.name}
                  onChange={handleInputChange}
                />
              </div>

              {showDescriptionInput ? (
                <div className="task-description-container">
                  <textarea
                    className="task-description-textarea"
                    placeholder="Add a detailed description..."
                    name="description"
                    value={newTask.description}
                    onChange={handleInputChange}
                  />
                </div>
              ) : (
                <div 
                  className="task-description-btn"
                  onClick={() => setShowDescriptionInput(true)}
                >
                  <span className="task-description-icon">📝</span>
                  <span>Add description</span>
                </div>
              )}

              <div className="task-options">
                <div className="task-status">
                  <button 
                    className={`task-status-badge ${getStatusBadgeClass(newTask.status)}`}
                    onClick={() => setShowStatusOptions(!showStatusOptions)}
                    ref={statusButtonRef}
                  >
                    {newTask.status}
                  </button>
                  {showStatusOptions && renderStatusOptionsDropdown()}
                </div>
                
                <button className="task-option-btn">
                  <span className="task-option-icon">👤</span>
                  <span className="task-option-text">Assignee</span>
                </button>
                
                {/* Using the AddDate component */}
                <AddDate 
                  onDateChange={handleDueDateChange} 
                  initialDate={newTask.dueDate}
                />
                
                {/* Using the Priority component */}
                <Priority 
                  onPriorityChange={handlePriorityChange}
                  initialPriority={newTask.priority}
                />
                
               
              </div>
            </div>

            <div className="task-modal-footer">
              <button className="task-templates-btn">
                <span className="task-templates-icon">📋</span>
                <span>Templates</span>
              </button>
              
              <div className="task-footer-right">
                <button className="task-attachment-btn">📎</button>
                <span className="task-comment-count">1</span>
                <button 
                  className="task-create-btn"
                  onClick={handleAddTask}
                  disabled={!newTask.name}
                >
                  {getCreateButtonText()}
                  <span className="task-create-arrow">▼</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks