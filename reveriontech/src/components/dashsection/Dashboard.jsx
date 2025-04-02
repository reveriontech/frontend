import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'chart.js/auto';

const Dashboard = () => {
  const [period, setPeriod] = useState('monthly');
  
  // Sample data for charts
  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [4500, 6200, 5800, 8500, 7300, 9500],
        borderColor: '#4ade80',
        backgroundColor: 'rgba(74, 222, 128, 0.1)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#ffffff',
        pointBorderColor: '#4ade80',
        pointBorderWidth: 1,
        pointRadius: 0,
        pointHoverRadius: 4
      }
    ]
  };
  
  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [75000, 82000, 68000, 91000, 87000, 95000],
        backgroundColor: '#3b82f6',
        borderRadius: 4,
        maxBarThickness: 20
      },
      {
        label: 'Views',
        data: [65000, 75000, 61000, 82000, 79000, 90000],
        backgroundColor: '#a855f7',
        borderRadius: 4,
        maxBarThickness: 20
      }
    ]
  };

  // User statistics mini-chart data
  const userStatsData = {
    barHeights: [15, 22, 13, 25, 18, 27, 20, 24, 16, 23, 19, 26]
  };

  const handlePeriodChange = (newPeriod) => {
    setPeriod(newPeriod);
    
    // Update chart data based on period
    let labels = [];
    let salesValues = [];
    let viewsValues = [];
    
    if (newPeriod === 'daily') {
      labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      salesValues = [8500, 9200, 7800, 12500, 11300, 9800, 10500];
      viewsValues = [7500, 8200, 7000, 11000, 10000, 8800, 9500];
    } else if (newPeriod === 'weekly') {
      labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
      salesValues = [42000, 38000, 46000, 52000];
      viewsValues = [38000, 35000, 42000, 47000];
    } else {
      labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
      salesValues = [75000, 82000, 68000, 91000, 87000, 95000];
      viewsValues = [65000, 75000, 61000, 82000, 79000, 90000];
    }
    
    // Update the bar chart
    if (barChartRef.current) {
      barChartRef.current.data.labels = labels;
      barChartRef.current.data.datasets[0].data = salesValues;
      barChartRef.current.data.datasets[1].data = viewsValues;
      barChartRef.current.update();
    }
  };
  
  // Chart references
  const lineChartRef = useRef(null);
  const barChartRef = useRef(null);
  
  // Initialize charts
  useEffect(() => {
    // Line chart for revenue
    const lineCtx = document.getElementById('revenue-chart');
    if (lineCtx && !lineChartRef.current) {
      lineChartRef.current = new Chart(lineCtx, {
        type: 'line',
        data: revenueData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              backgroundColor: 'rgba(0,0,0,0.7)',
              padding: 8,
              cornerRadius: 4
            }
          },
          scales: {
            x: {
              grid: {
                display: false
              },
              ticks: {
                display: false
              }
            },
            y: {
              beginAtZero: true,
              grid: {
                display: false
              },
              ticks: {
                display: false
              }
            }
          },
          elements: {
            line: {
              borderWidth: 2
            }
          }
        }
      });
    }
    
    // Bar chart for sales & views
    const barCtx = document.getElementById('sales-chart');
    if (barCtx && !barChartRef.current) {
      barChartRef.current = new Chart(barCtx, {
        type: 'bar',
        data: salesData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              align: 'start',
              labels: {
                boxWidth: 8,
                usePointStyle: true,
                pointStyle: 'circle',
                padding: 20
              }
            },
            tooltip: {
              backgroundColor: 'rgba(0,0,0,0.7)',
              padding: 8,
              cornerRadius: 4
            }
          },
          scales: {
            x: {
              grid: {
                display: false
              }
            },
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(0,0,0,0.05)'
              }
            }
          }
        }
      });
    }
    
    // Draw the circular progress charts
    const createCircularProgress = (element, percentage, color) => {
      const canvas = document.getElementById(element);
      if (canvas) {
        const ctx = canvas.getContext('2d');
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = canvas.width / 2 - 8;
        
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Background circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = '#f0f0f0';
        ctx.lineWidth = 10;
        ctx.stroke();
        
        // Progress arc
        const startAngle = -0.5 * Math.PI; // Start from the top
        const endAngle = startAngle + (percentage / 100) * 2 * Math.PI;
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.strokeStyle = color;
        ctx.lineWidth = 10;
        ctx.stroke();
      }
    };
    
    // Draw the circular progress charts
    createCircularProgress('monthly-progress', 78, '#3b82f6');
    createCircularProgress('annual-progress', 75, '#a855f7');
    createCircularProgress('user-progress', 78, '#3b82f6');
    
    // Cleanup
    return () => {
      if (lineChartRef.current) {
        lineChartRef.current.destroy();
        lineChartRef.current = null;
      }
      if (barChartRef.current) {
        barChartRef.current.destroy();
        barChartRef.current = null;
      }
    };
  }, []);

  return (
    <div className="dashboard-page">
      {/* Top row - Cards */}
      <div className="row g-4 mb-4">
        <div className="col-md-6 col-lg-3">
          <div className="card border-0" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <div className="card-body p-3">
              <div className="mb-3">
                <small className="text-uppercase text-muted fw-medium">Average Weekly Sales</small>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-1">
                <h3 className="fw-bold fs-4 mb-0">$9,568</h3>
                <span className="text-success small">+1.5%</span>
              </div>
              <div className="chart-container" style={{ height: "50px" }}>
                <canvas id="revenue-chart"></canvas>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-9">
          <div className="card border-0" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <div className="card-body p-3">
              <div className="row">
                <div className="col-6 col-md-3 text-center border-end">
                  <div className="p-2">
                    <div className="d-inline-block rounded-circle bg-warning-subtle p-2 mb-2" style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <i className="bi bi-box-seam text-warning"></i>
                    </div>
                    <h4 className="mb-0 fs-4">85,246</h4>
                    <small className="text-muted">Orders</small>
                  </div>
                </div>
                <div className="col-6 col-md-3 text-center border-end">
                  <div className="p-2">
                    <div className="d-inline-block rounded-circle bg-success-subtle p-2 mb-2" style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <i className="bi bi-currency-dollar text-success"></i>
                    </div>
                    <h4 className="mb-0 fs-4">$96,147</h4>
                    <small className="text-muted">Revenue</small>
                  </div>
                </div>
                <div className="col-6 col-md-3 text-center border-end">
                  <div className="p-2">
                    <div className="d-inline-block rounded-circle bg-danger-subtle p-2 mb-2" style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <i className="bi bi-activity text-danger"></i>
                    </div>
                    <h4 className="mb-0 fs-4">846</h4>
                    <small className="text-muted">Activities</small>
                  </div>
                </div>
                <div className="col-6 col-md-3 text-center">
                  <div className="p-2">
                    <div className="d-inline-block rounded-circle bg-info-subtle p-2 mb-2" style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <i className="bi bi-people text-info"></i>
                    </div>
                    <h4 className="mb-0 fs-4">$84,472</h4>
                    <small className="text-muted">Engagement</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle row */}
      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <div className="card border-0" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <div className="card-body p-3">
              <div className="mb-3">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title mb-0">User Statistics</h5>
                </div>
              </div>
              <div className="row">
                <div className="col-6 border-end">
                  <div>
                    <h4 className="mb-0 fs-4">97.4K</h4>
                    <small className="text-muted">Total Users</small>
                    <div className="text-success small mt-1">+2.5% from last month</div>
                    <div className="mt-3">
                      <div className="d-flex" style={{ height: "55px" }}>
                        {userStatsData.barHeights.map((height, index) => (
                          <div 
                            key={index} 
                            className="mx-1 bg-danger" 
                            style={{ 
                              width: "4px", 
                              height: `${height}px`,
                              marginTop: "auto",
                              borderRadius: "1px" 
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div>
                    <h4 className="mb-0 fs-4">42.5K</h4>
                    <small className="text-muted">Active Users</small>
                    <div className="mt-4">
                      <div className="d-flex align-items-center">
                        <div className="position-relative me-3" style={{ width: "60px", height: "60px" }}>
                          <canvas id="user-progress" width="60" height="60"></canvas>
                          <div className="position-absolute top-50 start-50 translate-middle">
                            <h6 className="mb-0 fw-bold">78%</h6>
                          </div>
                        </div>
                        <div>
                          <small className="text-muted d-block">24K users increased</small>
                          <small className="text-muted d-block">from last month</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="card border-0" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <div className="card-body p-3">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3">
                <h5 className="card-title mb-2 mb-md-0">Sales & Views</h5>
                <div className="btn-group" role="group" style={{ fontSize: "0.85rem" }}>
                  <button 
                    className={`btn ${period === 'daily' ? 'btn-primary' : 'btn-outline-primary'} px-3 py-1`}
                    onClick={() => handlePeriodChange('daily')}
                  >
                    Daily
                  </button>
                  <button 
                    className={`btn ${period === 'weekly' ? 'btn-primary' : 'btn-outline-primary'} px-3 py-1`}
                    onClick={() => handlePeriodChange('weekly')}
                  >
                    Weekly
                  </button>
                  <button 
                    className={`btn ${period === 'monthly' ? 'btn-primary' : 'btn-outline-primary'} px-3 py-1`}
                    onClick={() => handlePeriodChange('monthly')}
                  >
                    Monthly
                  </button>
                </div>
              </div>
              <div className="chart-container" style={{ height: "193px" }}>
                <canvas id="sales-chart"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom cards */}
      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <div className="card border-0" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <div className="card-body p-3">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div>
                  <small className="text-muted">Sales This Year</small>
                  <h4 className="mb-0 fs-4">$65,129</h4>
                </div>
                <span className="text-success small">+8.4%</span>
              </div>
              <div className="mb-2 d-flex justify-content-between align-items-center">
                <small className="text-muted">YTD vs Goal</small>
                <small className="fw-medium">76%</small>
              </div>
              <div className="progress" style={{ height: "6px", borderRadius: "3px" }}>
                <div className="progress-bar" style={{ width: '76%', backgroundColor: '#3b82f6' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <div className="card-body p-3">
              <div className="text-center mb-2">
                <small className="text-muted">Monthly</small>
                <h4 className="mb-0 fs-4">65,127</h4>
                <p className="text-muted small mb-3">Avg. monthly goal</p>
              </div>
              <div className="d-flex justify-content-center">
                <div className="position-relative" style={{ width: "100px", height: "100px" }}>
                  <canvas id="monthly-progress" width="100" height="100"></canvas>
                  <div className="position-absolute top-50 start-50 translate-middle">
                    <h5 className="mb-0 fw-bold">78%</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <div className="card-body p-3">
              <div className="text-center mb-2">
                <small className="text-muted">Annual</small>
                <h4 className="mb-0 fs-4">984,246</h4>
                <p className="text-muted small mb-3">Yearly goal projection</p>
              </div>
              <div className="d-flex justify-content-center">
                <div className="position-relative" style={{ width: "100px", height: "100px" }}>
                  <canvas id="annual-progress" width="100" height="100"></canvas>
                  <div className="position-absolute top-50 start-50 translate-middle">
                    <h5 className="mb-0 fw-bold">75%</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom sections */}
      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <div className="card border-0" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <div className="card-body p-3">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="card-title mb-0">Ongoing Projects</h6>
                <Link to="/portal/projects" className="btn btn-sm btn-outline-primary" style={{ fontSize: "0.75rem" }}>View All</Link>
              </div>
              <div className="projects-list">
                <div className="mb-3 pb-2 border-bottom">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="small fw-medium">Website Redesign</span>
                    <span className="small">65%</span>
                  </div>
                  <div className="progress" style={{ height: "4px", borderRadius: "2px" }}>
                    <div className="progress-bar bg-success" style={{ width: '65%' }}></div>
                  </div>
                </div>
                
                <div className="mb-3 pb-2 border-bottom">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="small fw-medium">Mobile App Development</span>
                    <span className="small">40%</span>
                  </div>
                  <div className="progress" style={{ height: "4px", borderRadius: "2px" }}>
                    <div className="progress-bar bg-warning" style={{ width: '40%' }}></div>
                  </div>
                </div>
                
                <div className="mb-0">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="small fw-medium">SEO Campaign</span>
                    <span className="small">80%</span>
                  </div>
                  <div className="progress" style={{ height: "4px", borderRadius: "2px" }}>
                    <div className="progress-bar bg-info" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <div className="card-body p-3">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="card-title mb-0">Campaign</h6>
                <Link to="/portal/campaigns" className="btn btn-sm btn-outline-primary" style={{ fontSize: "0.75rem" }}>View All</Link>
              </div>
              <div className="campaigns-list">
                <div className="d-flex align-items-center mb-3 pb-2 border-bottom">
                  <div className="campaign-icon bg-primary-subtle rounded-circle p-2 me-2" style={{ width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <i className="bi bi-megaphone text-primary small"></i>
                  </div>
                  <div className="flex-grow-1">
                    <p className="mb-0 small fw-medium">Social Media Campaign</p>
                    <div className="small text-muted">
                      <span>42 Tasks</span>
                      <span className="mx-1">•</span>
                      <span>8 Members</span>
                    </div>
                  </div>
                  <div className="campaign-progress">
                    <span className="badge bg-primary rounded-pill px-2" style={{ fontSize: "0.7rem" }}>75%</span>
                  </div>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="campaign-icon bg-success-subtle rounded-circle p-2 me-2" style={{ width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <i className="bi bi-envelope text-success small"></i>
                  </div>
                  <div className="flex-grow-1">
                    <p className="mb-0 small fw-medium">Email Marketing</p>
                    <div className="small text-muted">
                      <span>36 Tasks</span>
                      <span className="mx-1">•</span>
                      <span>5 Members</span>
                    </div>
                  </div>
                  <div className="campaign-progress">
                    <span className="badge bg-success rounded-pill px-2" style={{ fontSize: "0.7rem" }}>62%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <div className="card-body p-3">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="card-title mb-0">Recent Transactions</h6>
                <Link to="/portal/transactions" className="btn btn-sm btn-outline-primary" style={{ fontSize: "0.75rem" }}>View All</Link>
              </div>
              <div className="transactions-list">
                <div className="d-flex align-items-center mb-3 pb-2 border-bottom">
                  <div className="transaction-icon bg-success-subtle rounded-circle p-2 me-2" style={{ width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <i className="bi bi-arrow-down-left text-success small"></i>
                  </div>
                  <div className="flex-grow-1">
                    <p className="mb-0 small fw-medium">Payment from Client A</p>
                    <div className="small text-muted">Mar 28, 2025</div>
                  </div>
                  <div className="transaction-amount text-success small fw-medium">
                    +$4,750
                  </div>
                </div>
                
                <div className="d-flex align-items-center mb-3 pb-2 border-bottom">
                  <div className="transaction-icon bg-danger-subtle rounded-circle p-2 me-2" style={{ width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <i className="bi bi-arrow-up-right text-danger small"></i>
                  </div>
                  <div className="flex-grow-1">
                    <p className="mb-0 small fw-medium">Software Subscription</p>
                    <div className="small text-muted">Mar 26, 2025</div>
                  </div>
                  <div className="transaction-amount text-danger small fw-medium">
                    -$1,200
                  </div>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="transaction-icon bg-success-subtle rounded-circle p-2 me-2" style={{ width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <i className="bi bi-arrow-down-left text-success small"></i>
                  </div>
                  <div className="flex-grow-1">
                    <p className="mb-0 small fw-medium">Payment from Client B</p>
                    <div className="small text-muted">Mar 25, 2025</div>
                  </div>
                  <div className="transaction-amount text-success small fw-medium">
                    +$3,200
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;