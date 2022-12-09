import {
	IsString,
	IsNotEmpty,
	IsOptional,
	IsIn,
} from 'class-validator'

export class ServiceObjectDto {
  @IsNotEmpty({ message: 'Name is required' })
	@IsString({ message: 'Name must be a string' })
	name!: string

  @IsNotEmpty({ message: 'Label is required' })
	@IsString({ message: 'Label must be a string' })
	label!: string

  @IsOptional()
	@IsString({ message: 'Description must be a string' })
	description?: string
}