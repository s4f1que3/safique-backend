"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaTypes = void 0;
const resume_1 = require("./schemaType/resume");
const contact_1 = require("./schemaType/contact");
const bio_1 = require("./schemaType/bio");
const projects_1 = require("./schemaType/projects");
exports.schemaTypes = [
    resume_1.fileType,
    bio_1.bioType,
    contact_1.contactType,
    projects_1.projectType
];
//# sourceMappingURL=index.js.map