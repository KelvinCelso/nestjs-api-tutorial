import {
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreateBookmarkDto,
  EditBookmarkDto,
} from './dto';

@Injectable()
export class BookmarkService {
  constructor(private prisma: PrismaService) {}

  async getBookmarks(userId: number) {
    const bookmarks =
      await this.prisma.bookmark.findMany();

    if (!bookmarks) {
      throw new HttpException(
        'There are no bookmarks on the database',
        HttpStatus.NOT_FOUND,
      );
    }
    return bookmarks;
  }

  async createBookmark(
    userId: number,
    dto: CreateBookmarkDto,
  ) {}

  async getBookmarkById(
    userId: number,
    bookmarkId: number,
  ) {}

  async editBookmarkById(
    userId: number,
    dto: EditBookmarkDto,
    bookmarkId: number,
  ) {}

  async deleteBookmarkById(
    userId: number,
    bookmarkId: number,
  ) {}
}
