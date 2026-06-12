import { IsString, IsUrl } from "class-validator";
import { Injectable } from "@nestjs/common";

@Injectable()
export class projectsDTO {
    @IsString()
    title: string

    @IsString()
    description: string

    @IsString()
    tech_stack: string

    @IsUrl()
    link: string
}

@Injectable()
export class new_projectsDTO {
    @IsString()
    new_title: string

    @IsString()
    new_description: string

    @IsString()
    new_tech_stack: string

    @IsUrl()
    new_link: string
}
