import conf from "../conf/conf.js";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

class DataBaseService {
  client = new Client();
  bucket;
  databases;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectid);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  //slug is id of post

  async createPost({ title, slug, content, featuredImg, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseid,
        conf.appwriteCollectionid,
        slug,
        {
          title,
          content,
          featuredImg,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite service::createPost::::error", error);
    }
  }

  async updatePost(slug, { title, content, featuredImg, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseid,
        conf.appwriteCollectionid,
        slug,
        {
          title,
          content,
          featuredImg,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite service::updatePost::::error", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseid,
        conf.appwriteCollectionid,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite service::deletePost::::error", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      await this.databases.getDocument(
        conf.appwriteDatabaseid,
        conf.appwriteCollectionid,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite service::getPost::::error", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      await this.databases.listDocuments(
        conf.appwriteDatabaseid,
        conf.appwriteCollectionid,
        queries
      );
      return true;
    } catch (error) {
      console.log("Appwrite service::getPosts::::error", error);
      return false;
    }
  }

  //file upload services

  async uploadFile(file) {
    try {
      await this.bucket.createFile(conf.appwriteBucketid, ID.unique(), file);
      return true;
    } catch (error) {
      console.log("Appwrite service::uploadFile::::error", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketid, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite service::deleteFile::::error", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appwriteBucketid, fileId);
  }
}
const dbservice = new DataBaseService();

export default dbservice;
