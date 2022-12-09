import {
	IsString,
	IsNotEmpty,
	IsOptional,
	IsIn,
} from 'class-validator'
import { ServiceObjectDto } from './ServiceObject.dto'

export class BusinessObjectDto {
  @IsNotEmpty({ message: 'Name is required' })
	@IsString({ message: 'Name must be a string' })
	name!: string

  @IsOptional()
	@IsString({ message: 'Acronym must be a string' })
	acronym?: string

  @IsOptional()
	@IsString({ message: 'Description must be a string' })
	description?: string

	services?: Array<ServiceObjectDto>
}