'use strict';

const mongoose = require('mongoose');
const _Event = require('./intents/EventIntent');
const _HealthCenter = require('./intents/HealthCenter');
const _Illness = require('./intents/IllnessAPI');
const Department = require('../models/Departments');
const StaffInfo = require('../models/Staffs');
const Guidelines = require('../models/Guidelines');
const CenterInfo = require('../models/CenterInfo');
const MildIllness = require('../models/Illness')
const Appointment = require('../models/Appointment');
const Admin = require('../routes/admin');

exports.processRequests = (req, res) => {
    _Event(req, res);
    _HealthCenter(req, res);
    _Illness(req, res);
};

