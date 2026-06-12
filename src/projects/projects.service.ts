import { Injectable } from "@nestjs/common";
import { sanityService } from "src/sanity/sanity.service";
import { projectsDTO, new_projectsDTO } from "./projects.dto";

@Injectable()
export class projectsService {

    async createProject (dto: projectsDTO, thumbnail: any) {
        try {
            const asset = await sanityService.assets.upload(
                'image', thumbnail.buffer, { filename: thumbnail.originalname }
            );
            await sanityService.create({
                _type: 'projects',
                title: dto.title,
                description: dto.description,
                tech_stack: dto.tech_stack,
                link: dto.link,
                thumbnail: {
                    _type: 'image',
                    asset: { _type: 'reference', _ref: asset._id,}
                }
            })
        } catch (error) {
            if (error instanceof Error) {
                throw new Error (error.message)
            }
        }
    }

    async getProjects () {
        try {
            return await sanityService.fetch('*[_type == "projects"]{ ..., thumbnail{ asset-> } }')
        } catch (error) {
            if (error instanceof Error) {
                throw new Error (error.message)
            }
        }
    }

    async getProjectBySlug (slug: string) {
        try {
            await sanityService.fetch('*[_type == "project" && slug.current == $slug][0]'),
            {slug}
        } catch (error) {
            if (error instanceof Error) {
                throw new Error (error.message)
            }
        }
    }

    async getProjectByID (id: string) {
        try {
            await sanityService.fetch('*[_type == "project" &&_id == $id][0]'),
            {id}
        } catch (error) {
            if (error instanceof Error) {
                throw new Error (error.message)
            }
        }
    }

    async updateProject(id: string, dto: new_projectsDTO, thumbnail: any) {
        try {
            const patch = await sanityService.patch(id)
            .set({
                title: dto.new_title,
                description: dto.new_description,
                tech_stack: dto.new_tech_stack,
                link: dto.new_link,

            })

            if(thumbnail) {
                const asset = await sanityService.assets.upload(
                    'image', thumbnail.buffer, {filename: thumbnail.originalname}
                )
                patch.set({
                thumbnail: {_type: 'image', asset: {_type: 'reference', _ref: asset._id}}
            })
            }
            patch.commit()
        } catch(error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            }
        }
    }

    async deleteProject (id: string) {
        try{
            await sanityService.delete(id)
        } catch (error) {
            if (error instanceof Error) {
                throw new Error (error.message)
            }
        }
    }
}