import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';

// Below you can see the application of catchAsync function. 
const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;  // This is sample code to show you the destructuring of data from req.body.

  // Below is the sample code to show you how to call the service function and pass parameter to it. 
  const result = await UserServices.createStudentIntoDB(
    req.file,
    password,
    studentData,
  );

  // Below you can see the use of custom sendResponse function to make the code base clean. 
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is created succesfully',
    data: result,
  });
});


export const UserControllers = {
  createStudent,
 };