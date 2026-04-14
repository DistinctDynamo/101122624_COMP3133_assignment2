const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UsersSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, "Username required"],
        trim: true
    },
    email:{
        type: String,
        unique: true,
        required: [true, "Email required"],
        trim: true
    },
    password:{
        type: String,
        required: [true, "Password required"],
        trim: true
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

//UsersSchema.pre('save', function(next) {
//    this.updated_at = Date.now();
//});

UsersSchema.pre('save', async function() {
  try {
    this.updated_at = Date.now();

   if (!this.isModified('password')) return;
    
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
     
  } catch (error) {
     
  }
});

UsersSchema.methods.isValidPassword = async function(password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw new Error('Password comparison failed');
  }
};

module.exports = mongoose.model('Users', UsersSchema);