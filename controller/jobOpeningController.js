// const { Op } = require('sequelize');
// // const { QueryTypes } = require('sequelize');
// // const logger = require('../helpers/winston');
// // const db = require('../helpers/init-mysql');
// const departmentModel = require('../models/departmentModel');
// const JobOpening = require('../models/JobMasterModel');

// const { validationResult } = require('express-validator');

// // Patients Registration Form Page

// // const getJobOpening = async (req, res) => {
// //     const departments = await departmentModel.findAll();

// //     const rows = await JobOpening.findAll();
// //     res.render('masterDashboard/jobOpening', {
// //         rows,
// //         departments,
// //         selectedDepartment: null,
// //     });
// // };
// const getJobOpening = async (req, res) => {
//     const departments = await departmentModel.findAll();

//     const rows = await JobOpening.findAll();
//     const selectedDepartment = null; // Add this line to initialize the variable
//     res.render('masterDashboard/jobOpening', {
//         rows,
//         departments,
//         selectedDepartment,
//     });
// };

// // const patientTable = async (req, res) => {
// //     const registerPatientTable = await getregisterPatientTable(); // search for the patient data
// //     res.render('patientPages/registrationPatientData', {
// //         registerPatientTable,
// //         moment,
// //     });
// //     return null;
// // };

// // const deletePatientTable = async (req, res) => {
// //     await deletePatient(req, res);
// // };

// // save
// const postJobOpenig = async (req, res) => {
//     const { department_id, description, location, job_id } = req.body;

//     try {
//         // const { aadhar, id } = req.body;

//         const departments = await departmentModel.findAll();
//         const rows = await JobOpening.findAll();
//         const errors = validationResult(req).array();

//         if (errors.length > 0) {
//             // return to form with errors
//             return res.render('masterDashboard/jobOpening', {
//                 errors,
//                 departments,
//                 rows,
//             });
//         }

//         // check for duplicate religion name before inserting/updating
//         const Job = await JobOpening.findOne({
//             where: { description, job_id: { [Op.ne]: job_id } },
//         });
//         if (Job) {
//             // Already Exists, return back to form
//             errors.push({ msg: 'This Job  is already saved' });
//             return res.render('masterDashboard/jobOpening', {
//                 errors,
//                 job_id,
//                 rows,
//                 departments,
//                 selectedDepartment: rows.department_id,
//             });
//         }

//         // create new patient
//         const saveJob = await Patient.create({
//             department_id,
//             description,
//             location,
//         });
//         //  console.log('saveJob', saveJob);
//         req.flash('success_msg', `Job  ${saveJob.description} is saved. `);
//         return res.redirect('/job_opening');
//     } catch (error) {
//         console.log(error);
//     }
//     return null;
// };

// // update

// // const updatePatient = async (req, res) => {
// //     const { id } = req.params;
// //     const rows = req.body;
// //     const user_id = req.user.id;
// //     const ip_addr =
// //         req.headers['x-forwarded-for'] ||
// //         req.remoteAddress ||
// //         req.socket.remoteAddress ||
// //         (req.socket ? req.socket.remoteAddress : null);
// //     const is_Active = req.body.is_Active ? 1 : 0;

// //     const {
// //         name,
// //         patient_type_id,
// //         age,
// //         gender,
// //         reg_date,
// //         reg_id,
// //         aadhar,
// //         ref_by,
// //         local_address,
// //         local_city,
// //         local_landmark,
// //         local_phone1,
// //         local_phone2,
// //         permanent_address,
// //         permanent_city,
// //         permanent_landmark,
// //         permanent_phone1,
// //         permanent_phone2,
// //         fathers_name,
// //         mothers_name,
// //         spouse_name,
// //         religion,
// //         language,
// //         occupation,
// //         family_occupation,
// //         family_earning,
// //         remarks,
// //         buddy_name,
// //         buddy_relation,
// //         buddy_address,
// //         buddy_city,
// //         buddy_phone,
// //         buddy1_name,
// //         buddy1_relation,
// //         buddy1_address,
// //         buddy1_city,
// //         buddy1_phone,
// //         admit_name,
// //         admit_relation,
// //         admit_address,
// //         admit_phone,
// //         admit_age,
// //         admit_gender,
// //     } = req.body;

// //     const patientTypes = await getPatientTypes();
// //     const religions = await getReligions();
// //     const languages = await getLanguages();
// //     const imageData = await Patient.findByPk(id);

// //     const { originalname, filename } = req.file || {};
// //     const errors = req.ValidateErrors;
// //     if (errors.length > 0) {
// //         // return to form with errors
// //         return res.render('masterDashboard/jobOpening', {
// //             errors,

// //             rows: req.body,
// //             patientTypes,
// //             languages,
// //             religions,
// //             selectedPatientType: req.body.patient_type_id,
// //             selectedReligion: req.body.religion,
// //             selectedLanguage: req.body.language,
// //             selectedGender: req.body.gender,
// //             selectedAGender: req.body.admit_gender,
// //             img: imageData.image_data,
// //         });
// //     }

// //     // check for duplicate religion name before inserting/updating
// //     const patient = await Patient.findOne({
// //         where: { aadhar, id: { [Op.ne]: id } },
// //     });

// //     if (patient) {
// //         // Already Exists, return back to form
// //         errors.push({ msg: 'This patient is already saved' });
// //         return res.render('masterDashboard/jobOpening', {
// //             errors,
// //             id,
// //             rows: req.body,
// //             patientTypes,
// //             religions,
// //             languages,
// //             selectedPatientType: rows.patient_type_id,
// //             selectedReligion: rows.religion,
// //             selectedLanguage: rows.language,
// //             selectedGender: rows.gender,
// //             selectedAGender: rows.admit_gender,
// //             img: imageData.image_data,
// //         });
// //     }

// //     try {
// //         if (id !== '') {
// //             const updatedPatient = await Patient.update(
// //                 {
// //                     name,
// //                     patient_type_id,
// //                     age,
// //                     gender,
// //                     reg_date,
// //                     reg_id,
// //                     aadhar,
// //                     pic_filename: originalname || req.body.pic_filename,
// //                     image_data: filename || imageData.image_data,
// //                     ref_by,
// //                     local_address,
// //                     local_city,
// //                     local_landmark,
// //                     local_phone1,
// //                     local_phone2,
// //                     permanent_address,
// //                     permanent_city,
// //                     permanent_landmark,
// //                     permanent_phone1,
// //                     permanent_phone2,
// //                     fathers_name,
// //                     mothers_name,
// //                     spouse_name,
// //                     religion,
// //                     language,
// //                     occupation,
// //                     family_occupation,
// //                     family_earning,
// //                     remarks,
// //                     buddy_name,
// //                     buddy_relation,
// //                     buddy_address,
// //                     buddy_city,
// //                     buddy_phone,
// //                     buddy1_name,
// //                     buddy1_relation,
// //                     buddy1_address,
// //                     buddy1_city,
// //                     buddy1_phone,
// //                     admit_name,
// //                     admit_relation,
// //                     admit_address,
// //                     admit_phone,
// //                     admit_age,
// //                     admit_gender,
// //                     isActive: is_Active,

// //                     ip_addr,
// //                     user_id,
// //                 },
// //                 { where: { id } }
// //             );
// //             //   console.log('updatedPatient', updatedPatient);
// //             if (updatedPatient) {
// //                 req.flash('success_msg', 'Data Successfully updated.');
// //             }
// //             return res.redirect('/patient_docs/register');
// //         }
// //     } catch (err) {
// //         logger.error(err);
// //     }
// //     return null;
// // };

// // edit

// // const editPatient = async (req, res) => {
// //     const { id } = req.params;
// //     try {
// //         const rows = await Patient.findByPk(id);
// //         if (rows === null) {
// //             //  console.log('inside blank');
// //             req.flash('error_msg', `No record found for editing`);
// //             return res.redirect('/job-opening/jobOpeningTable');
// //         }
// //         const img = rows.image_data;
// //         const patientTypes = await getPatientTypes();
// //         const religions = await getReligions();
// //         const languages = await getLanguages();

// //         res.render('masterDashboard/jobOpening', {
// //             rows,
// //             img,
// //             patientTypes,
// //             languages,
// //             religions,
// //             selectedPatientType: rows.patient_type_id,
// //             selectedReligion: rows.religion,
// //             selectedLanguage: rows.language,
// //             selectedGender: rows.gender,
// //             selectedAGender: rows.admit_gender,
// //         });
// //     } catch (error) {
// //         return error.message;
// //     }
// //     return null;
// // };

// // async function getDepartment() {
// //     try {
// //         // console.log(rows);
// //         return rows;
// //     } catch (error) {
// //         if (error) {
// //             logger.error("Can't fetch patient_type from database", error);
// //         }
// //         return null;
// //     }
// // }

// module.exports = {
//     getJobOpening,
//     postJobOpenig,
// };

const { Op } = require('sequelize');
const { QueryTypes } = require('sequelize');
const departmentModel = require('../models/departmentModel');
const JobOpening = require('../models/JobMasterModel');
const { validationResult } = require('express-validator');
const db = require('../helpers/init-mysql');
const logger = require('../helpers/winston');

const getJobOpening = async (req, res) => {
    try {
        const departments = await departmentModel.findAll();
        const rows = await JobOpening.findAll();

        res.render('masterDashboard/jobOpening', {
            rows,
            departments,
            selectedDepartment: null,
            isLogin: false,
        });
    } catch (error) {
        console.log(error);
    }
};

const postJobOpenig = async (req, res) => {
    const { department_id, description, location, job_id } = req.body;

    try {
        const departments = await departmentModel.findAll();
        const rows = await JobOpening.findAll();
        const errors = validationResult(req).array();

        if (errors.length > 0) {
            return res.render('masterDashboard/jobOpening', {
                errors,
                departments,
                rows,
                selectedDepartment: null,
            });
        }

        const Job = await JobOpening.findOne({
            where: { description },
        });

        if (Job) {
            errors.push({ msg: 'This Job is already saved' });
            return res.render('masterDashboard/jobOpening', {
                errors,
                job_id,
                rows,
                departments,
                selectedDepartment: rows.department_id,
            });
        }

        const saveJob = await JobOpening.create({
            department_id,
            description,
            location,
        });

        req.flash('success_msg', `Job ${saveJob.description} is saved.`);
        return res.redirect('/job-opening');
    } catch (error) {
        console.log(error);
    }
};

// Controller

const jobOpeningTable = async (req, res) => {
    const registerJob = await getJobOpeningTable();
    res.render('masterDashboard/jobOpeningTable', {
        registerJob,
    });
};

const updateJobOpening = async (req, res) => {
    const { job_id } = req.params;
    const { department_id, description, location } = req.body;
    const rows = await JobOpening.findAll();

    const departments = await departmentModel.findAll();

    const errors = validationResult(req).array();

    if (errors.length > 0) {
        return res.render('masterDashboard/jobOpening', {
            errors,
            departments,
            rows: req.body,
            selectedDepartment: rows.department_id,
        });
    }

    const job = await JobOpening.findOne({
        where: { description },
    });

    if (job) {
        errors.push({ msg: 'This Job is already saved' });
        return res.render('masterDashboard/jobOpening', {
            errors,
            job_id,
            rows: req.body,
            departments,
            selectedDepartment: rows.department_id,
        });
    }

    try {
        const updateJob = await JobOpening.update(
            {
                department_id,
                description,
                location,
            },
            { where: { job_id } }
        );

        if (updateJob) {
            req.flash('success_msg', 'Data successfully updated.');
        }

        return res.redirect('/job-opening/jobOpeningTable');
    } catch (err) {
        logger.error(err);
    }
};

const editJobOpening = async (req, res) => {
    const { job_id } = req.params;

    try {
        const rows = await JobOpening.findByPk(job_id);

        if (rows === null) {
            req.flash('error_msg', 'No record found for editing');
            return res.redirect('/job-opening/jobOpeningTable');
        }

        const departments = await departmentModel.findAll();

        res.render('masterDashboard/jobOpening', {
            job_id,
            rows,
            departments,
            selectedDepartment: rows.department_id,
        });
    } catch (error) {
        logger.error(error);
    }
};

const deleteJob = async (req, res) => {
    await deleteJobOpening(req, res);
};

// Delete Job Opening from Database
async function deleteJobOpening(req, res) {
    const { job_id } = req.params;
    try {
        await JobOpening.destroy({
            where: {
                job_id,
            },
        });

        req.flash('success_msg', 'Data deleted successfully.');
        return res.redirect('/job-opening/jobOpeningTable');
    } catch (error) {
        if (error) {
            if (
                error.message.includes(
                    'Cannot delete or update a parent row: a foreign key constraint fails'
                )
            ) {
                req.flash(
                    'error_msg',
                    'Cannot delete this record as it is already in use.'
                );
                return res.redirect('/job-opening/jobOpeningTable');
            }
            logger.error("Can't delete User Roles from the database ->", error);
        }
        return null;
    }
}

async function getJobOpeningTable() {
    try {
        const rows = await db.query('SELECT * FROM jobOpeningTableView', {
            type: QueryTypes.SELECT,
        });

        console.log('rows =>', rows);
        return rows;
    } catch (error) {
        logger.error("Can't fetch Job Opening from the database", error);
    }
}

module.exports = {
    getJobOpening,
    postJobOpenig,
    deleteJob,
    jobOpeningTable,
    updateJobOpening,
    editJobOpening,
};
