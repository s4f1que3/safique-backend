import { IsString, isString } from "class-validator";

export class UpdateBioDTO {
    @IsString()
    content: string
}