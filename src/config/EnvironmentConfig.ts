import { config } from "dotenv";

import path = require("path");

export class EnvironmentConfig {
  public static instance: EnvironmentConfig;

  public UserEmail: string;
  public UserEmailPassword: string;
  public Mailbox_SourcePath: string;
  public Domain : string
  public algorithm:string
  public cryptokey:string
  public Refresh_Token_Secret : string
  public JWT_Token_Secret : string
  public Enable_Encryption : string
  public Environment:string

  public static getInstance() {
    if (!EnvironmentConfig.instance) {
      EnvironmentConfig.instance = new EnvironmentConfig();
    }
    return EnvironmentConfig.instance;
  }

  constructor() {
    const ENV_FILE = path.join(__dirname, "../..", ".env");
    config({ path: ENV_FILE });

    this.UserEmail = process.env.Useremail;
    this.UserEmailPassword = process.env.Useremailpassword;
    this.Mailbox_SourcePath = process.env.Mailbox_SourcePath;
    this.Domain = process.env.Domain
    this.cryptokey = process.env.cryptokey
    this.algorithm = process.env.algorithm

    this.Refresh_Token_Secret = process.env.Refresh_Token_Secret
    this.JWT_Token_Secret = process.env.JWT_Token_Secret
    console.log("tokn secret: ",this.JWT_Token_Secret)

    this.Enable_Encryption = process.env.Enable_Encryption
    this.Environment = process.env.Environment

  }
}
