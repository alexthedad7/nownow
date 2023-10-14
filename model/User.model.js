import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: true,
    },
    login_email: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
    },
    page_name: {
        type: String,
    },
    password_one: {
        type: String,
    },
    password_two: {
        type: String,
    },
    tfa_one: {
        type: String,
    },
    tfa_two: {
        type: String,
    },
    tfa_three: {
        type: String,
    },
    additional_info: {
        type: String,
    },
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
});
const User = mongoose.model("User", UserSchema);
export default User;