import { FileValidator } from '@nestjs/common';

export class ImageFileValidator extends FileValidator {
    constructor() {
        super({});
    }

    isValid(file: Express.Multer.File): boolean {
        if (!file) return false;

        const allowedMimeTypes = [
            'image/jpeg',
            'image/png',
            'image/jpg',
            'image/gif',
        ];

        return allowedMimeTypes.includes(file.mimetype);
    }

    buildErrorMessage(file: Express.Multer.File): string {
        return `File type ${file.mimetype} is not allowed. Only JPEG, PNG, JPG are allowed`;
    }
}
