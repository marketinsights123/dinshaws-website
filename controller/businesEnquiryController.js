const businessEnquiryModel = require('../models/businessEnquiryModel');
const { validationResult } = require('express-validator');
const sendActivationLinkEmail = require('../helpers/businessMailSend');
const logger = require('../helpers/winston');

const getBusinessEnquiry = async (req, res) => {
    res.render('businessEnquiry');
};

const postBusinessEnquiry = async (req, res) => {
    const { id, name, email, mobile, purpose, location, message } = req.body;

    try {
        const errors = validationResult(req).array();
        if (errors.length > 0) {
            return res.render('businessEnquiry', {
                errors,
                id,
                name,
                email,
                mobile,
                purpose,
                location,
                message,
            });
        }

        const saveEnquiry = new businessEnquiryModel({
            name,
            email,
            mobile,
            purpose,
            location,
            message,
        });
        const savedEnquiry = await saveEnquiry.save();
        sendActivationLinkEmail(
            req,
            res,
            savedEnquiry.email,
            savedEnquiry.purpose
        );
        req.flash(
            'success_msg',
            `Successfully submitted your Business Enquiry Please Check Your Mail.`
        );
        return res.redirect('/business-enquiry');
    } catch (error) {
        logger.error(error);
        return next(error);
    }
};

module.exports = {
    getBusinessEnquiry,
    postBusinessEnquiry,
};
