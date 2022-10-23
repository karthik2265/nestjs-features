import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
  UseFilters,
  ValidationPipe,
} from "@nestjs/common";
import { request } from "http";
// Dto
import { CreateCatDto } from "src/Dto/create-cat-dto";
import { AllExceptionsFilter } from "src/exception-filters/all-exceptions-filter";
import { HttpExceptionFilter } from "src/exception-filters/http-exception-filter";
// services
import { CatsService } from "src/services/cats/cats.service";
import { Cat } from "src/types/cat";

@Controller("cats")
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  findAll(@Res({ passthrough: true }) response, @Req() request): Cat[] {
    response.status(201);
    return this.catsService.findAll();
  }

  // @UseFilters(HttpExceptionFilter)
  @Get(":id")
  findOne(
    @Param(
      "id",
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })
    )
    id
  ): string {
    // throw new Error("what will happen now???");
    return `found a cat with id = ${id}`;
  }

  @Post()
  createOne(@Body(ValidationPipe) catDto: CreateCatDto, @Req() request): CreateCatDto {
    this.catsService.create(catDto as Cat);
    return catDto;
  }
}
