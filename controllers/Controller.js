'use strict';

const mongoose = require('mongoose');
const Event = require('../models/Events');
const Department = require('../models/Departments');
const StaffInfo = require('../models/Staffs');
const Guidelines = require('../models/Guidelines');
const CenterInfo = require('../models/CenterInfo');
const MildIllness = require('../models/Illness')
const Appointment = require('../models/Appointment');
const Admin = require('../routes/admin');


function _Event(req, res) {
    let intent_name = req.body.queryResult.intent.displayName;
    console.log
    if (intent_name == 'Events') {
        Event.find({}, function (err, events) {
            const event = events[0];
            var result = "The latest event name is " + event.eventTitle;
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": "What would you like to know about Event?",
                            "quickReplies": [
                                "Upcoming",
                                "Latest",
                                "Previous"
                            ]
                        },
                        "platform": "FACEBOOK"
                    },
                    {
                        "text": {
                            "text": [
                                result
                            ]
                        }
                    }
                ]
            });
        });
        
    }
    if(intent_name == "Events - latest - more1 - name") {
        Event.find({}, function (err, events) {
            const event = events[0];
            var result = "The latest events name is " + event.eventTitle;
            
            
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "Event",
                                "Health Center",
                                "Illness",
                                "Set Appointment",
                                "Visit Site",
                                "More"
                            ]
                        },
                        "platform": "FACEBOOK"
                    },
                    {
                        "text": {
                            "text": [
                                ""
                            ]
                        }
                    }
                ]
            });
        }).sort({ datePosted: -1 });
    }

    if(intent_name == "Events - latest - more1 - location") {
        Event.find({}, function (err, events) {
            const event = events[0];
            var result = "The latest events location is " + event.eventLocation;
            
            
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "Event",
                                "Health Center",
                                "Illness",
                                "Set Appointment",
                                "Visit Site",
                                "More"
                            ]
                        },
                        "platform": "FACEBOOK"
                    },
                    {
                        "text": {
                            "text": [
                                ""
                            ]
                        }
                    }
                ]
            });
        }).sort({ datePosted: -1 });
    }

    if(intent_name == "Events - latest - more1 - details") {
        Event.find({}, function (err, events) {
            const event = events[0];
            var result = "The latest events details is " + event.eventDetails;
            
            
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "Event",
                                "Health Center",
                                "Illness",
                                "Set Appointment",
                                "Visit Site",
                                "More"
                            ]
                        },
                        "platform": "FACEBOOK"
                    },
                    {
                        "text": {
                            "text": [
                                ""
                            ]
                        }
                    }
                ]
            });
        }).sort({ datePosted: -1 });
    }

    if(intent_name == "Events - latest - more1 - requirements") {
        Event.find({}, function (err, events) {
            const event = events[0];
            var result = "The latest events requirements is " + event.eventRequire;
            
            
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "Event",
                                "Health Center",
                                "Illness",
                                "Set Appointment",
                                "Visit Site",
                                "More"
                            ]
                        },
                        "platform": "FACEBOOK"
                    },
                    {
                        "text": {
                            "text": [
                                ""
                            ]
                        }
                    }
                ]
            });
        }).sort({ datePosted: -1 });
    }

    if(intent_name == "Events - latest - more1 - process") {
        Event.find({}, function (err, events) {
            const event = events[0];
            var result = "The latest events process is " + event.eventProcess;
            
            
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "Event",
                                "Health Center",
                                "Illness",
                                "Set Appointment",
                                "Visit Site",
                                "More"
                            ]
                        },
                        "platform": "FACEBOOK"
                    },
                    {
                        "text": {
                            "text": [
                                ""
                            ]
                        }
                    }
                ]
            });
        }).sort({ datePosted: -1 });
    }

    if(intent_name == "Events - latest - more1 - participants") {
        Event.find({}, function (err, events) {
            const event = events[0];
            var result = "The latest events participants is " + event.eventParticipant;
            
            
            res.json({
                "fulfillmentMessages": [
                    {
                        "quickReplies": {
                            "title": result,
                            "quickReplies": [
                                "Event",
                                "Health Center",
                                "Illness",
                                "Set Appointment",
                                "Visit Site",
                                "More"
                            ]
                        },
                        "platform": "FACEBOOK"
                    },
                    {
                        "text": {
                            "text": [
                                ""
                            ]
                        }
                    }
                ]
            });
        }).sort({ datePosted: -1 });
    }

    if (intent_name == 'Events - latest') {
            Event.find({}, function (err, events) {
                const event = events[0];
                var result = "The latest events " + event.eventTitle + " will be going to held  in " + event.eventLocation + ". So in order to participate to the event, you are required to bring " + event.eventRequire + ". The process is to " + event.eventProcess + " and the participants are " + event.eventParticipant;
                
                
                res.json({
                    "fulfillmentMessages": [
                        {
                            "quickReplies": {
                                "title": result,
                                "quickReplies": [
                                    "Event",
                                    "Health Center",
                                    "Illness",
                                    "Set Appointment",
                                    "Visit Site",
                                    "More"
                                ]
                            },
                            "platform": "FACEBOOK"
                        },
                        {
                            "text": {
                                "text": [
                                    ""
                                ]
                            }
                        }
                    ]
                });
            }).sort({ datePosted: -1 });
        }
        if (intent_name == 'Events - previous') {
            Event.find({}, function (err, events) {
                const event = events[1];
                var result = "The previouse events " + event.eventTitle + " will be going to held  in " + event.eventLocation + ". So in order to participate to the event, you are required to bring " + event.eventRequire + ". The process is to " + event.eventProcess + " and the participants are " + event.eventParticipant;
                
                
                res.json({
                    "fulfillmentMessages": [
                        {
                            "quickReplies": {
                                "title": result,
                                "quickReplies": [
                                    "Event",
                                    "Health Center",
                                    "Illness",
                                    "Set Appointment",
                                    "Visit Site",
                                    "More"
                                ]
                            },
                            "platform": "FACEBOOK"
                        },
                        {
                            "text": {
                                "text": [
                                    ""
                                ]
                            }
                        }
                    ]
                });
                }).sort({ datePosted: -1 });
            }
            if (intent_name == 'Events - upcoming') {
                Event.find({}, function (err, events) {
                    const event = events[0];
                    let eventDate = event.datePosted;
                    let dateToday = Date.now();

                    var result = "The upcoming" + event.eventTitle + " will be going to held  in " + event.eventLocation + ". So in order to participate to the event, you are required to bring " + event.eventRequire + ". The process is to " + event.eventProcess + " and the participants are " + event.eventParticipant;
                    
                    if(dateToday < eventDate) {
                        res.json({
                            "fulfillmentMessages": [
                                {
                                    "quickReplies": {
                                        "title": result,
                                        "quickReplies": [
                                            "Event",
                                            "Health Center",
                                            "Illness",
                                            "Set Appointment",
                                            "Visit Site",
                                            "More"
                                        ]
                                    },
                                    "platform": "FACEBOOK"
                                },
                                {
                                    "text": {
                                        "text": [
                                            ""
                                        ]
                                    }
                                }
                            ]
                        });
                    }
                    else {
                        res.json({
                            "fulfillmentMessages": [
                                {
                                    "quickReplies": {
                                        "title": "There's no upcoming event.",
                                        "quickReplies": [
                                            "Event",
                                            "Health Center",
                                            "Illness",
                                            "Set Appointment",
                                            "Visit Site"
                                        ]
                                    },
                                    "platform": "FACEBOOK"
                                },
                                {
                                    "text": {
                                        "text": [
                                            ""
                                        ]
                                    }
                                }
                            ]
                        });
                    }
                    
                    
                }).sort({ datePosted: -1 });
            }

}


exports.processRequests = (req, res) => {

    _Event(req, res);
};

