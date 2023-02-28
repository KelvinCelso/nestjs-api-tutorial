import {
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BookmarkService {
  constructor(private prisma: PrismaService) {}

  async getBookmarks() {
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

  async createBookmark() {}

  async getBookmarkById() {}

  async editBookmarkById() {}

  async deleteBookmarkById() {}
}
