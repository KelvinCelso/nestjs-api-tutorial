import {
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from '../../src/prisma/prisma.service';
import {
  CreateBookmarkDto,
  EditBookmarkDto,
} from './dto';

@Injectable()
export class BookmarkService {
  constructor(private prisma: PrismaService) {}

  getBookmarks(userId: number) {
    const bookmarks =
      this.prisma.bookmark.findMany();

    if (!bookmarks) {
      throw new HttpException(
        'There are no bookmarks on the database',
        HttpStatus.NOT_FOUND,
      );
    }
    return bookmarks;
  }

  createBookmark(
    userId: number,
    dto: CreateBookmarkDto,
  ) {}

  getBookmarkById(
    userId: number,
    bookmarkId: number,
  ) {}

  editBookmarkById(
    userId: number,
    dto: EditBookmarkDto,
    bookmarkId: number,
  ) {}

  deleteBookmarkById(
    userId: number,
    bookmarkId: number,
  ) {}
}
