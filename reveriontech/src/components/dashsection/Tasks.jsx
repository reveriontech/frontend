import React, { useState } from 'react';

const Tasks = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  
  // Initial tasks data
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'Homepage Wireframe',
      status: 'completed',
      assignee: 'Sarah K.',
      dueDate: '2025-03-24',
      credits: 15,
      progress: 100
    },
    {
      id: 2,
      name: 'Content Migration',
      status: 'in-progress',
      assignee: 'Michael T.',
      dueDate: '2025-03-28',
      credits: 25,
      progress: 65
    },
    {
      id: 3,
      name: 'SEO Implementation',
      status: 'to-do',
      assignee: 'Unassigned',
      dueDate: '2025-04-02',
      credits: 20,
      progress: 0
    }
  ]);
  
  // New task form state
  const [newTask, setNewTask] = useState({
    name: '',
    status: 'to-do',
    assignee: '',
    dueDate: '',
    credits: 0,
    progress: 0
  });
  
  // Filter tasks based on active tab and search term
  const filteredTasks = tasks
    .filter(task => {
      if (activeTab === 'all') return true;
      if (activeTab === 'my') return task.assignee === 'Michael T.';
      if (activeTab === 'completed') return task.status === 'completed';
      return true;
    })
    .filter(task => {
      if (!searchTerm) return true;
      return task.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
             task.assignee.toLowerCase().includes(searchTerm.toLowerCase());
    });

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle form input changes for add/edit task
  const handleInputChange = (e, formType = 'new') => {
    const { name, value } = e.target;
    
    if (formType === 'new') {
      setNewTask(prev => ({ ...prev, [name]: value }));
    } else {
      setCurrentTask(prev => ({ ...prev, [name]: value }));
    }
  };
  
  // Add new task
  const handleAddTask = () => {
    const taskToAdd = {
      ...newTask,
      id: Math.max(...tasks.map(t => t.id), 0) + 1,
      progress: newTask.status === 'completed' ? 100 : newTask.progress
    };
    
    setTasks(prev => [...prev, taskToAdd]);
    setNewTask({
      name: '',
      status: 'to-do',
      assignee: '',
      dueDate: '',
      credits: 0,
      progress: 0
    });
    setShowAddModal(false);
  };
  
  // Open edit modal with task data
  const handleEditClick = (task) => {
    setCurrentTask(task);
    setShowEditModal(true);
  };
  
  // Save edited task
  const handleSaveEdit = () => {
    setTasks(prev => 
      prev.map(task => task.id === currentTask.id ? 
        {...currentTask, progress: currentTask.status === 'completed' ? 100 : currentTask.progress} : 
        task
      )
    );
    setShowEditModal(false);
  };
  
  // Complete a task
  const handleCompleteTask = (id) => {
    setTasks(prev => 
      prev.map(task => task.id === id ? 
        {...task, status: 'completed', progress: 100} : 
        task
      )
    );
  };
  
  // Get status badge with modern styling
  const getStatusBadge = (status) => {
    switch(status) {
      case 'completed':
        return <span className="badge rounded-pill bg-success text-white px-3 py-2">Completed</span>;
      case 'in-progress':
        return <span className="badge rounded-pill bg-warning text-dark px-3 py-2">In Progress</span>;
      case 'to-do':
        return <span className="badge rounded-pill bg-secondary text-white px-3 py-2">To Do</span>;
      default:
        return <span className="badge rounded-pill bg-light text-dark px-3 py-2">{status}</span>;
    }
  };
  
  // Format date for display
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="tasks-page container-fluid p-4">
      <div className="row mb-4 align-items-center">
        <div className="col-md-6">
          <h2 className="mb-md-0 mb-3 fw-bold">Project Tasks</h2>
        </div>
        <div className="col-md-6 d-flex justify-content-md-end">
          <button 
            className="btn btn-primary rounded-pill shadow-sm"
            onClick={() => setShowAddModal(true)}
          >
            <i className="bi bi-plus-lg me-2"></i> Add Task
            <span className="badge bg-light text-dark ms-2 rounded-pill">10 credits</span>
          </button>
        </div>
      </div>

      <div className="card mb-4 border-0 shadow-sm">
        <div className="card-body p-0">
          <ul className="nav nav-pills flex-column flex-sm-row p-3 gap-2" id="taskTabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button 
                className={`nav-link rounded-pill w-100 ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => setActiveTab('all')}
                type="button"
              >
                All Tasks
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button 
                className={`nav-link rounded-pill w-100 ${activeTab === 'my' ? 'active' : ''}`}
                onClick={() => setActiveTab('my')}
                type="button"
              >
                My Tasks
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button 
                className={`nav-link rounded-pill w-100 ${activeTab === 'completed' ? 'active' : ''}`}
                onClick={() => setActiveTab('completed')}
                type="button"
              >
                Completed
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="card border-0 shadow">
        <div className="card-header bg-white py-3 border-0">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
            <h5 className="mb-0 fw-bold">Task List</h5>
            <div className="input-group" style={{ maxWidth: "300px" }}>
              <span className="input-group-text bg-white border-end-0 rounded-pill-start">
                <i className="bi bi-search"></i>
              </span>
              <input 
                type="text" 
                className="form-control border-start-0 rounded-pill-end" 
                placeholder="Search tasks..."
                aria-label="Search tasks"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>Task</th>
                <th>Status</th>
                <th>Assignee</th>
                <th>Due Date</th>
                <th>Progress</th>
                <th>Credits</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map(task => (
                <tr key={task.id}>
                  <td data-label="Task" className="fw-medium">{task.name}</td>
                  <td data-label="Status">{getStatusBadge(task.status)}</td>
                  <td data-label="Assignee">
                    {task.assignee === 'Unassigned' ? (
                      <span className="text-muted">{task.assignee}</span>
                    ) : (
                      <div className="d-flex align-items-center">
                        <div className="avatar-placeholder rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style={{ width: "36px", height: "36px", fontSize: "0.9rem" }}>
                          {task.assignee.split(' ').map(name => name[0]).join('')}
                        </div>
                        <span className="ms-2">{task.assignee}</span>
                      </div>
                    )}
                  </td>
                  <td data-label="Due Date">{formatDate(task.dueDate)}</td>
                  <td data-label="Progress" style={{ width: "15%" }}>
                    <div className="d-flex align-items-center gap-2">
                      <div className="progress w-100" style={{ height: "8px" }}>
                        <div 
                          className={`progress-bar ${task.status === 'completed' ? 'bg-success' : 'bg-primary'}`} 
                          role="progressbar" 
                          style={{ width: `${task.progress}%` }} 
                          aria-valuenow={task.progress} 
                          aria-valuemin="0" 
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span className="text-small">{task.progress}%</span>
                    </div>
                  </td>
                  <td data-label="Credits">
                    <span className="badge rounded-pill bg-light text-dark px-3 py-2">
                      {task.credits} credits
                    </span>
                  </td>
                  <td data-label="Actions">
                    <div className="btn-group">
                      <button className="btn btn-sm btn-outline-primary rounded-start">
                        <i className="bi bi-eye d-md-none"></i>
                        <span className="d-none d-md-inline">View</span>
                      </button>
                      <button 
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => handleEditClick(task)}
                      >
                        <i className="bi bi-pencil d-md-none"></i>
                        <span className="d-none d-md-inline">Edit</span>
                      </button>
                      {task.status !== 'completed' && (
                        <button 
                          className="btn btn-sm btn-outline-success rounded-end"
                          onClick={() => handleCompleteTask(task.id)}
                        >
                          <i className="bi bi-check-lg d-md-none"></i>
                          <span className="d-none d-md-inline">Complete</span>
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredTasks.length === 0 && (
          <div className="text-center p-5">
            <div className="mb-3">
              <i className="bi bi-inbox text-muted" style={{ fontSize: "3rem" }}></i>
            </div>
            <p className="text-muted mb-0">No tasks found</p>
          </div>
        )}
      </div>
      
      {/* Add Task Modal */}
      {showAddModal && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow">
              <div className="modal-header border-0">
                <h5 className="modal-title fw-bold">Add New Task</h5>
                <button type="button" className="btn-close" onClick={() => setShowAddModal(false)}></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Task Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="name" 
                      name="name"
                      value={newTask.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="status" className="form-label">Status</label>
                    <select 
                      className="form-select" 
                      id="status" 
                      name="status"
                      value={newTask.status}
                      onChange={handleInputChange}
                    >
                      <option value="to-do">To Do</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="assignee" className="form-label">Assignee</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="assignee" 
                      name="assignee"
                      value={newTask.assignee}
                      onChange={handleInputChange}
                      placeholder="Leave blank for unassigned"
                    />
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="dueDate" className="form-label">Due Date</label>
                      <input 
                        type="date" 
                        className="form-control" 
                        id="dueDate" 
                        name="dueDate"
                        value={newTask.dueDate}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="credits" className="form-label">Credits</label>
                      <input 
                        type="number" 
                        className="form-control" 
                        id="credits" 
                        name="credits"
                        value={newTask.credits}
                        onChange={handleInputChange}
                        min="0"
                      />
                    </div>
                  </div>
                  {newTask.status === 'in-progress' && (
                    <div className="mb-3">
                      <label htmlFor="progress" className="form-label">Progress ({newTask.progress}%)</label>
                      <input 
                        type="range" 
                        className="form-range" 
                        id="progress" 
                        name="progress"
                        value={newTask.progress}
                        onChange={handleInputChange}
                        min="0"
                        max="100"
                      />
                    </div>
                  )}
                </form>
              </div>
              <div className="modal-footer border-0">
                <button 
                  type="button" 
                  className="btn btn-light rounded-pill"
                  onClick={() => setShowAddModal(false)}
                >
                  Cancel
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary rounded-pill"
                  onClick={handleAddTask}
                  disabled={!newTask.name}
                >
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Edit Task Modal */}
      {showEditModal && currentTask && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow">
              <div className="modal-header border-0">
                <h5 className="modal-title fw-bold">Edit Task</h5>
                <button type="button" className="btn-close" onClick={() => setShowEditModal(false)}></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="edit-name" className="form-label">Task Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="edit-name" 
                      name="name"
                      value={currentTask.name}
                      onChange={(e) => handleInputChange(e, 'edit')}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="edit-status" className="form-label">Status</label>
                    <select 
                      className="form-select" 
                      id="edit-status" 
                      name="status"
                      value={currentTask.status}
                      onChange={(e) => handleInputChange(e, 'edit')}
                    >
                      <option value="to-do">To Do</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="edit-assignee" className="form-label">Assignee</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="edit-assignee" 
                      name="assignee"
                      value={currentTask.assignee}
                      onChange={(e) => handleInputChange(e, 'edit')}
                      placeholder="Leave blank for unassigned"
                    />
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="edit-dueDate" className="form-label">Due Date</label>
                      <input 
                        type="date" 
                        className="form-control" 
                        id="edit-dueDate" 
                        name="dueDate"
                        value={currentTask.dueDate}
                        onChange={(e) => handleInputChange(e, 'edit')}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="edit-credits" className="form-label">Credits</label>
                      <input 
                        type="number" 
                        className="form-control" 
                        id="edit-credits" 
                        name="credits"
                        value={currentTask.credits}
                        onChange={(e) => handleInputChange(e, 'edit')}
                        min="0"
                      />
                    </div>
                  </div>
                  {currentTask.status !== 'completed' && (
                    <div className="mb-3">
                      <label htmlFor="edit-progress" className="form-label">Progress ({currentTask.progress}%)</label>
                      <input 
                        type="range" 
                        className="form-range" 
                        id="edit-progress" 
                        name="progress"
                        value={currentTask.progress}
                        onChange={(e) => handleInputChange(e, 'edit')}
                        min="0"
                        max="100"
                      />
                    </div>
                  )}
                </form>
              </div>
              <div className="modal-footer border-0">
                <button 
                  type="button" 
                  className="btn btn-light rounded-pill"
                  onClick={() => setShowEditModal(false)}
                >
                  Cancel
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary rounded-pill"
                  onClick={handleSaveEdit}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Modal Backdrop for both modals */}
      {(showAddModal || showEditModal) && (
        <div className="modal-backdrop fade show" style={{ display: 'none' }}></div>
      )}
    </div>
  );
};

export default Tasks;