'use strict';

const mongoose = require('mongoose');
const Event = require('../models/Events');
const Department = require('../models/Departments');
const DocInfo = require('../models/DocInfo');

function SampleEvent(req, res) {
    Event.findOne({}, function (err, events) {
        res.json({
            "fulfillmentText": events.eventDetails,
            "outputContexts": []
        });
    })
}

function SampleDepartment(req, res) {
    Department.findOne({}, function (err, department) {
        res.json({
            "fulfillmentText": department.depName,
            "outputContexts": []
        });
    })
}

function SampleDocInfo(req, res) {
    Department.findOne({}, function (err, department) {
        res.json({
            "fulfillmentText": department.depName,
            "outputContexts": []
        });
    })
}
exports.processRequests = (req, res) => {
    SampleEvent(req, res);
};

exports.processRequests = (req, res) => {
    SampleDepartment(req, res);
};

exports.processRequests = (req, res) => {
    SampleDocInfo(req, res);
};