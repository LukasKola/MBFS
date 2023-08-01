import type { NextApiRequest, NextApiResponse } from "next";
 
import { createUploadthing, type FileRouter } from "uploadthing/next-legacy";
 
const f = createUploadthing();
 
const auth = (req: NextApiRequest, res: NextApiResponse) => ({ id: "fakeId" }); // Fake auth function
 
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    // Set permissions and file types for this FileRoute
    
    .onUploadComplete(async ({ file }) => {
      // This code RUNS ON YOUR SERVER after upload
 
      console.log("file url", file.url);
    }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;