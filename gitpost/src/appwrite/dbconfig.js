import conf from "../conf/conf.js";
import { Client, Account, ID, Databases, Query } from "appwrite";

class DatabaseService {
  client = new Client();
  databases;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectid);
    this.databases = new Databases(this.client);
  }

  async updateProfile({ slug, usn, domain, status, isAvailable }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseid,
        conf.appwriteCollectionid,
        slug,
        { usn, domain, isAvailable, status }
      );
    } catch (error) {
      console.log("Appwrite service::updateProfile::error", error);
    }
  }

  async addProject({ slug, usn, title, description, Projdomain }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseid,
        conf.appwriteCollectionid,
        slug,
        {
          usn,
          title,
          description,
          Projdomain,
        }
      );
    } catch (error) {
      console.log("Appwrite service::addProject::error", error);
    }
  }

  async updateProject(slug, { usn, title, description, Projdomain }) {
    try {
      return await this.databases.updateDocumentDocument(
        conf.appwriteDatabaseid,
        conf.appwriteCollectionid,
        slug,
        {
          usn,
          title,
          description,
          Projdomain,
        }
      );
    } catch (error) {
      console.log("Appwrite service::updateProject::error", error);
    }
  }

  async deleteProject(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseid,
        conf.appwriteCollectionid,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite service::deleteProject::error", error);
      return false;
    }
  }

  async getProject(slug) {
    try {
      await this.databases.getDocument(
        conf.appwriteDatabaseid,
        conf.appwriteCollectionid,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite service::getProject::::error", error);
      return false;
    }
  }

  async getProjects(queries = [Query.equal("status", "active")]) {
    try {
      await this.databases.listDocuments(
        conf.appwriteDatabaseid,
        conf.appwriteCollectionid,
        queries
      );
      return true;
    } catch (error) {
      console.log("Appwrite service::getProjects::::error", error);
      return false;
    }
  }
}

const dbservice = new DatabaseService();
export default dbservice;
