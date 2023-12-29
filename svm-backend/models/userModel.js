import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Your email address is required"],
        unique: true
    },
    username: {
        type: String,
        required: [true, "Your username is required"],
    },
    password: {
        type: String,
        required: [true, "Your password is required"],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    role: {
        type: String,
        enum: ['Admin', 'User'], 
        default: 'User'
    },
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

const User = mongoose.model("User", userSchema);

export default User;


// authorization for crud operation which is limited to admin(pre saved in database) 

/* app.get('/data', authenticateUser, (req, res) => {
    
    if (req.user.role === 'Admin') {
        // Admin-specific logic
        // Return admin-level data or perform admin actions
        res.status(200).json({ message: 'Admin data access' });
    } else {
        // For non-admin users
        // Return regular user data or actions
        res.status(200).json({ message: 'Regular user data access' });
    }
});
*/