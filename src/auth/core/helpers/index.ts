/* eslint-disable @typescript-eslint/no-explicit-any */

export const handleResponse = (
    res: any,
    statusCode: number,
    status: boolean,
    message: string,
    data?: any
  ) => {
    return res.status(statusCode).json({
      status,
      message,
      payload: data,
    });
  };
  
  export const accessDeniedResponse = (
    res: any,
    message = 'An error occurred',
    data?: any
  ) => {
    return res.status(403).json({
      status: false,
      message,
      payload: data,
    });
  };
  
  export const successResponse = (
    res: any,
    message = 'Operation successful',
    data?: any,
    meta?: any
  ) => {
    return res.status(200).json({
      status: true,
      message,
      payload: data,
      meta,
    });
  };
  
  export const errorResponse = (
    res: any,
    message = 'An error occurred',
    data?: any
  ) => {
    return res.status(400).json({
      status: false,
      message,
      payload: data,
    });
  };
  
  export const notFoundResponse = (
    res: any,
    message = 'record not found',
    data?: any
  ) => {
    const status = data?.constructor === Array ? true : false;
    return res.status(404).json({
      status,
      message,
      payload: data,
    });
  };
  
  export const serviceResponse = ({
    status,
    message,
    data,
  }: {
    status: boolean;
    message: string;
    data?: any;
  }) => {
    return { status, message, data };
  };
  
  export const log = (data: any) => {
    console.log(data);
  };
  
  export const serverDate = (data: Date) => new Date(data.setHours(data.getHours() - 8));
  
  export const getStartOfNextDay = (date: Date) => {
    // Clone the date to avoid modifying the original date
    const startOfNextDay = new Date(date);
  
    // Add one day
    startOfNextDay.setDate(startOfNextDay.getDate() + 1);
  
    // Set the time to 00:00:00
    startOfNextDay.setHours(0, 0, 0, 0);
  
    return startOfNextDay;
  }
  
  export const expiredWithinTwentyFourHours = (date: Date) => {
    const expiredDate = new Date(date);
    const now = new Date();
    const nowDate = new Date(now.setHours(now.getHours() - 8));
    const parseDate = Date.parse(nowDate.toString());
  
    const createdAt = +new Date(Date.parse(expiredDate.toString()));
    const oneDay = 24 * 60 * 60 * 1000;
  
    return (parseDate - createdAt) > oneDay;
  }
  