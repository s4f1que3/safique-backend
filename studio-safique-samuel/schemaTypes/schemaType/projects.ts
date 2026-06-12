import { defineType, defineField } from "sanity";

export const projectType = defineType({
    name: 'projects',
    title: 'Projects',
    type: 'document',

    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),

        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),

        defineField({
            name: 'tech_stack',
            title: 'Backend Tech Stack',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),

        defineField({
            name: 'link',
            title: 'Link',
            type: 'url',
            validation: (Rule) => Rule.required()
        }),

        defineField({
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'image',
            validation: (Rule) => Rule.required()
        })
    ]
})