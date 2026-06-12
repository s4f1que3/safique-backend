import { Module } from "@nestjs/common";
import { projectsController } from "./projects.controller";
import { projectsService } from "./projects.service";

@Module({
    controllers: [projectsController],
    providers: [projectsService],
    exports: [projectsService]
})

export class ProjectsModule {}