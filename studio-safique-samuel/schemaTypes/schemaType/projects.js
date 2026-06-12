"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectType = void 0;
const sanity_1 = require("sanity");
exports.projectType = (0, sanity_1.defineType)({
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
        (0, sanity_1.defineField)({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        (0, sanity_1.defineField)({
            name: 'description',
            title: 'Description',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        (0, sanity_1.defineField)({
            name: 'tech_stack',
            title: 'Backend Tech Stack',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        (0, sanity_1.defineField)({
            name: 'link',
            title: 'Link',
            type: 'url',
            validation: (Rule) => Rule.required()
        }),
        (0, sanity_1.defineField)({
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'image',
            validation: (Rule) => Rule.required()
        })
    ]
});
//# sourceMappingURL=projects.js.map