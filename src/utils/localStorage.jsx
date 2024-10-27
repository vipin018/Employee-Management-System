const employees = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Complete Project Proposal",
                "description": "Draft the initial project proposal for review.",
                "date": "2024-10-30",
                "categories": ["documentation", "planning"],
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Client Meeting Preparation",
                "description": "Prepare for the upcoming client meeting.",
                "date": "2024-11-01",
                "categories": ["meetings", "client"],
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Finalize Budget Proposal",
                "description": "Review and finalize the annual budget proposal.",
                "date": "2024-11-05",
                "categories": ["budget", "finance"],
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "System Testing",
                "description": "Perform testing on the new system modules.",
                "date": "2024-10-31",
                "categories": ["testing", "development"],
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Database Migration",
                "description": "Migrate the existing database to the new server.",
                "date": "2024-11-02",
                "categories": ["migration", "database"],
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Documentation Update",
                "description": "Update user manuals for the new software release.",
                "date": "2024-11-04",
                "categories": ["documentation", "software"],
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Inventory Update",
                "description": "Update the inventory records for Q4.",
                "date": "2024-10-29",
                "categories": ["inventory", "records"],
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Annual Budget Draft",
                "description": "Prepare a draft for next year's budget.",
                "date": "2024-11-05",
                "categories": ["budget", "planning"],
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Team Workshop",
                "description": "Organize a team workshop on project management.",
                "date": "2024-11-07",
                "categories": ["training", "team"],
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Sales Report Analysis",
                "description": "Analyze Q3 sales report for trends.",
                "date": "2024-10-28",
                "categories": ["analysis", "sales"],
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Marketing Strategy Review",
                "description": "Review the current marketing strategy.",
                "date": "2024-11-03",
                "categories": ["marketing", "strategy"],
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Customer Feedback Compilation",
                "description": "Compile customer feedback from recent surveys.",
                "date": "2024-11-06",
                "categories": ["feedback", "customer"],
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Website Update",
                "description": "Update the company's website with new content.",
                "date": "2024-10-30",
                "categories": ["website", "content"],
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "SEO Optimization",
                "description": "Optimize the website for better search engine ranking.",
                "date": "2024-11-04",
                "categories": ["SEO", "marketing"],
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Product Launch Preparation",
                "description": "Prepare for the upcoming product launch event.",
                "date": "2024-11-09",
                "categories": ["product", "event"],
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
    "email": "admin@example.com",
    "password": "123"
}]


export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))


    console.log(employees,admin)
}
