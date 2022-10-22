import { Controller, Get, Param, Req, Res } from "@nestjs/common";

@Controller({ host: "mydomain.com", path: 'admin' })
export class AdminController {
  @Get()
  index(@Req() request): string {
    console.log(request.host)
    return "Admin page";
  }
}
