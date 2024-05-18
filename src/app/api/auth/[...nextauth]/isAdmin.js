import { getServerSession } from "next-auth";
import { UserInfo } from "@/app/models/UserInfo";
import mongoose from "mongoose";
import { authOptions } from "./authOptions";

export async function isAdmin() {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;
  if (!userEmail) {
    return false;
  }
  await mongoose.connect(process.env.MONGO_URL);
  const userInfo = await UserInfo.findOne({ email: userEmail });
  if (!userInfo) {
    return false;
  }
  return userInfo.admin;
}
