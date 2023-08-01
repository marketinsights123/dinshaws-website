const express = require('express');
const router = express.Router();
const createProfile = require('../controller/createProfileController');
const {
    profileValidationRule,
    validate,
} = require('../helpers/validators/profileValidation');
router.get(
    '/create-profile',
    profileValidationRule(),
    validate,
    async (req, res) => {
        await createProfile.profileRegister(req, res);
    }
);

router.post(
    '/create-profile',
    profileValidationRule(),
    validate,
    async (req, res) => {
        await createProfile.saveProfile(req, res);
    }
);
router.get(
    '/job-profile-list',

    async (req, res) => {
        await createProfile.jobProfileList(req, res);
    }
);
module.exports = router;
