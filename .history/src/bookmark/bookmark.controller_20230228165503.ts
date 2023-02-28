import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { BookmarkService } from './bookmark.service';

@UseGuards(JwtGuard)
@Controller('bookmarks')
export class BookmarkController {
  constructor(
    private bookmmarkService: BookmarkService,
  ) {}
  @Get()
  getBookmarks() {
    return this.bookmmarkService.getBookmarks();
  }

  @Post()
  createBookmark() {}

  @Get()
  getBookmarkById() {}

  @Patch()
  editBookmarkById() {}

  @Delete()
  deleteBookmarkById() {}
}
