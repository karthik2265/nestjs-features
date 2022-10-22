import { Body, Controller, Get, Param, Post, Req, Res } from "@nestjs/common";
import { request } from "http";
import { CreateCatDto } from "src/Dto/create-cat-dto";

@Controller("cats")
export class CatsController {
  @Get()
  findAll(@Res({ passthrough: true }) response, @Req() request): string {
    response.status(201);
    return "This action returns all cats";
  }

  @Get(":id")
  findOne(@Param("id") id): string {
    return `found a cat with id = ${id}`;
  }

  @Post()
  createOne(@Body() catDto: CreateCatDto, @Req() request): CreateCatDto {
    console.table(catDto);
    return catDto;
  }
}
