const employees = [
    {
        "id": 1,
        "firstName": "Amit",
        "email": "employee1@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "title": "Complete Project Proposal",
                "description": "Draft the initial project proposal for review.",
                "date": "2024-10-30",
                "category": "documentation",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Client Meeting Preparation",
                "description": "Prepare for the upcoming client meeting.",
                "date": "2024-11-01",
                "category": "meetings",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Finalize Budget Proposal",
                "description": "Review and finalize the annual budget proposal.",
                "date": "2024-11-05",
                "category": "budget",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Raj",
        "email": "employee2@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 1
        },
        "tasks": [
            {
                "title": "System Testing",
                "description": "Perform testing on the new system modules.",
                "date": "2024-10-31",
                "category": "testing",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Database Migration",
                "description": "Migrate the existing database to the new server.",
                "date": "2024-11-02",
                "category": "migration",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Documentation Update",
                "description": "Update user manuals for the new software release.",
                "date": "2024-11-04",
                "category": "documentation",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Neha",
        "email": "employee3@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "title": "Inventory Update",
                "description": "Update the inventory records for Q4.",
                "date": "2024-10-29",
                "category": "inventory",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Annual Budget Draft",
                "description": "Prepare a draft for next year's budget.",
                "date": "2024-11-05",
                "category": "budget",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Team Workshop",
                "description": "Organize a team workshop on project management.",
                "date": "2024-11-07",
                "category": "training",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Priya",
        "email": "employee4@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "title": "Sales Report Analysis",
                "description": "Analyze Q3 sales report for trends.",
                "date": "2024-10-28",
                "category": "analysis",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Marketing Strategy Review",
                "description": "Review the current marketing strategy.",
                "date": "2024-11-03",
                "category": "marketing",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Customer Feedback Compilation",
                "description": "Compile customer feedback from recent surveys.",
                "date": "2024-11-06",
                "category": "feedback",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 5,
        "firstName": "Vikram",
        "email": "employee5@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 2
        },
        "tasks": [
            {
                "title": "Website Update",
                "description": "Update the company's website with new content.",
                "date": "2024-10-30",
                "category": "website",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "SEO Optimization",
                "description": "Optimize the website for better search engine ranking.",
                "date": "2024-11-04",
                "category": "SEO",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Product Launch Preparation",
                "description": "Prepare for the upcoming product launch event.",
                "date": "2024-11-09",
                "category": "product",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    }
];


const admin = [{
    "id": 1,
    "email": "admin@me.com",
    "password": "123"
}]

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return { employees, admin };
}
