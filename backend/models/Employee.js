const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: [true, "First name required"],
        trim: true
    },
    last_name:{
        type: String,
        required: [true, "Last name required"],
        trim: true
    },
    email:{
        type: String,
        required: [true, "Email required"],
        trim: true,
        unique: true
    },
    gender:{
        type: String,
        enum: ["Male", "Female", "Other"],
        trim: true
    },
    designation:{
        type: String,
        required: [true, "Designation Required"],
        trim: true
    },
    salary:{
        type: Number,
        required: [true, "Salary Required"],
        min: [1000, "Salary must be at most 1000 dollars"]
    },
    date_of_joining:{
        type: Date,
        default: Date.now,
        required: true
    },
    department:{
        type: String,
        required: [true, "Department required"],
        trim: true
    },
    employee_photo:{
        type: String
    },
    created_at:{
        type: Date,
        default: Date.now
    },
    updated_at:{
        type: Date,
        default: Date.now
    }
})

employeeSchema.pre('save', function(next) {
    this.updated_at = Date.now();
});

module.exports = mongoose.model('Employee', employeeSchema);