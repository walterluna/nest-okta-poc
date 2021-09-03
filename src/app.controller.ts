import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';

@Controller('books')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard('bearer'))
  getAllBooks(): any[] {
    const books = this.appService.getAllBooks();
    return books;
  }

  @Get(':id')
  @UseGuards(AuthGuard('bearer'))
  getBook(@Param() id): any {
    return this.appService.getBook(id);
  }

  @Post()
  @UseGuards(AuthGuard('bearer'))
  updateBook(@Body() book: any): any {
    return this.appService.updateBook(book);
  }
}
