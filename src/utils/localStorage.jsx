const employees = [
  {
    id: 1,
    email: "john.doe@example.com",
    password: "password123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Report",
        description: "Compile Q1 financial data and create summary report.",
        date: "2025-06-10",
        category: "Finance"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Team Meeting",
        description: "Discuss project milestones with the team.",
        date: "2025-06-05",
        category: "Management"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Client Follow-up",
        description: "Follow up with client regarding proposal feedback.",
        date: "2025-06-02",
        category: "Client Relations"
      }
    ]
  },
  {
    id: 2,
    email: "jane.smith@example.com",
    password: "qwerty456",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Review",
        description: "Review the UI/UX designs of the new dashboard.",
        date: "2025-06-14",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Create Mockups",
        description: "Generate mockups for client presentation.",
        date: "2025-06-07",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Update Website",
        description: "Failed to deploy new website features on time.",
        date: "2025-06-01",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Logo Redesign",
        description: "Work on modernizing the company logo.",
        date: "2025-06-15",
        category: "Branding"
      }
    ]
  },
  {
    id: 3,
    email: "michael.brown@example.com",
    password: "letmein789",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Security Audit",
        description: "Run a security audit on backend systems.",
        date: "2025-06-13",
        category: "IT"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Patch Management",
        description: "Apply patches to production servers.",
        date: "2025-06-08",
        category: "IT"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Network Downtime",
        description: "Unresolved server downtime issue.",
        date: "2025-06-03",
        category: "Infrastructure"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Firewall Rules Update",
        description: "Adjust firewall rules to enhance security.",
        date: "2025-06-14",
        category: "IT"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "VPN Setup",
        description: "Configure remote access VPN.",
        date: "2025-06-04",
        category: "IT"
      }
    ]
  },
  {
    id: 4,
    email: "lisa.jones@example.com",
    password: "admin321",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Blog Post Draft",
        description: "Write draft for the next company blog post.",
        date: "2025-06-13",
        category: "Content"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Monthly Newsletter",
        description: "Create and send newsletter for June.",
        date: "2025-06-06",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Campaign Strategy",
        description: "Failed to submit marketing campaign plan.",
        date: "2025-06-01",
        category: "Marketing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Social Media Schedule",
        description: "Plan posts for next 2 weeks.",
        date: "2025-06-14",
        category: "Social Media"
      }
    ]
  },
  {
    id: 5,
    email: "david.wilson@example.com",
    password: "securePass987",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Code Review",
        description: "Review PRs submitted by frontend team.",
        date: "2025-06-13",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Database Optimization",
        description: "Improve query performance.",
        date: "2025-06-05",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Bug Fix Sprint",
        description: "Failed to resolve all high-priority bugs.",
        date: "2025-06-02",
        category: "QA"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "API Documentation",
        description: "Update Swagger API docs.",
        date: "2025-06-14",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Refactor Service Layer",
        description: "Refactor backend services for modularity.",
        date: "2025-06-04",
        category: "Architecture"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "CI/CD Pipeline Setup",
        description: "Configure automated deployment.",
        date: "2025-06-15",
        category: "DevOps"
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "adminPass123"
  }
];


export const setLocalStorage = ()=>{
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
  const employees =JSON.parse(localStorage.getItem('employees'))
  const admin =JSON.parse(localStorage.getItem('admin'))
  
  return {employees,admin}
}