/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { NextFunction, Request, Response } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { upload } from '../../utils/sendImageToCloudinary';
import { UserControllers } from './user.controller';
import { UserValidation } from './user.validation';

// Todo. Everything in this file need to customize according to your requirement

const router = express.Router();

router.post(
  '/create-student',
  // auth(), // Use it if you apply auth code. No corresponding code is mentioned here. If you do not need it remove it. 
  upload.single('file'), // Use it if you use multer to upload file.
   validateRequest(UserValidation.userValidationSchema), // This is the middleware to validate req.body using zod. the corresponding code you will find in the validateRequest.ts file inside the middleware folder and user.validation.ts file inside the module folder. 
  UserControllers.createStudent, // You will find the corresponding code in the user.controller.ts file
);





export const UserRoutes = router;