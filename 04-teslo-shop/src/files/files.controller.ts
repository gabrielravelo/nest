import {
    Controller,
    Post,
    UploadedFile,
    ParseFilePipe,
    UseInterceptors,
    BadRequestException,
    MaxFileSizeValidator,
    FileTypeValidator,
} from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileFilter } from './helpers/fileFilter.helper';
import { diskStorage } from 'multer';

@Controller('files')
export class FilesController {
    constructor(private readonly filesService: FilesService) {}

    @Post('product')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './static/uploads'
        })
    }))
    uploadProductImage(
        @UploadedFile(
            new ParseFilePipe({
                validators: [
                    new MaxFileSizeValidator({ maxSize: 500000 }),
                    new FileTypeValidator({
                        fileType: 'image/jpeg',
                    }),
                ],
            }),
        )
        file: Express.Multer.File,
    ) {
        console.log('File mimetype:', file.mimetype); // ← Verifica el mimetype real
        console.log('File originalname:', file.originalname);
        return {
            fileName: file.originalname,
            mimetype: file.mimetype // ← Para verlo en la respuesta
        };
    }
}
