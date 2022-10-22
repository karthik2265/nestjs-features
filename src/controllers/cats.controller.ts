import { Controller, Get, Param, Req, Res } from "@nestjs/common";

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
}
