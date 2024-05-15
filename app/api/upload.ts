// import { createClient } from "@/utils/supabase/server";
// import { NextApiRequest, NextApiResponse } from "next/types";
// import * as tus from "tus-js-client";
// import fs from "fs";

// const projectId = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_ID;

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// // import { UploadDataTypes } from "@/models/interfaces/uploadPanel";
// // const uploadData: UploadDataTypes = {
// //   audioFile: formData.get("mp3File") as File,
// //   albumArt: formData.get("albumArt") as File,
// //   songName: formData.get("songName") as string,
// // };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method not allowed" });
//   }
//   const {
//     data: { session },
//   } = await supabase.auth.getSession();

//   return new Promise((resolve, reject) => {
//     var upload = new tus.Upload(file, {
//       endpoint: `https://${projectId}.supabase.co/storage/v1/upload/resumable`,
//       retryDelays: [0, 3000, 5000, 10000, 20000],
//       headers: {
//         authorization: `Bearer ${session.access_token}`,
//         "x-upsert": "true", // optionally set upsert to true to overwrite existing files
//       },
//       uploadDataDuringCreation: true,
//       removeFingerprintOnSuccess: true, // Important if you want to allow re-uploading the same file https://github.com/tus/tus-js-client/blob/main/docs/api.md#removefingerprintonsuccess
//       metadata: {
//         bucketName: bucketName,
//         objectName: fileName,
//         contentType: "image/png",
//         cacheControl: 3600,
//       },
//       chunkSize: 6 * 1024 * 1024, // NOTE: it must be set to 6MB (for now) do not change it
//       onError: function (error) {
//         console.log("Failed because: " + error);
//         reject(error);
//       },
//       onProgress: function (bytesUploaded, bytesTotal) {
//         var percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
//         console.log(bytesUploaded, bytesTotal, percentage + "%");
//       },
//       onSuccess: function () {
//         console.log("Download %s from %s", upload.file.name, upload.url);
//         resolve();
//       },
//     });

//     // Check if there are any previous uploads to continue.
//     return upload.findPreviousUploads().then(function (previousUploads) {
//       // Found previous uploads so we select the first one.
//       if (previousUploads.length) {
//         upload.resumeFromPreviousUpload(previousUploads[0]);
//       }

//       // Start the upload
//       upload.start();
//     });
//   });
// }
