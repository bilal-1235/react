 const employees = [
    {
    "employees": [
      {
        "id": 1,
        "email": "employee1@example.com",
        "password": "135",
        "tasks": [
          {
            "title": "Task 1 - Employee 1",
            "description": "Complete the monthly report",
            "date": "2024-11-20",
            "category": "Reports",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Task 2 - Employee 1",
            "description": "Attend the team meeting",
            "date": "2024-11-21",
            "category": "Meetings",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Task 3 - Employee 1",
            "description": "Submit the project draft",
            "date": "2024-11-22",
            "category": "Projects",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 2,
        "email": "employee2@example.com",
        "password": "135",
        "tasks": [
          {
            "title": "Task 1 - Employee 2",
            "description": "Fix bugs in the codebase",
            "date": "2024-11-20",
            "category": "Development",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Task 2 - Employee 2",
            "description": "Review PRs",
            "date": "2024-11-21",
            "category": "Code Review",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Task 3 - Employee 2",
            "description": "Prepare for client presentation",
            "date": "2024-11-22",
            "category": "Client Work",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 3,
        "email": "employee3@example.com",
        "password": "135",
        "tasks": [
          {
            "title": "Task 1 - Employee 3",
            "description": "Organize files in the shared drive",
            "date": "2024-11-20",
            "category": "Administration",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Task 2 - Employee 3",
            "description": "Prepare the quarterly budget",
            "date": "2024-11-21",
            "category": "Finance",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 4,
        "email": "employee4@example.com",
        "password": "135",
        "tasks": [
          {
            "title": "Task 1 - Employee 4",
            "description": "Design the new homepage layout",
            "date": "2024-11-20",
            "category": "Design",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Task 2 - Employee 4",
            "description": "Host a training session",
            "date": "2024-11-21",
            "category": "Training",
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true
          }
        ]
      },
      {
        "id": 5,
        "email": "employee5@example.com",
        "password": "135",
        "tasks": [
          {
            "title": "Task 1 - Employee 5",
            "description": "Write blog content for marketing",
            "date": "2024-11-20",
            "category": "Marketing",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Task 2 - Employee 5",
            "description": "Update the social media schedule",
            "date": "2024-11-21",
            "category": "Social Media",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Task 3 - Employee 5",
            "description": "Monitor campaign performance",
            "date": "2024-11-22",
            "category": "Analytics",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          }
        ]
      }
    ]
  }
 ];

 const admin = [{
  "admin": {
    "id": 1,
    "email": "admin@example.com",
    "password": "135"
  }
}];
export const setLocalStorage = ()=> {
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem ('employees'))
  const admin = JSON.parse(localStorage.getItem ('admin'))

  console.log(employees,admin)

}