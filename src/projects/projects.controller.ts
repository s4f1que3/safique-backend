import { Controller, Post, Get, Patch, Delete, UseInterceptors, UploadedFiles, UseGuards, Body, Param } from "@nestjs/common";
import type { Express } from "express";
import { projectsService } from "./projects.service";
import { projectsDTO, new_projectsDTO } from "./projects.dto";
import { AuthGuard } from "src/auth/auth.guard";
import { FileFieldsInterceptor } from "@nestjs/platform-express";

@Controller('projects')
export class projectsController {
    constructor(private readonly project: projectsService){}

    @Post('create')
    @UseGuards(AuthGuard)
    @UseInterceptors(FileFieldsInterceptor([
        {name: 'thumbnail', maxCount: 1}
    ]))
    async createProject (@Body() dto: projectsDTO, @UploadedFiles() files: {thumbnail?: any}) {
        const thumbnail = files?.thumbnail?.[0]
        return await this.project.createProject(dto, thumbnail)
    }

    @Get()
    async getAll () {
        return await this.project.getProjects()
    }

    @Get(':id')
    async getByID (@Param('id') id: string) {
        return await this.project.getProjectByID(id)
    } 

    @Get(':slug') 
    async getBySlug (@Param('slug') slug: string) {
        return await this.project.getProjectBySlug(slug)
    }

    @Patch('update/:id')
    @UseGuards(AuthGuard)
    @UseInterceptors(FileFieldsInterceptor([
        {name: 'thumbnail', maxCount: 1}
    ]))
    async updateProject (@Body() dto: new_projectsDTO, @Param('id') id: string, @UploadedFiles() files: {thumbnail?: any}) {
        const thumbnail = files?.thumbnail?.[0]
        return await this.project.updateProject(id, dto, thumbnail)
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    async deleteProject (@Param('id') id: string) {
        return await this.project.deleteProject(id)
    }
}
