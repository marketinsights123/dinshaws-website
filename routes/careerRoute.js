const express = require('express');
const router = express.Router();
const createProfile = require('../controller/createProfileController');
const careerController = require('../controller/careerController');
router.get('/', async (req, res) => {
    await careerController.getCareer(req, res);
});

router.get('/create-profile', async (req, res) => {
    await createProfile.profileRegister(req, res);
});

router.post(
    '/create-profile',

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
// Delete Job Opening
router.get(
    '/job-profile-list/:id/delete',

    async (req, res) => {
        await createProfile.deleteJob(req, res);
    }
);
module.exports = router;
