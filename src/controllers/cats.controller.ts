import { Body, Controller, Get, Param, Post, Req, Res } from "@nestjs/common";
import { request } from "http";
// Dto
import { CreateCatDto } from "src/Dto/create-cat-dto";
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

  @Get(":id")
  findOne(@Param("id") id): string {
    return `found a cat with id = ${id}`;
  }

  @Post()
  createOne(@Body() catDto: CreateCatDto, @Req() request): CreateCatDto {
    this.catsService.create(catDto as Cat);
    return catDto;
  }
}
