import { NextRequest, NextResponse } from "next/server";
import { upload } from "./cloudinary";
import config from "../config/config";




// export async function middleware(req: NextRequest) {
//   //use middlewares for image processing

//   //...your existing authoritization logic

//   let image; // declare "image" for storing the url

//   //Handle Image upload (using middleware)

//   if (req.nextUrl.pathname.includes("create-event")) {
//     //Check the route

//     await upload(req, null, async (err) => {
//       if (err) {
//         console.log(err);
//       }
//       return new NextResponse(JSON.stringify(err));
      
//     },
    
// if (req.file) {
//   image = req.file.path;
// }

//   });
//   }


