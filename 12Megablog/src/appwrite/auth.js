import { current } from "@reduxjs/toolkit";
import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectid);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //call another method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.log("Appwrite service::login::error", error);
    }
  }

  async getCurrentUser() {
    try {
      // console.log(conf.appwriteProjectid);
      const data = await this.account.get();
      console.log(data);
      return data;
    } catch (error) {
      console.log("Appwrite service::getCurrentUser::error", error);
    }
    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service::logout::error", error);
    }
  }
}

const authService = new AuthService();

export default authService;
