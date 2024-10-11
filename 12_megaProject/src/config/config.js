const config = {
  appWriteURL: String(import.meta.env.VITE_APPWRITE_URL),
  appWriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appWriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appWriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appWriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
  tinyAPIKeyID: String(import.meta.env.VITE_TINYMCE_API_KEY_ID)
};
export default config