import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import {
  AbstractHttpAdapter,
  BaseExceptionFilter,
  HttpAdapterHost,
} from "@nestjs/core";

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  // constructor(httpAdapterHost: AbstractHttpAdapter) {
  //   super(httpAdapterHost);
  // }
  catch(exception: unknown, host: ArgumentsHost) {
    console.log("all exceptions are handled here");
    const ctx = host.switchToHttp();
    console.log(ctx.getRequest().body);
    super.catch(exception, host);
  }
}
