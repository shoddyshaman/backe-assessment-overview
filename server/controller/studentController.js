const students = [
    {
        id:1,
        name:'Danny'
    },
    {
        id:2,
        name:'Miranda'
    },
    {
        id:3,
        name:'Trey'
    },
    {
        id:4,
        name:'Nelson'
    },
    {
        id:5,
        name:'Connor'
    }
    
]
let globalId = 6

module.exports = {
    getStudents: (req, res) => {
        res.status(200).send(students)
    },
    addStudent: (req,res) => {
        const { studentName } = req.body
        const newUser = {
            id:globalId,
            name:studentName
        }
        students.push(newUser)
        console.log(students)
        res.status(200).send(students)
    },
    updateStudent: (req,res) => {
        
    },
    deleteStudent: (req,res) => {
        const {id} = req.params
        const index = students.findIndex(e => e.id === +id)
        students.splice(index,1)
        res.status(200).send(students)
    }
}

