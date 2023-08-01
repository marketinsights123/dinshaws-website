const express = require('express');
const router = express.Router();
const businessEnquiryController = require('../controller/businesEnquiryController');
const {
    businessEnquiryValidationRules,
    validate,
    validationResult,
} = require('../helpers/validators/businessEnquiryValidation');

router.get(
    '/',
    businessEnquiryValidationRules(),
    validate,
    async (req, res) => {
        await businessEnquiryController.getBusinessEnquiry(req, res);
    }
);

router.post(
    '/',
    businessEnquiryValidationRules(),
    validate,
    async (req, res) => {
        await businessEnquiryController.postBusinessEnquiry(req, res);
    }
);

module.exports = router;
