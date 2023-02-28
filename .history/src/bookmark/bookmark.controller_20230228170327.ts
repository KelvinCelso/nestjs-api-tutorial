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
    private bookmarkService: BookmarkService,
  ) {}
  @Get('all')
  getBookmarks() {
    return this.bookmarkService.getBookmarks();
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
